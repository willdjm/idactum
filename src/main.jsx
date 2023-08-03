import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { register } from 'swiper/element/bundle'

register();

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/controller";

import "swiper/css/zoom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
