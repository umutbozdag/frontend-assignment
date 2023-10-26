import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/styles.scss'
import { App } from './App';
import { ContextProvider } from './context/ContextProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ContextProvider> 
      <App />
    </ContextProvider>
  </StrictMode>
);
