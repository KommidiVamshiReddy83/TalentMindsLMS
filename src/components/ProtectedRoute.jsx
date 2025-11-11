import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const learner = localStorage.getItem("learner");
  const location = useLocation();
  if (!learner) return <Navigate to="/login" state={{ from: location }} replace />;
  return children;
}