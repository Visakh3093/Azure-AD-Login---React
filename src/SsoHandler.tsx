import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";

const tokenRequest = {
  scopes: ["User.Read"],
};

const SSOHandler = () => {
  const { instance, inProgress, accounts } = useMsal();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (accounts.length > 0) {
      setIsAuthenticated(true);
      return;
    }

    if (inProgress === InteractionStatus.None) {
      instance
        .ssoSilent(tokenRequest)
        .then(() => {
          setIsAuthenticated(true);
        })
        .catch((error) => {
          console.error("Silent SSO failed:", error);
          instance.loginRedirect(tokenRequest);
        });
    }
  }, [instance, inProgress, accounts]);

  return null;
};

export default SSOHandler;
