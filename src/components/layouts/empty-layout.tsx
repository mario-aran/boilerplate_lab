import { Outlet } from 'react-router';
import { BaseMain } from './components/base-main';
import { LayoutWrapper } from './components/layout-wrapper';

export const EmptyLayout = () => {
  return (
    <LayoutWrapper>
      <BaseMain>
        <div className="flex-1 p-6">
          {/* "react-router" */}
          <Outlet />
        </div>
      </BaseMain>
    </LayoutWrapper>
  );
};
