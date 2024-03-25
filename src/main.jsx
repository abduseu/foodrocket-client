import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/Root";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import AuthProvider from "./providers/AuthProvider";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Private from "./components/Private";
import Favorite from "./pages/user/Favorite";



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/login',
        element: <LoginPage/>,
      },
      {
        path: '/signup',
        element: <SignupPage/>,
      },
      {
        path: '/restaurant/:id',
        element: <HomePage/>,
      },
      

      // Users Dashboard
      {
        path: '/user',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/favorite',
        element: <Private><Favorite/></Private>,
      },
      {
        path: '/cart',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/placed-orders',
        element: <Private><HomePage/></Private>,
      },

      // Restaurant Dashboard
      {
        path: '/restaurant',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/restaurant/menu',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/restaurant/menu/add',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/restaurant/menu/update/:id',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/restaurant/orders',
        element: <Private><HomePage/></Private>,
      },

      // Rider Dashboard
      {
        path: '/rider',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/task',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/task/history',
        element: <Private><HomePage/></Private>,
      },

      // Admin Dashboard
      {
        path: '/admin',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/manage-users',
        element: <Private><HomePage/></Private>,
      },
      {
        path: '/manage-restaurant',
        element: <Private><HomePage/></Private>,
      },
    ]
  }
])


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);