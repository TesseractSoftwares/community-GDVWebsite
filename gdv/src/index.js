import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';

import { HomePage } from './pages/HomePage/HomePage';
import { GamePage } from './pages/GamePage/GamesPage';
import { AboutusPage } from './pages/AboutusPage/AboutusPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { SociosPage } from './pages/SociosPage/SociosPage';
import { ContactPage } from './pages/ContactPage/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/videogames',
    element: <GamePage />,
  },
  {
    path: '/aboutus',
    element: <AboutusPage />,
  },
  {
    path: '/socios',
    element: <SociosPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);