import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar"
import ProductList from "./pages/ProductList"
import Footer from './components/Footer'
import Error from "./pages/Error"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetails from './pages/ProductDetails'


const DeliveryAppLayout = () => {
  return <div className="min-h-screen bg-gray-950 font-sans text-white">
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
      {
        path: '/checkout',
        element: <Checkout />
      }
    ],
    errorElement: <Error />
  }
])

export default function App() {
  return <RouterProvider router={application} />
}
