
import AuthButton from "./LoginButton"
import Profile from "./Profile"
import SSOHandler from "./SsoHandler";

const App = () => {
  return (
    <div>
      <SSOHandler />
      <AuthButton />
      <Profile />
    </div>
  )
}

export default App