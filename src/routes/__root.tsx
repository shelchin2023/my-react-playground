import React from "react";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { SnackbarProvider } from "notistack";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null
    : React.lazy(() =>
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      );

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2 bg-red-200">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </div>
      <hr />
      <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Outlet />
      </SnackbarProvider>

      <React.Suspense>
        <TanStackRouterDevtools />
      </React.Suspense>
    </>
  ),
});
