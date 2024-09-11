import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: JSX.Element;
  isAuthenticated: boolean;
  role: string;
  requiredRole: string;
}

const ProtectedRoute = ({
  children,
  isAuthenticated,
  role,
  requiredRole,
}: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (role != requiredRole) {
    return <Navigate to="/unauthorized" />;
  }
  return children;
};

export default ProtectedRoute;
