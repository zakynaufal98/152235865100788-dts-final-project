import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ProtectedRoute = ({ children }) => {
  const [loggedInUser, isLoading] = useAuthState(auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!loggedInUser) {
      navigate("/login");
      return;
    }
  }, [isLoading, loggedInUser, navigate]);

  return children;
};

export default ProtectedRoute;
