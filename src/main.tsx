import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import TanstackProvider from './lib/tanstack/providers.tsx'
import { Toaster } from '../components/ui/toast.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <App />
      <Toaster />
    </TanstackProvider>
  </StrictMode>,
)
