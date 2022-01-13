// ! https://doc.deno.land/https://deno.land/std@0.120.0/http/mod.ts
import { serve } from "https://deno.land/std@0.100.0/http/mod.ts";

const body = "Hello World\n";

const server = serve(
  {
    port: 8000,
  },
);

for await (const req of server) {
  req.respond(
    {
      body,
    },
  );
}
