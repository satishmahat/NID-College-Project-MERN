import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateAdminRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const authExpiration = localStorage.getItem("authExpiration");
  const adminUsername = localStorage.getItem("adminUsername");

  // List of allowed admin usernames
  const allowedAdmins = ["akriti28549", "ajit28548", "satish28584"];

  // Check if the session has expired
  const isExpired = authExpiration && new Date().getTime() > parseInt(authExpiration, 10);

  // If not authenticated, expired, or not in allowed list, redirect to admin login
  if (!isAuthenticated || isExpired || !allowedAdmins.includes(adminUsername)) {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authExpiration");
    localStorage.removeItem("adminUsername");
    return <Navigate to="/enroll/admin" replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateAdminRoute;
