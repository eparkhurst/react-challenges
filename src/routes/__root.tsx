import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-full flex-col">
      <Header />
      <hr />
      <div className="flex flex-1 bg-gray-100">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
