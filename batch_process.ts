
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

serve(async (req: Request) => {

  await batchProcessSomeStuff(req)

  new Response(
    `{"message":"success!"`,
    { headers: { "Content-Type": "application/json" } },
  )) 
}
