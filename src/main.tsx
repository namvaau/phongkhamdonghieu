import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import './assets/css/bootstrap.min.css';
import './assets/css/nice-select.css';
import './assets/css/font-awesome.min.css';
import './assets/css/icofont.css';
import './assets/css/slicknav.min.css';
import './assets/css/owl-carousel.css';
import './assets/css/datepicker.css';
import './assets/css/animate.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/normalize.css';
import './assets/css/responsive.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
