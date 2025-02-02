import { AuthLayout } from '@/components/layouts/auth-layout';
import { MainLayout } from '@/components/layouts/main-layout';
import { ROUTES } from '@/constants/routes';
import { BrowserRouter, Route, Routes } from 'react-router';
import { HomeRoute } from './routes/home.route';
import { NotFoundRoute } from './routes/not-found.route';
import { RecipesRoute } from './routes/recipes.route';
import { UsersRoute } from './routes/users.route';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<MainLayout />}>
          <Route index element={<HomeRoute />} />
        </Route>

        {/* Private*/}
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.USERS} element={<UsersRoute />} />
          <Route path={ROUTES.RECIPES} element={<RecipesRoute />} />
        </Route>

        {/* No match */}
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </BrowserRouter>
  );
};
