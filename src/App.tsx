
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivitiesDisplay from "./pages/ActivitiesDisplay";
import Layout from "./components/Layout";
import CreateActivityPage from "./pages/CreateActivityPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <ActivitiesDisplay /> }],
  },
  {
    path: "/create-activity",
    element: <CreateActivityPage />,
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
