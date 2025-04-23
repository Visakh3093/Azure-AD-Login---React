import React from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";

const loginRequest = {
  scopes: ["User.Read"], // Microsoft Graph API scope
};

const AuthButton = () => {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest)
      .catch(error => console.error("Login error:", error));
  };

  const handleLogout = () => {
    instance.logoutPopup();
  };

  return (
    <div>
      {accounts.length > 0 ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login with Microsoft</button>
      )}
    </div>
  );
};

export default AuthButton;
