import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Header from '../components/Header';

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-full flex-col">
      <Header />
      <hr />
      <div className="flex w-full flex-1 flex-col items-center bg-gray-100 p-8">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </div>
  ),
});
