import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './root.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
