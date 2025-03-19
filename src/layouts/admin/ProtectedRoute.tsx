import { JSX } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("tokenpkdkdh");

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
