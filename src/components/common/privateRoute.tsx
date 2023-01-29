import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteType {
  isLogin: boolean;
}

export default function PrivateRoute({ isLogin }: PrivateRouteType) {
  return isLogin ? <Outlet /> : <Navigate to="/login" replace />;
}
