import React, { useState, useEffect } from "react";
import { useMsal, useAccount } from "@azure/msal-react";



const Profile = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (account) {
      const tokenRequest = {
        scopes: ["User.Read"], 
        account: account// Permission to read user profile
      };
      instance.acquireTokenSilent(tokenRequest)
        .then(response => {
          console.log('response: ', response);
          fetch("https://graph.microsoft.com/v1.0/me", {
            headers: { Authorization: `Bearer ${response.accessToken}` },
          })
          .then(res => res.json())
          .then(data => setProfile(data))
          .catch(error => console.error("Graph API error:", error));
        })
        .catch(error => console.error("Token acquisition error:", error));
    }
  }, [account, instance]);

  return profile ? (
    <div>
      <h2>Welcome, {profile.displayName}</h2>
      <p>Email: {profile.mail || profile.userPrincipalName}</p>
    </div>
  ) : (
    <p>Please log in to see profile details.</p>
  );
};

export default Profile;
