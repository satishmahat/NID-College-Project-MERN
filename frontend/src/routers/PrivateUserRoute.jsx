import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateUserRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const authExpiration = localStorage.getItem("authExpiration");

  // Check if the authentication has expired
  if (!isAuthenticated || new Date().getTime() > parseInt(authExpiration)) {
    
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("authExpiration");
    return <Navigate to="/enroll/login" />;
  }

  return <>{children}</>; // User is authenticated and token is valid, render child routes
};

export default PrivateUserRoute;
