import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import App from "./App";
import GameDetail from "./components/game-detail/GameDetail";

const router = createBrowserRouter([
  {
    path: "/games",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      { path: ":id", element: <GameDetail /> },
    ],
  },
]);

export default router;
