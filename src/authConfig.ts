import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "411f7839-ddfb-4fbf-b0c6-1e005b5121b7", // Replace with your Azure AD App Client ID
    authority: "https://login.microsoftonline.com/34f8f5fc-f1ba-4079-8864-922800ecf088", // Replace with your Tenant ID
    redirectUri: "http://localhost:5173", // Must match in Azure portal
  },
  cache: {
    cacheLocation: "sessionStorage", // or "localStorage"
    storeAuthStateInCookie: true, // Recommended for IE11
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
await msalInstance.initialize();
