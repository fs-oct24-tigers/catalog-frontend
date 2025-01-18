import { ClerkProvider } from '@clerk/clerk-react';
import { createClient } from '@supabase/supabase-js';
import { useSession } from '@clerk/clerk-react';
import { createContext, useContext, useEffect, useState } from 'react';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;
const CLERK_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!CLERK_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

const SupabaseContext = createContext<ReturnType<typeof createClient> | null>(
  null,
);

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSession();
  const [supabase, setSupabase] = useState(() =>
    createClient(SUPABASE_URL, SUPABASE_KEY),
  );

  useEffect(() => {
    const initSupabase = async () => {
      if (session) {
        const token = await session.getToken({ template: 'supabase' });
        const newClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });
        setSupabase(newClient);
      }
    };

    initSupabase();
  }, [session]);

  return (
    <SupabaseContext.Provider value={supabase}>
      {children}
    </SupabaseContext.Provider>
  );
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider publishableKey={CLERK_KEY}>
      <SupabaseProvider>{children}</SupabaseProvider>
    </ClerkProvider>
  );
};
