import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Hero CTA scroll functionality
(function() {
  const header = document.querySelector('header');
  const headerH = header ? header.offsetHeight : 0;

  function smoothScrollTo(selector: string) {
    const el = document.querySelector(selector);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (headerH + 16);
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // Wait for DOM to be ready
  setTimeout(() => {
    const joinBtn = document.querySelector('[data-cta="join-now"]');
    if (joinBtn) joinBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
      smoothScrollTo('#join');
    });

    const tourBtn = document.querySelector('[data-cta="book-tour"]');
    if (tourBtn) tourBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.querySelector('#tourModal');
      if (modal && typeof (modal as HTMLDialogElement).showModal === 'function') {
        (modal as HTMLDialogElement).showModal();
      } else {
        smoothScrollTo('#contact');
      }
    });
  }, 100);
})();
