import { createContext } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

export const SupabaseContext = createContext<SupabaseClient<Database> | null>(
  null,
);
