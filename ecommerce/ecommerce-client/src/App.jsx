import Header from "./components/layout/Header";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import RootLayout from "./components/layout/RootLayout";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
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
