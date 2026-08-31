import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductList from "./pages/ProductList"
import Footer from './components/Footer'
import Error from "./pages/Error"
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import { ToastContainer, Flip } from 'react-toastify';


const DeliveryAppLayout = () => {
  return <div className="min-h-screen bg-gray-950 font-sans text-white">
    <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition={Flip}
    />
    <Navbar />
    <Outlet />
    <Footer />
  </div>
}

const application = createBrowserRouter([
  {
    path: '/',
    element: <DeliveryAppLayout />,
    children: [
      {
        path: '/',
        element: <ProductList />
      },
      {
        path: '/product/:id',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
    ],
    errorElement: <Error />
  }
])

export default function App() {
  return <RouterProvider router={application} />
}
