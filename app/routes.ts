import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
 layout("./auth/layout.tsx", [
    route("login", "./auth/Login/index.tsx"),
    route("signup", "./auth/Signup/index.tsx"),
    route("forgot_password", "./auth/ForgotPassword/index.tsx")
  ]),

 layout("./Modules/layout.tsx", [
    route("dashboard", "./Modules/Dashboard/index.tsx"),
    route("settings", "./Modules/Settings/index.tsx"),
  ]),

] satisfies RouteConfig;
