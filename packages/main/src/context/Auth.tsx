import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  LoginMutationVariables,
  SignUpMutationVariables,
  useLoginMutation,
  User,
  useSignUpMutation,
} from "../utils/__generated__/graphql";

export interface AuthContextType {
  token?: string;
  user?: User;
  initialized?: boolean;
  onSignup: (data: SignUpMutationVariables) => void;
  onLogin: (data: LoginMutationVariables) => void;
  onLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [initialized, setInitialized] = useState(false);
  const [signUpUser] = useSignUpMutation();
  const [loginUser] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      setUser(JSON.parse(localStorage.getItem("user") as string));
    }
    setInitialized(true);
  }, []);

  const handleLogin = async (data: LoginMutationVariables) => {
    try {
      const response = await loginUser({ variables: data });
      const obj = response?.data?.login;
      localStorage.setItem("token", obj?.token as string);
      localStorage.setItem("user", JSON.stringify(obj?.user));
      setToken(obj?.token);
      setUser(obj?.user);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const handleSignup = async (data: SignUpMutationVariables) => {
    try {
      const response = await signUpUser({ variables: data });
      const obj = response?.data?.signup;
      localStorage.setItem("token", obj?.token as string);
      localStorage.setItem("user", JSON.stringify(obj?.user));
      setToken(obj?.token);
      setUser(obj?.user);
      navigate("/");
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
    initialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
