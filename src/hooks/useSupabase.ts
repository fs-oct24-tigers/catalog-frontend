import { SupabaseContext } from '@/providers/SupabaseContext';
import { useContext } from 'react';

export const useSupabase = () => {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
};
