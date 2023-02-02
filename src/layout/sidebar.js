import { Fragment, useEffect } from 'react';
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
import AssessmentIcon from '@mui/icons-material/Assessment';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TimelineIcon from '@mui/icons-material/Timeline';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';

import { Typography } from '@mui/material';
import { default as LinkMaterial } from '@mui/material/Link';
import { NavItemGruped } from './nav-item-gruped';
import { Transformer } from '../icons/transformer';
import { Line } from '../icons/line';
import { Tablero } from '../icons/tablero';
import { Descargador } from '../icons/descargador';

const items = [
  {
    href: '/',
    icon: (<HomeIcon fontSize="small" />),
    title: 'Inicio',
    roles: ["Administrador", "Supervisor", "Inspector", "Asistente"]
  },
  {
    //href: '/reportes/DIMA',
    icon: (<AssessmentIcon fontSize="small" />),
    title: 'Reportes',
    roles: ["Administrador"],
     subitems: [
      {
        href: '/reportes/DIMA',
        icon: (<TimelineIcon fontSize="small" />),
        title: 'DIMA',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/mantenimiento',
        icon: (<BarChartIcon fontSize="small" />),
        title: 'Mantenimiento',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-ot',
        icon: (<TableChartIcon fontSize="small" />),
        title: 'Gestión OT',
        roles: ["Administrador"]
      },
    ] 
  },
  {
    //href: '/reportes/DIMA',
    icon: (<AccountTreeIcon fontSize="small" />),
    title: 'Equipos',
    roles: ["Administrador"],
     subitems: [
      {
        href: '/reportes/DIMAsd',
        icon: (<Transformer fontSize="small" />),
        title: 'Transformadores',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/mantenimientosd',
        icon: (<SsidChartIcon fontSize="small" />),
        title: 'Interruptores',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<SsidChartIcon fontSize="small" />),
        title: 'Seccionadores',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<SsidChartIcon fontSize="small" />),
        title: 'Reconectadores',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<Descargador fontSize="small" />),
        title: 'Descargadores',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<SsidChartIcon fontSize="small" />),
        title: 'Celdas',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<SsidChartIcon fontSize="small" />),
        title: 'Barras',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<Tablero fontSize="small" />),
        title: 'Tableros',
        roles: ["Administrador"]
      },
      {
        href: '/reportes/gestion-otsd',
        icon: (<Line fontSize="small" />),
        title: 'Lineas',
        roles: ["Administrador"]
      },
    ] 
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
            <Fragment key={item.title}>
              {item.subitems ?
                <NavItemGruped
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                  subitems={item.subitems}
                /> :
                <NavItem
                  key={item.title}
                  icon={item.icon}
                  href={item.href}
                  title={item.title}
                />
              }
            </Fragment>

          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <div style={{ padding: "2em 3em 1em 3em" }} >
          <Typography variant="caption" display="block" gutterBottom style={{ textSize: "0.5em" }}>
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
