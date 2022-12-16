import React, { useContext, PropsWithChildren } from "react";
import { NavBar } from "./NavBar";
import { AuthContext } from "../context/Auth";

export const Layout = ({ children }: PropsWithChildren) => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <NavBar user={auth?.user} />
      {children}
    </div>
  );
};
