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
  const [supabaseClient, setSupabaseClient] = useState(() =>
    createClient<Database>(SUPABASE_URL, SUPABASE_KEY),
  );

  useEffect(() => {
    if (session?.getToken) {
      const fetchToken = async () => {
        const token = await session.getToken({
          template: 'supabase',
        });

        const newClient = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
          global: {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        });

        setSupabaseClient(newClient);
      };

      fetchToken();
    }
  }, [session]);

  return (
    <SupabaseContext.Provider value={supabaseClient}>
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
