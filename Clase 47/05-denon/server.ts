import { serve } from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 8080;
const server = serve(
  {
    port: PORT,
  },
);

console.log(`http://localhost:${PORT}`);

for await (const req of server) {
  req.respond(
    {
      status: 200,
      headers: new Headers(
        {
          "content-type": "text/html; charset=utf-8",
        },
      ),
      body: "<h2>Hola mundo!</h2>",
    },
  );
}
