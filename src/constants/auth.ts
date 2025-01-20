export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_STORAGE_URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
export const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}
