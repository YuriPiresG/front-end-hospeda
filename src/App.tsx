import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ActivitiesDisplay from "./components/ActivitiesDisplay";
import CreateActivity from "./components/CreateActivity";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ActivitiesDisplay />,
  },
  {
    path: "/activities",
    element: <CreateActivity />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
