import { Outlet } from 'react-router';
import { MainNavbar } from './main-navbar';

export const AuthLayout = () => {
  return (
    <>
      <header>
        <MainNavbar />
      </header>

      <main className="container mx-auto px-4">
        {/* Nested route */}
        <Outlet />
      </main>
    </>
  );
};
