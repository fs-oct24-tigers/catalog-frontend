import { createRoot } from 'react-dom/client';
import Root from './Root';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Root />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
