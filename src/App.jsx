import { RouterProvider, createBrowserRouter } from "react-router-dom";

//routes
import AppLayout from "./ui/AppLayout";
import Home from "./ui/Home";
import Cart from "./features/Cart/Cart";
import ProductDetail from "./features/Product/ProductDetail";
import NotFound from "./ui/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
