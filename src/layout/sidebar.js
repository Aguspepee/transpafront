import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Users as UsersIcon } from '../icons/users';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ViewListIcon from '@mui/icons-material/ViewList';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Logo } from '../components/logo';
import { NavItem } from './nav-item';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';
import UserContext from '../context/userContext';
import { useContext } from 'react';
import styled from "styled-components";
//import { ReactComponent as GieLogo } from "../images/transpa_blanco.svg";
import SettingsIcon from '@mui/icons-material/Settings';

//Icons
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import PublicIcon from '@mui/icons-material/Public';

import { Typography } from '@mui/material';
import { default as LinkMaterial } from '@mui/material/Link';

/* const StyledLogo = styled(GieLogo)`
  width: 8em;
  display: block;
  margin: auto;
`; */


const items = [
  {
    href: '/',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Inicio',
    roles: ["Administrador", "Supervisor", "Inspector", "Asistente"]
  },
  {
    href: '/mapa',
    icon: (<PublicIcon fontSize="small" />),
    title: 'Mapa',
    roles: ["Administrador", "Supervisor"]
  },
  {
    href: '/users-list',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Usuarios',
    roles: ["Administrador", "Supervisor"]
  },
  {
    href: '/settings',
    icon: (<SettingsIcon fontSize="small" />),
    title: 'Configuracion',
    roles: ["Administrador"]
  },
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const [user, setUser] = useContext(UserContext);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });
  //console.log(items[8].roles)
  let items_filtrados = items.filter((items) => {
    return (items.roles?.includes(user.role))
  })
  useEffect(
    () => {
      if (open) {
        onClose?.();
      }
    },
    []
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        {/* <StyledLogo /> */}
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 0
          }}
        />
        <Box sx={{ flexGrow: 1, my: 2 }} >
          {items_filtrados.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}

            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />

        <div style={{ padding: "2em 3em 1em 3em" }} >

          <Typography variant="caption" display="block" gutterBottom style={{textSize:"0.5em"}}>
            Developed by
          </Typography>
          <LinkMaterial target="_blank" href="http://growup-digital.com" rel="noreferrer">
            <Logo
              sx={{
                width: 50
              }}

            />
          </LinkMaterial>
        </div>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: '#19334F',
            color: '#FFFFFF',
            //width: 280
            width: 200
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 200
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
