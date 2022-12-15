import React, { useContext } from "react";
import { styled } from "@mui/material";
import { Buttons } from "ui/components";
import { NavBar } from "./NavBar";
import { AuthContext } from "../../context/Auth";

export function UserMainPage() {
  const auth = useContext(AuthContext);

  console.log(auth?.user);
  return (
    <div>
      <NavBar user={auth?.user} />
    </div>
  );
}
