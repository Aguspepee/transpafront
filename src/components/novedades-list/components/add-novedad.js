import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Fab from '@mui/material/Fab';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { Paper, Step, StepButton, StepContent, StepLabel, Stepper, Tooltip } from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useEffect, useState } from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { novedadCreate } from '../../../services/novedades-new';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { styled } from '@mui/material/styles';

import UserContext from '../../../context/userContext';
import { useContext } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


import DialogActions from '@mui/material/DialogActions';

//Icons
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

const steps = [
  {
    label: 'Piquete',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Hilo de Guardiia - OPGW',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Aisladores',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Conductor - Morseteria',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Estructura - Base',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Picada',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Seguridad Pública',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
  {
    label: 'Cargar Inspección',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
/*    [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },  */
/*   [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  }, */
/*    [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },  */
/*   [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  }, */
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

export default function NovedadesListAdd({ handleReload, handleNotifyChange, }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  //let { id } = useParams();

  const [user, setUser] = useContext(UserContext);
  const [contract, setContract] = useState([])
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "success" })
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };



  async function addNovedad(novedad) {
    //Si se seleccionó un cliente de "Paga", pone el ID de ese cliente, sino, pone el ID del cliente del contrato.
    let paga = novedad.paga ? novedad.paga : contract[0].cliente[0]._id
    try {
      const res = await novedadCreate({ ...novedad, inspector: `${user.nombre} ${user.apellido}`, paga: paga })
      setConfirmDialog({
        isOpen: true,
        title: "¿Desea crear un novedad nuevo con la misma base?",
        subTitle: "",
        onCancel: () => {
          handleClose()
        },
        cerrar: true,
        confirm: "Si",
        cancel: "No, salir",
        onConfirm: () => { },
        icon: <AddCircleOutlineIcon fontSize='inherit' color="success" />
      })

      handleNotifyChange({
        isOpen: true,
        message: `El novedad ${res.data.Id} se agregó correctamente.`,
        type: 'success'
      })
      //handleClose()
      handleReload()
    } catch (e) {
      handleNotifyChange({
        isOpen: true,
        message: 'Ha habido un error, intente nuevamente',
        type: 'error'
      })
    }
  }

  async function onSubmit(novedad) {
    setConfirmDialog({
      isOpen: true,
      title: "¿Desea agregar el novedad?",
      subTitle: "",
      onConfirm: () => { addNovedad(novedad) },
      icon: <AddCircleOutlineIcon fontSize='inherit' color="success" />
    })
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Tooltip title="Nuevo Novedad">
          <IconButton size="small" color="primary" aria-label="add" onClick={handleClickOpen}>
            <NoteAddIcon fontSize='small' />
          </IconButton>
        </Tooltip>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        fullWidth
        maxWidth="md"
        PaperProps={{
          style: {
            backgroundColor: 'white',
            //boxShadow: 'none',
          },
        }}

      >
        <DialogTitle id="responsive-dialog-title" style={{ backgroundColor: "#F3F4F6" }}>
          <IconButton disabled style={{ padding: "0em 0.2em 0.2em 0em" }}>
            <NoteAddIcon />
          </IconButton>
          {"Cargar Inspección"}

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent style={{ padding: "0em 0.5em 0em 0.5em" }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <form id="myform" onSubmit={() => { }}>
              <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep} orientation="vertical" connector={<ColorlibConnector />}>
                  {steps.map((step, index) => (
                    <Step key={step.label} disabled={false}>
                      <StepButton color="inherit" onClick={handleStep(index)}>
                      <StepLabel
                      StepIconComponent={ColorlibStepIcon}
                        optional={
                          index === 2 ? (
                            <Typography variant="caption">Last step</Typography>
                          ) : null
                        }
                      >
                        {step.label}
                      </StepLabel>
                      </StepButton>
                      <StepContent>
                        <Typography>{step.description}</Typography>
                        <Box sx={{ mb: 2 }}>
                          <div>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              {index === steps.length - 1 ? 'Cargar Novedad' : 'Continue'}
                            </Button>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1 }}
                            >
                              Back
                            </Button>
                          </div>
                        </Box>
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                {activeStep === steps.length && (
                  <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>La inspección se cargó correctamente</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                      Nueva inspección
                    </Button>
                  </Paper>
                )}
              </Box>

            </form>
          </LocalizationProvider>

        </DialogContent>
       {/*  <DialogActions >

          <Button type='submit' form="myform" color="primary" variant="contained" disabled={false} fullWidth onClick={() => { }
          }>
            Añadir Novedad
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}