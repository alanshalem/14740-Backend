// @deno-types="https://deno.land/x/servest/types/react/index.d.ts"
import React from "http://dev.jspm.io/react/index.js";

// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "http://dev.jspm.io/react-dom/server.js";
import { createApp } from "http://deno.land/x/servest/mod.ts";

const app = createApp();
let visitas = 0;

app.handle(
  "/",
  async (req) => {
    await req.respond(
      {
        status: 200,
        headers: new Headers(
          {
            "content-type": "text/html; charset=utf-8",
          },
        ),
        body: ReactDOMServer.renderToString(
          <html>
            <head>
              <meta charSet="utf-8" />
              <title>servest</title>
            </head>
            <body>
              <h1 style={{ color: "blue" }}>Hello Servest con React!</h1>
              <h2 style={{ color: "brown" }}>Visitas: {visitas += 1}</h2>
              <h3 style={{ color: "purple" }}>
                FyH: {new Date().toLocaleString()}
              </h3>
            </body>
          </html>,
        ),
      },
    );
  },
);

app.listen(
  {
    port: 8080,
  },
);
