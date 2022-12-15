import React, { useContext } from "react";
import { NavBar } from "./NavBar";
import { AuthContext } from "../../context/Auth";

export function UserMainPage() {
  const auth = useContext(AuthContext);

  return (
    <div>
      <NavBar user={auth?.user} />
    </div>
  );
}
