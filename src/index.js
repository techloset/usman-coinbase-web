import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './Pages/About/about';
import BlogContent from './Pages/blogContent/blogContent';
import App from './App';
import LandingPage from './Pages/landingPage/landingPage'
import Blogpage from './Pages/blogPage/blogpage';
import Contact from '../src/Pages/contactUs/contact';
import Nav from './Components/nav/nav';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav> <LandingPage /></Nav>,
  },
  {
    path: "/About",
    element: <Nav> <About /></Nav>,
  },
  {
    path: "/BlogContent",
    element: <Nav> <BlogContent /></Nav>,
  },
  {
    path: "/Blogpage",
    element: <Nav> <Blogpage /></Nav>,
  },
  {
    path: "/Contact",
    element: <Nav> <Contact /></Nav>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <RouterProvider router={router} />
    </>
  </React.StrictMode>
);


reportWebVitals();
