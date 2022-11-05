import UserContext from '../context/userContext';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountMenu from './account-menu';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const [user, setUser] = useContext(UserContext); 
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 200
          },
          width: {
            lg: 'calc(100% - 200px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Stack spacing={0}>
            <Typography variant="subtitle1" gutterBottom component="div" display="block" color="gray" style={{ padding: "0em 0em 0em 0em", margin:"0em 0em 0em 0em" }}>
              {user?.nombre.toUpperCase()}
            </Typography>
            <Typography variant="caption" gutterBottom component="div" display="block" color="gray" style={{ padding: "0em 0em 0em 0em", margin:"0em 0em 0em 0em" }}>
            {user?.role}
            </Typography>
          </Stack>
          <Box sx={{ flexGrow: 1 }} />
          <AccountMenu />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
