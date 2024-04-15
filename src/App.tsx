import { RouterProvider } from 'react-router-dom';
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRouter from './pages/AppRoutes';

const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter} />
    </QueryClientProvider>
  );
}

export default App;
