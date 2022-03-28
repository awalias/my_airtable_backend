import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

serve(async (req: Request) => {

  await processSomeEntry(req)

  new Response(
    `{"message":"success!"`,
    { headers: { "Content-Type": "application/json" } },
  )) 
}
