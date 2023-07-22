import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivitiesDisplay from "./components/ActivitiesDisplay";
import Layout from "./components/Layout";
import CreateActivityPage from "./components/CreateActivityPage";

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
