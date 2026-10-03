import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import TanstackProvider from "./lib/tanstack/providers.tsx";
import { Toaster } from "../components/ui/toast.tsx";
import { CookiesProvider } from "react-cookie";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanstackProvider>
      <CookiesProvider>
        <App />
      </CookiesProvider>
      <Toaster />
    </TanstackProvider>
  </StrictMode>,
);
