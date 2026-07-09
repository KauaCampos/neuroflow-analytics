import { createBrowserRouter } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell';
import { MarketingLayout } from '@/layouts/MarketingLayout';
import { DashboardPage } from '@/pages/DashboardPage';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        element: <MarketingLayout />,
        children: [
          { path: '/', element: <LandingPage /> },
          { path: '/login', element: <LoginPage /> },
          { path: '/cadastro', element: <RegisterPage /> },
        ],
      },
      { path: '/dashboard', element: <DashboardPage /> },
    ],
  },
]);
