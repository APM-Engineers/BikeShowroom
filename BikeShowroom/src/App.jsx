import './App.css'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Error from './pages/Error'
import Model from './pages/Model'
import Testdrive from './pages/Testdrive'
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import Bike from './pages/Bike';
import Contactus from "./pages/Contactus"
import Aboutus from "./pages/Aboutus"
import Service from "./pages/Service"
import "./index.css"

function Layout() {
  return <>
    <Navbar></Navbar>
    <Outlet></Outlet>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/model",
        element: <Model></Model>,
      },
      {
        path: "/testdrive",
        element: <Testdrive></Testdrive>,
      },
      {
        path: "/contactus",
        element: <Contactus></Contactus>
      },
      {
        path: "/aboutus",
        element: <Aboutus></Aboutus>
      },
      {
        path: "/service",
        element: <Service></Service>
      },

      {
        path: "/bike",
        children: [{
          path: ":bikeid",
          element: <Bike></Bike>
        }
        ]
      }]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <Signup></Signup>
  },
  {
    path: "*",
    element: <div>Error</div>
  }
]);

function App() {

  return (
    <>

      <RouterProvider router={router} />
      {/* <Contact></Contact> */}
    </>
  )
}

export default App
