import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Listed from './components/Listed/Listed';
import Read from './components/Read/Read';
import This_Year from './components/This_Year/This_Year';
import Top from './components/Top/Top';
import ErrorPage from './components/ErrorPage/ErrorPage';
import BookDetails from './components/BookDetails/BookDetails';
import ReadList from './components/ReadList/ReadList';
import WhiteList from './components/WhiteList/WhiteList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/listed',
        element: <Listed></Listed>,
        loader: () => fetch('/public/bookData.json')
      },
      {
        path: '/read',
        element: <Read></Read>
      },
      {
        path: '/top',
        element: <Top></Top>
      },
      {
        path: '/this_year',
        element: <This_Year></This_Year>
      },
      {
        path: '/book/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/public/bookData.json'),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
