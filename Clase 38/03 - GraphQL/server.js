const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});

// !!!!!!!!!!!!!!!

const schema = buildSchema(`
  type Query {
    message: String,
    messages: [String],
    numero: Int,
    numeros: [Int],
    course(id: Int!): Course,
    courses(topic: String): [Course],
    cursos: [Course],
    cursos2: [Course]
  },
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!): Course
  },
  type Course {
    id: Int,
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String
  }
`);

const coursesData = [
  {
    id: 1,
    title: "Title",
    author: "Author",
    description: "Description",
    topic: "Node.js",
    url: "www.google.com",
  },
];

const getCourse = (args) =>
  coursesData.filter((course) => course.id === args.id)[0];

const getCourses = (args) => {
  if (args.topic) {
    return coursesData.filter((course) => course.topic === args.topic);
  }

  return coursesData;
};

const getCursos = () => coursesData;

const updateCourseTopic = ({ id, topic }) => {
  coursesData.map((course) => {
    if (course.id === id) {
      course.topic = topic;

      return course;
    }

    return undefined;
  });

  return coursesData.filter((course) => course.id === id)[0];
};

const root = {
  message: () => "Hola mundo!",
  messages: () => "Hola mundo!".split(" "),
  numero: () => 123,
  numeros: () => [1, 2, 3],
  course: getCourse,
  courses: getCourses,
  cursos: getCursos,
  cursos2: () => coursesData,
  updateCourseTopic,
};

// !!!!!!!!!!!!!!!

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // * http://localhost:8081/graphql
  })
);

app.use(express.static("public"));

// #region Ejemplos

/*

query message {
  message
}

query messages {
  messages
}

query numero {
  numero
}

query numeros {
  numeros
}

query course($courseID: Int!) {
  course(id: $courseID) {
    title
    author
    description
    topic
    url
  }
}

query courses($topic: String) {
  courses(topic: $topic) {
    title
    author
    description
    topic
    url
  }
}

query cursos {
  cursos {
    title
    author
    description
    topic
    url
  }
}

query cursos2 {
  cursos {
    title
    author
    description
    topic
    url
  }
}

mutation updateCourseTopic($courseID: Int!, $newTopic: String!) {
  updateCourseTopic(id: $courseID, topic: $newTopic) {
    id
  }
}

*/

// #endregion

// #region variables

/*

{
  "courseID": 1,
  "topic": "Node.js",
  "newTopic": "Nuevo Topic"
}

*/

// #endregion
