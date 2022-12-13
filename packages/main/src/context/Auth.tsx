import React, { createContext, PropsWithChildren } from "react";
import {
  SignUpMutationVariables,
  User,
  useSignUpMutation,
} from "../utils/__generated__/graphql";

export interface AuthContextType {
  token?: string;
  user?: User;
  onSignup: (data: SignUpMutationVariables) => void;
  onLogin: () => void;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [signUpUser, { loading, error }] = useSignUpMutation();

  const handleLogin = async () => {};

  const handleLogout = () => {
    setToken(null);
    setUser(null);
  };

  const handleSignup = async (data: SignUpMutationVariables) => {
    try {
      const response = await signUpUser({ variables: data });
      const obj = response?.data?.signup;
      localStorage.setItem("token", obj?.token as string);
      setToken(obj?.token);
      setUser(obj?.user);
    } catch (e) {
      console.log(e);
    }
  };

  const value: AuthContextType = {
    token,
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSignup: handleSignup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
