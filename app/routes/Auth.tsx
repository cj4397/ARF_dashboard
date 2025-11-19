import React from 'react'
import ForgotPassword from '~/auth/ForgotPassword';
import Login from '~/auth/Login';
import Signup from '~/auth/Signup';
import { ErrorBoundary } from '~/root';


type RouteKey = 'ForgotPassword' | 'Login' | 'Signup' | 'default';
export default function AuthRoutes(route: RouteKey | undefined) {
   const directed: Record<RouteKey, any> = {
      'ForgotPassword': ForgotPassword,
      'Login': Login,
      'Signup':  Signup,
        'default':  ErrorBoundary
    };
    return directed[route ?? 'default'];
}
