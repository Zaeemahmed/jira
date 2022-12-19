import * as React from 'react';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography } from '@mui/material';
import {
  Logo,
  Notification,
  Question,
  Settings,
  ProfileIcon,
  Avatars,
  Buttons,
  SignIn,
} from 'ui/components';
import { AuthContext } from '../context/Auth';
import { User } from '../utils/__generated__/graphql';

interface renderDropDownMenuProps {
  user?: User;
}

const StyledDropDownMenu = styled('div')(() => ({
  backgroundColor: '#ffff',
  position: 'absolute',
  right: '30px',
  top: '55px',
  zIndex: '10',
  boxShadow:
    '0px 3px 5px rgba(9, 30, 66, 0.2), 0px 0px 1px rgba(9, 30, 66, 0.31)',
  borderRadius: '3px',
  overflow: 'hidden',
}));

const StyledListMenu = styled('ul')(() => ({
  listStyleType: 'none',
  padding: '0 ',
  margin: '5px',
  '& li': {
    color: 'red',
  },
}));

const UserDetailBlock = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '10px',
  padding: '14px',
  backgroundColor: '#091E42',
  color: '#ffff',
}));

const RenderDropDownMenu = ({ user }: renderDropDownMenuProps) => {
  const auth = React.useContext(AuthContext);
  return (
    <StyledDropDownMenu>
      <UserDetailBlock>
        <Avatars src={user?.profileImage} size='normal' />
        <Box component='div'>
          <Typography variant='subtitle1' lineHeight='normal'>
            {user?.fullName}
          </Typography>
          <Typography variant='subtitle2'>{user?.email}</Typography>
        </Box>
      </UserDetailBlock>
      <StyledListMenu>
        <Buttons
          appearance='link'
          Icon={<SignIn />}
          onClick={() => auth?.onLogout()}
        >
          Logout
        </Buttons>
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
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <AppBar position='static' color='transparent'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component='div'
            onClick={() => {
              navigate('/');
            }}
            style={{ cursor: 'pointer' }}
          >
            <Logo size='small' />
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton size='large' color='inherit'>
              <Notification />
            </IconButton>
            <IconButton size='large' color='inherit'>
              <Question />
            </IconButton>
            <IconButton
              size='large'
              edge='end'
              aria-haspopup='true'
              color='inherit'
            >
              <Settings />
            </IconButton>
          </Box>
          <Box >
            <IconButton
              size='large'
              aria-label='show more'
              aria-haspopup='true'
              onClick={handleMenuOpen}
              color='inherit'
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
