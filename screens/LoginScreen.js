import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { login } from "../util/auth";
import { useState } from "react";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signInHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      alert("Login failed! Please check your credentials.");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Signing in..." />;
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
