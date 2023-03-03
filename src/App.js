import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/Main";
import Create from "./pages/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "create", element: <Create /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
