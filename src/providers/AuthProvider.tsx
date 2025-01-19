import { ClerkProvider } from '@clerk/clerk-react';
import { createClient } from '@supabase/supabase-js';
import { useSession } from '@clerk/clerk-react';
import { useEffect, useState } from 'react';
import { SUPABASE_URL, SUPABASE_KEY, CLERK_KEY } from '@/constants/auth';
import type { Database } from '@/types/database';
import { SupabaseContext } from './SupabaseContext';
import ErrorBoundary from '@/components/ErrorBoundary';

const SupabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const { session } = useSession();
  const [supabase, setSupabase] = useState(() =>
    createClient<Database>(SUPABASE_URL, SUPABASE_KEY),
  );

  useEffect(() => {
    const initSupabase = async () => {
      if (session) {
        const token = await session.getToken({ template: 'supabase' });
        const newClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
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
    <ErrorBoundary>
      <ClerkProvider publishableKey={CLERK_KEY}>
        <SupabaseProvider>{children}</SupabaseProvider>
      </ClerkProvider>
    </ErrorBoundary>
  );
};
