import { createApp } from "http://deno.land/x/servest/mod.ts";

const app = createApp();

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
        body: "Hola mundo!",
      },
    );
  },
);

app.listen(
  {
    port: 8080,
  },
);
