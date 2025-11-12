import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with both anon key and scoped token
export const supabase = createClient(
  'https://hfndfmtxhqvubnfiwzlz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmbmRmbXR4aHF2dWJuZml3emx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA2Mjk4MDgsImV4cCI6MjA3NjIwNTgwOH0.n0NK_Ov03-UbDQYr5mio3ggYa5XTN-XI1kB6X81N4nA',
  {
    global: {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsImF1ZCI6ImF1dGhlbnRpY2F0ZWQiLCJyb2xlIjoiYW5vbiIsInRlbmFudF9pZCI6IkR4bm1EaTdrekhOdEN4cm5TV0c2Rko0QnBsejIiLCJwcm9qZWN0X2lkIjoiMThmYWVkMjUtMzgzMy00M2RlLTk2MTYtYzU2ZjcwOTBiMmQyIiwianRpIjoiMDdhNzczNDItNzU3OC00OTYzLTg1YWMtZjdlYzc1NmZmN2YzIiwiaWF0IjoxNzYyOTY2NTU2LCJleHAiOjE3NjI5NjkyNTZ9.eFsah037F4svjrnFXq5N8SE-zfHCE35yjThZQ11_-I8`
      }
    }
  }
);

// Tenant and project IDs from JWT
export const TENANT_ID = 'DxnmDi7kzHNtCxrnSWG6FJ4Bplz2';
export const PROJECT_ID = '18faed25-3833-43de-9616-c56f7090b2d2';
