import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material';
import { Users as UsersIcon } from '../icons/users';
import { Logo } from '../components/logo';
import { NavItem } from './nav-item';
import UserContext from '../context/userContext';
import { useContext } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';

//Icons
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventBusyIcon from '@mui/icons-material/EventBusy';

import { Typography } from '@mui/material';
import { default as LinkMaterial } from '@mui/material/Link';

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
    href: '/indisponibilidades',
    icon: (<EventBusyIcon fontSize="small" />),
    title: 'Operaciones',
    roles: ["Administrador", "Supervisor"]
  },
  {
    href: '/RPM',
    icon: (<EventNoteIcon fontSize="small" />),
    title: 'RPM',
    roles: ["Administrador", "Supervisor"]
  },
  {
    href: '/settings',
    icon: (<SettingsIcon fontSize="small" />),
    title: 'Configuracion',
    roles: ["Administrador"]
  },
  {
    href: '/upload',
    icon: (<CloudUploadIcon fontSize="small" />),
    title: 'Upload',
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
