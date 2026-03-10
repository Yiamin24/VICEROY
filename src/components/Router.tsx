import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import LandingPage from '@/components/pages/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <LandingPage />,
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
