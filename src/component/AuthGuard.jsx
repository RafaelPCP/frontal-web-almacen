// Prptector
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authHeader = localStorage.getItem("authHeader"); // Replace with your actual header storage logic
    if (!authHeader) {
      navigate("/Identificacion"); // Redirect to the login page
    }
  }, [navigate]);

  return <>{children}</>;
};

export default AuthGuard;
