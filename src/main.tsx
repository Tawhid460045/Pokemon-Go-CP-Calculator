
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { hydrate, render } from "react-dom";

// Use createRoot for development, and hydrate for production
const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    console.log("Hydrating for pre-rendered content");
    hydrate(<App />, rootElement);
  } else {
    console.log("Normal render path");
    createRoot(rootElement).render(<App />);
  }
}

// Support for react-snap prerendering
if (import.meta.env.PROD) {
  const registerServiceWorker = () => {
    console.log("Service worker could be registered here");
    // Optional: Add service worker registration
  };
  registerServiceWorker();
}
