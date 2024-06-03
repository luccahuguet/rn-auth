import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/auth";
import { useState } from "react";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await createUser(email, password);
    } catch (error) {
      alert("Signup failed! Please check your credentials.");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Signing up..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
