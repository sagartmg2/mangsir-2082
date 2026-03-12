import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import Signup from "./pages/Signup";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

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
          path: "/login",
          element: <Login setUser={setUser} />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/create-product",
          element: <div>create product</div>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router} />,
    </div>
  );
}

export default App;
