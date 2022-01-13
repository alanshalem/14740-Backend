// @deno-types="https://deno.land/x/servest/types/react/index.d.ts"
import React from "http://dev.jspm.io/react/index.js";

// @deno-types="https://deno.land/x/servest/types/react-dom/server/index.d.ts"
import ReactDOMServer from "http://dev.jspm.io/react-dom/server.js";
import { createApp } from "http://deno.land/x/servest/mod.ts";

const app = createApp();

// * http://localhost:8080/?frase=hola%20mundo
app.handle(
  "/",
  async (req) => {
    const query = req.url.replace(/\//g, "");
    const params = new URLSearchParams(query);
    const frase = params.get("frase");

    if (frase) {
      const fraseDeco = decodeURIComponent(frase);

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
                <h1 style={{ color: "blue" }}>
                  {fraseDeco.split(" ").reverse().join(" ")}
                </h1>
              </body>
            </html>,
          ),
        },
      );
    }
  },
);

app.listen(
  {
    port: 8080,
  },
);
