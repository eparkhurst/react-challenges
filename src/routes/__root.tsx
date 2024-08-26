import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="flex flex-row items-center justify-between gap-2 px-4 py-2">
        <Link to="/" className="">
          Logo
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="p2 [&.active]:font-bold">
            Home
          </Link>{' '}
          <Link to="/about" className="p2 [&.active]:font-bold">
            About
          </Link>
        </div>
      </header>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
