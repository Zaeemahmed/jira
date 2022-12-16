import * as React from "react";
import { styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import {
  Logo,
  Notification,
  Question,
  Settings,
  ProfileIcon,
  Avatars,
} from "ui/components";
import { AuthContext } from "../context/Auth";
import { User } from "../utils/__generated__/graphql";

interface renderDropDownMenuProps {
  user?: User;
}

const StyledDropDownMenu = styled("div")(() => ({
  backgroundColor: "#ffff",
  height: "100px",
  position: "absolute",
  right: "30px",
  top: "55px",
}));

const StyledListMenu = styled("ul")(() => ({
  listStyleType: "none",
  padding: "0",
  "& li": {
    color: "red",
  },
}));

const RenderDropDownMenu = ({ user }: renderDropDownMenuProps) => {
  const auth = React.useContext(AuthContext);
  return (
    <StyledDropDownMenu>
      <div>
        <Avatars src={user?.profileImage} size="normal" />
        <div>
          <h5>{user?.fullName}</h5>
          <p>{user?.email}</p>
        </div>
      </div>
      <StyledListMenu>
        <li>
          <Link to="#">Profile</Link>
        </li>
        <li onClick={() => auth?.onLogout()}>Logout</li>
      </StyledListMenu>
    </StyledDropDownMenu>
  );
};

export const NavBar = ({ user }: renderDropDownMenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <Logo size="small" />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size="large" color="inherit">
              <Notification />
            </IconButton>
            <IconButton size="large" color="inherit">
              <Question />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-haspopup="true"
              color="inherit"
            >
              <Settings />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              color="inherit"
            >
              <ProfileIcon nameFirstLetter="Asif" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {menuOpen && <RenderDropDownMenu user={user} />}
    </Box>
  );
};
