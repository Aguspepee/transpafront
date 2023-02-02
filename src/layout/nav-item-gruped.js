import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Button, Divider, ListItem } from '@mui/material';
import { useState } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

export const NavItemGruped = (props) => {
  const { href, icon, title, subitems, ...others } = props;
  let location = useLocation();
  const active = location.pathname === href ? true : false
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          mb: 0.5,
          py: 0,
          px: 2
        }}
        {...others}
      >
        <Button
          component={Link}
          startIcon={icon}
          disableRipple
          onClick={handleClick}
          sx={{
            backgroundColor: active && 'rgba(255,255,255, 0.08)',
            borderRadius: 1,
            color: active ? 'secondary.main' : 'neutral.300',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'flex-start',
            px: 3,
            textAlign: 'left',
            textTransform: 'none',
            width: '100%',
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.300'
            },
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
          {open ? <ExpandLess /> : <ExpandMore />}
        </Button>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
       
        {subitems.map((subitem, index) => {
          const active = location.pathname === subitem.href ? true : false
          return (
            <List
              key={index}
              component="div"
              sx={{
                display: 'flex',
                mb: 0.5,
                py: 0,
                px: 1
              }}
              {...others}>

              <Button
                component={Link}
                startIcon={subitem.icon}
                disableRipple
                sx={{
                  backgroundColor: active && 'rgba(255,255,255, 0.08)',
                  borderRadius: 1,
                  color: active ? 'secondary.main' : 'neutral.300',
                  fontWeight: active && 'fontWeightBold',
                  justifyContent: 'flex-start',
                  px: 6,
                  py:0.3,
                  textAlign: 'left',
                  fontSize:'0.7em',
                  textTransform: 'none',
                  width: '100%',
                  '& .MuiButton-startIcon': {
                    color: active ? 'secondary.main' : 'neutral.300'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255, 0.08)'
                  }
                }}
                to={subitem.href}
              >
                <Box sx={{ flexGrow: 1 }}>
                  {subitem.title}
                </Box>
              </Button>
            </List>
          )
        })
        }
      </Collapse>
    </>
  );
};

NavItemGruped.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.node,
  title: PropTypes.string
};
