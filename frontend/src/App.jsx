import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

const listOfServices = [
  "Quick access to services online",
  "Access to all service features",
  "Expert recommendations",
  "Easy and convenient",
];

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register services={listOfServices} /> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
