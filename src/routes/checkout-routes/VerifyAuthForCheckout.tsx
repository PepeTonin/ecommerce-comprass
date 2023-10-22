import React, { useContext } from "react";
import NonAuthCheckoutRoutes from "./NonAuthCheckoutRoutes";
import AuthCheckoutRoutes from "./AuthCheckoutRoutes";
import { AuthContext } from "../../contexts/authContext";

export default function VerifyAuthForCheckout() {
  const authContext = useContext(AuthContext);

  return (
    <>
      {authContext.isAuthenticated && <AuthCheckoutRoutes />}
      {!authContext.isAuthenticated && <NonAuthCheckoutRoutes />}
    </>
  );
}
