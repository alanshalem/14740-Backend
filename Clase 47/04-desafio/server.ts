import { serve } from "https://deno.land/std@0.100.0/http/server.ts";

const PORT = 8080;
const server = serve(
  {
    port: PORT,
  },
);

console.log(`http://localhost:${PORT}`);

for await (const req of server) {
  const query = req.url.replace(/\//g, "");
  const params = new URLSearchParams(query);
  const frase = params.get("frase");

  if (frase) {
    const fraseDeco = decodeURIComponent(frase);

    req.respond(
      {
        status: 200,
        headers: new Headers(
          {
            "content-type": "text/html; charset=utf-8",
          },
        ),
        body: fraseDeco.split(" ").reverse().join(" "),
      },
    );
  }
}
