# my_airtable_backend
a collection of endpoints that process stuff in my airtable

## deployment
```bash
brew install supabase/tap/supabase

supabase login

supabase deploy functions run_on_insert batch_process --project-ref <your-supabase-project-ref>
```

## run_on_insert.ts

grabs each new row in the table and sends me it in an email

## batch_process.ts

runs every night, and sends me an email of the total revenue each day
