import * as React from "react";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import {
  Logo,
  Notification,
  Question,
  Settings,
  ProfileIcon,
  Avatars,
} from "ui/components";
import { AuthContext } from "../../context/Auth";

interface renderDropDownMenuProps {
  userAvatarImage: string;
  userEmail: string;
  userName: string;
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

const RenderDropDownMenu = ({
  userAvatarImage,
  userEmail,
  userName,
}: renderDropDownMenuProps) => {
  const auth = React.useContext(AuthContext);
  return (
    <StyledDropDownMenu>
      <div>
        <Avatars src={userAvatarImage} size="normal" />
        <div>
          <h5>{userName}</h5>
          <p>{userEmail}</p>
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

interface NavBarProps {
  imageUrl: string;
  name: string;
  email: string;
}

export const NavBar = ({ imageUrl, name, email }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
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
      {menuOpen && (
        <RenderDropDownMenu
          userAvatarImage={imageUrl}
          userEmail={email}
          userName={name}
        />
      )}
    </Box>
  );
};
