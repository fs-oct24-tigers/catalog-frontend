import { createRoot } from 'react-dom/client';
import Root from './Root';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

const queryClient = new QueryClient();

createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Root />
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
);
