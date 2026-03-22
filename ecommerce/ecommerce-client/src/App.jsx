import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import Signup from "./pages/Signup";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { login } from "./redux/slices/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import ProductCreate from "./pages/ProductCreate";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout user={user} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        // {
        //   path: "/products/:slug",
        //   element: <ProductDetail/>, // TODO:
        // },
        {
          path: "/login",
          element: <Login setUser={setUser} />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "",
          element: <ProtectedRoute />,
          children: [
            {
              path: "/create-product",
              element: <ProductCreate />,
            },
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/order",
              element: <h1>orders page</h1>,
            },
            {
              path: "/checkout",
              element: <h1>checout</h1>,
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      axios
        .get("http://localhost:3000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          dispatch(login(res.data.user));
        })
        .catch((err) => {})
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="">
      {isLoading ? (
        <div>
          <p className="h-screen flex justify-center items-center text-3xl">Loading....</p>
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
