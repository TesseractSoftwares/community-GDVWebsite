import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.css';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamesPage';
import { AboutusPage } from './pages/AboutusPage';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/videogames',
    element: <GamePage />,
  },
  {
    path: '/aboutus',
    element: <AboutusPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);