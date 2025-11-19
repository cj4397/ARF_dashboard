import Dashboard from "~/Modules/Dashboard";
import Settings from "~/Modules/Settings";
import { ErrorBoundary } from "~/root";




type RouteKey = 'Dashboard' | 'Settings' | 'default';

export default function DashboardRoutes(route: RouteKey | undefined) {
  console.log("DashboardRoutes route:", route);
  const directed: Record<RouteKey, any> = {
    'Dashboard': Dashboard,
    'Settings': Settings,
    'default':  ErrorBoundary
  };
  return directed[route ?? 'default'];
}
