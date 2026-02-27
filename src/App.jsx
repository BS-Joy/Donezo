import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { AuthContextProvider } from "./contexts/AuthContextProvider";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            // <PrivateRoute>
            <Dashboard />
            // </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        // <PublicRoute>
        <Login />
        // </PublicRoute>
      ),
    },
  ]);
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
