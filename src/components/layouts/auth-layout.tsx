import { Navigate, Outlet } from 'react-router';
import { AppBar } from './app-bar';

const user = true;

export const AuthLayout = () => {
  if (!user) return <Navigate to="/" replace />;

  return (
    <>
      <AppBar />

      <main className="container mx-auto p-6">
        {/* Nested route */}
        <Outlet />
      </main>
    </>
  );
};
