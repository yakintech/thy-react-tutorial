import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('container'));

export const queryClient = new QueryClient()

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </QueryClientProvider>


);

