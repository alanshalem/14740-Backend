// Include the cluster module
const cluster = require('cluster');
const AWS = require('aws-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const os = require('os').cpus();

if (cluster.isMaster) {
  for (let i = 0; i < os.length; i += 1) {
    cluster.fork();
  }

  cluster.on(
    'exit',
    (worker) => {
      console.log(`Worker ${worker.id} died :(`);
      cluster.fork();
    },
  );
} else {
  AWS.config.region = process.env.REGION;
  AWS.config.update(
    {
      accessKeyId: process.env.ACCESS_KEY_ID,
      secretAccessKey: process.env.SECRET_ACCESS_KEY,
    },
  );

  const sns = new AWS.SNS();
  const ddb = new AWS.DynamoDB();
  const ddbTable = process.env.STARTUP_SIGNUP_TABLE;
  const snsTopic = process.env.NEW_SIGNUP_TOPIC;
  const app = express();

  app.set(
    'view engine',
    'ejs',
  );
  app.set(
    'views',
    `${__dirname}/views`,
  );

  app.use(bodyParser.urlencoded({ extended: false }));

  app.get(
    '/',
    (_request, response) => response.render(
      'index',
      {
        static_path: 'static',
        theme: process.env.THEME || 'flatly',
        flask_debug: process.env.FLASK_DEBUG || 'false',
      },
    ),
  );

  app.post(
    '/signup',
    (request, response) => {
      const item = {
        email: {
          S: request.body.email,
        },
        name: {
          S: request.body.name,
        },
        preview: {
          S: request.body.previewAccess,
        },
        theme: {
          S: request.body.theme,
        },
      };

      ddb.putItem({
        TableName: ddbTable,
        Item: item,
        Expected: {
          email: {
            Exists: false,
          },
        },
      },
      (error, _data) => {
        if (error) {
          let returnStatus = 500;
          if (error.code === 'ConditionalCheckFailedException') {
            returnStatus = 409;
          }

          console.log(`DDB Error: ${error}`);

          return response.status(returnStatus).end();
        }

        sns.publish(
          {
            Message: `Name: ${request.body.name}\r\nEmail: ${request.body.email}\r\nPreviewAccess: ${request.body.previewAccess}\r\nTheme: ${request.body.theme}`,
            Subject: 'New user sign up!!!',
            TopicArn: snsTopic,
          },
          (error, _data) => {
            if (error) {
              console.log(`SNS Error: ${error}`);

              return response.status(500).end();
            }

            return response.status(201).end();
          },
        );
      });
    },
  );

  const PORT = process.env.PORT || 3000;

  app.listen(
    PORT,
    () => console.log(`Server running at http://127.0.0.1:${PORT}/`),
  );
}
