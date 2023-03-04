import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Main from "./pages/Main";
import Create from "./pages/Create";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "create", element: <Create /> },
      { path: "detail", element: <Detail />},
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
