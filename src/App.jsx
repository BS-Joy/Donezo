import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "/settings",
          element: <div className="p-4">Settings Page</div>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
