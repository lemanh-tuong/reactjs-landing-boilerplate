import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './i18n/i18n';
import './css/tailwind.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
