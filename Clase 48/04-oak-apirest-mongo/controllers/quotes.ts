import { MongoClient } from "../deps.ts";
import { Quote } from "../types.ts";

const URI = "mongodb://127.0.0.1:27017";

const client = new MongoClient();
try {
  await client.connect(URI);

  console.log("Base de datos conectada");
} catch (err) {
  console.log(err);
}

const db = client.database("quotesApp");
const quotes = db.collection<Quote>("quotes");

const getQuotes = async (
  {
    response,
  }: {
    response: any;
  },
) => {
  try {
    const allQuotes = await quotes.find({}).toArray();

    console.log(allQuotes);

    if (allQuotes) {
      response.status = 200;
      response.body = {
        success: true,
        data: allQuotes,
      };
    } else {
      response.status = 500;
      response.body = {
        success: false,
        msg: "Internal Server Error",
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

const getQuote = async (
  {
    params,
    response,
  }: {
    params: {
      id: string;
    };
    response: any;
  },
) => {
  console.log(params.id);

  const quote = await quotes.findOne(
    {
      quoteID: params.id,
    },
  );

  if (quote) {
    response.status = 200;
    response.body = {
      success: true,
      data: quote,
    };
  } else {
    response.status = 404;
    response.body = {
      success: false,
      msg: "No quote found",
    };
  }
};

const addQuote = async (
  {
    request,
    response,
  }: {
    request: any;
    response: any;
  },
) => {
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const quote = await body.value;

      await quotes.insertOne(quote);

      response.status = 201;
      response.body = {
        success: true,
        data: quote,
      };
    }
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

const updateQuote = async (
  {
    params,
    request,
    response,
  }: {
    params: {
      id: string;
    };
    request: any;
    response: any;
  },
) => {
  try {
    const body = await request.body();
    const inputQuote = await body.value;

    await quotes.updateOne(
      {
        quoteID: params.id,
      },
      {
        $set: {
          quote: inputQuote.quote,
          author: inputQuote.author,
        },
      },
    );

    const updatedQuote = await quotes.findOne(
      {
        quoteID: params.id,
      },
    );

    response.status = 200;
    response.body = {
      success: true,
      data: updatedQuote,
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

const deleteQuote = async (
  {
    params,
    response,
  }: {
    params: {
      id: string;
    };
    response: any;
  },
) => {
  try {
    await quotes.deleteOne(
      {
        quoteID: params.id,
      },
    );

    response.status = 201;
    response.body = {
      success: true,
      msg: "Quote deleted",
    };
  } catch (err) {
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { addQuote, deleteQuote, getQuote, getQuotes, updateQuote };
