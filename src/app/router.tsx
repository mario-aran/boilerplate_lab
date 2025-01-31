import { AuthLayout } from '@/components/layouts/auth-layout';
import { HeadlessLayout } from '@/components/layouts/headless-layout';
import { PublicLayout } from '@/components/layouts/public-layout';
import { ROUTES } from '@/constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomeRoute } from './routes/home.route';
import { LoginRoute } from './routes/login.route';
import { NotFoundRoute } from './routes/not-found.route';
import { ProductsRoute } from './routes/products.route';
import { UsersRoute } from './routes/users.route';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomeRoute />} />
          <Route path={ROUTES.LOGIN} element={<LoginRoute />} />
        </Route>

        {/* Private*/}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.USERS} element={<UsersRoute />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsRoute />} />
        </Route>

        {/* Headless */}
        <Route element={<HeadlessLayout />}>
          {/* No match */}
          <Route path="*" element={<NotFoundRoute />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
