import * as React from "react";
import {
  styled,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Logo,
  Notification,
  Question,
  Settings,
  ProfileIcon,
  Avatars,
  Buttons,
  SignIn,
} from "ui/components";
import { AuthContext } from "../context/Auth";
import { User } from "../utils/__generated__/graphql";

interface renderDropDownMenuProps {
  user?: User;
}

const StyledDropDownMenu = styled("div")(() => ({
  backgroundColor: "#ffff",
  position: "absolute",
  right: "30px",
  top: "55px",
  zIndex: "10",
  boxShadow:
    "0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)",
  borderRadius: "3px",
  overflow: "hidden",
}));

const StyledListMenu = styled("ul")(() => ({
  listStyleType: "none",
  padding: "0 ",
  margin: "5px",
  "& li": {
    color: "red",
  },
}));

const UserDetailBlock = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  padding: "14px",
  backgroundColor: "#091E42",
  color: "#ffff",
}));

const DropdownItems = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "15px",
  alignItems: "center",
  height: "100%",
}));

const StyledLinks = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  fontSize: "14px",
  "& img": {
    height: "40px",
  },

  "& svg": {
    height: "16px",
  },
  padding: "5px",
  display: "flex",
  position: "relative",
  alignItems: "center",
  height: "100%",
  "&:hover": {
    background: "rgba(222, 235, 255, 0.9)",
    color: "#0052cc !important",
  },
  overflow: "unset",
}));

const StyledProjectDropDown = styled("div")(({ theme }) => ({
  position: "absolute",
  height: "50px",
  width: "200px",
  top: "150%",
  zIndex: 5,
  background: "#fff",
  padding: "15px",
  border: "1px solid #ecedf0",
  borderRadius: "5px 2px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  "& p": {
    fontSize: "14px",
    color: "#172B4D",
    "&:hover": {
      background: "#F4F5F7",
      color: "black",
    },
    "& a": {
      textDecoration: "none",
    },
  },
}));

const RenderDropDownMenu = ({ user }: renderDropDownMenuProps) => {
  const auth = React.useContext(AuthContext);
  return (
    <StyledDropDownMenu>
      <UserDetailBlock>
        <Avatars src={user?.profileImage} size="normal" />
        <Box component="div">
          <Typography variant="subtitle1" lineHeight="normal">
            {user?.fullName}
          </Typography>
          <Typography variant="subtitle2">{user?.email}</Typography>
        </Box>
      </UserDetailBlock>
      <StyledListMenu>
        <Buttons
          appearance="link"
          Icon={<SignIn />}
          onClick={() => auth?.onLogout()}
        >
          Logout
        </Buttons>
      </StyledListMenu>
    </StyledDropDownMenu>
  );
};

const ProjectsDropDown = () => {
  const auth = React.useContext(AuthContext);
  const site = auth?.user?.site;
  return (
    <StyledProjectDropDown>
      <Typography>
        <Link to={`/${site}/atlassion.net/jira/projects`}>
          View all projects
        </Link>
      </Typography>
      <Divider />
      <Typography>
        <Link to="/createProject">Create Project</Link>
      </Typography>
    </StyledProjectDropDown>
  );
};

export const NavBar = ({ user }: renderDropDownMenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [projectMenuOpen, setProjectMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box sx={{ flexGrow: 1, position: "relative" }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <DropdownItems>
            <StyledLinks
              noWrap
              onClick={() => {
                navigate("/");
              }}
            >
              <img src="data:image/png;base64,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" />
            </StyledLinks>

            <StyledLinks noWrap>
              Your work <KeyboardArrowDown />
            </StyledLinks>
            <StyledLinks noWrap>
              <div onClick={() => setProjectMenuOpen(!projectMenuOpen)}>
                Projects <KeyboardArrowDown />
              </div>
              {projectMenuOpen && <ProjectsDropDown />}
            </StyledLinks>
            <StyledLinks noWrap>
              Filters <KeyboardArrowDown />
            </StyledLinks>
            <StyledLinks noWrap>
              Dashboards <KeyboardArrowDown />
            </StyledLinks>
            <StyledLinks noWrap>
              People <KeyboardArrowDown />
            </StyledLinks>
            <StyledLinks noWrap>
              Apps <KeyboardArrowDown />
            </StyledLinks>
          </DropdownItems>
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
              <ProfileIcon nameFirstLetter={user?.fullName} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {menuOpen && <RenderDropDownMenu user={user} />}
    </Box>
  );
};
