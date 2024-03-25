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
import Profile from "./pages/user/Profile";
import PlacedOrders from "./pages/user/PlacedOrders";
import RestaurantProfile from "./pages/restaurant/RestaurantProfile";
import Menu from "./pages/restaurant/Menu";
import ReceivedOrders from "./pages/restaurant/ReceivedOrders";
import MenuAdd from "./pages/restaurant/MenuAdd";
import MenuUpdate from "./pages/restaurant/MenuUpdate";
import RiderProfile from "./pages/rider/RiderProfile";
import ReceivedTasks from "./pages/rider/ReceivedTasks";
import SingleTask from "./pages/rider/SingleTask";



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
        element: <Private><Profile/></Private>,
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
        element: <Private><PlacedOrders/></Private>,
      },

      // Restaurant Dashboard
      {
        path: '/restaurant',
        element: <Private><RestaurantProfile/></Private>,
      },
      {
        path: '/menu',
        element: <Private><Menu/></Private>,
      },
      {
        path: '/menu/add',
        element: <Private><MenuAdd/></Private>,
      },
      {
        path: '/menu/update/:id',
        element: <Private><MenuUpdate/></Private>,
      },
      {
        path: '/received-orders',
        element: <Private><ReceivedOrders/></Private>,
      },

      // Rider Dashboard
      {
        path: '/rider',
        element: <Private><RiderProfile/></Private>,
      },
      {
        path: '/task',
        element: <Private><ReceivedTasks/></Private>,
      },
      {
        path: '/task/:id',
        element: <Private><SingleTask/></Private>,
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