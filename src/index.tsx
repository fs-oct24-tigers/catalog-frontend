import { createRoot } from 'react-dom/client';
import Root from './Root';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { AuthProvider } from './providers/AuthProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </PersistGate>
  </Provider>,
);
