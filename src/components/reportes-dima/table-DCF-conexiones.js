import { Line, getElementAtEvent } from 'react-chartjs-2';
import { useRef } from 'react';
import { Box, Grid, Card, IconButton, Divider, Typography } from '@mui/material';
import 'chartjs-adapter-moment';
import { Chart, registerables } from 'chart.js';
import { useState, useEffect } from 'react';
import { colors_palette } from "../../utils/colors-palette";
import { segmentacionSettings } from "../../utils/segmentacion-settings";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { genericoXLS } from '../../utils/exports/generico-xls'

Chart.register(...registerables);

export const TableDCFConexiones = ({ results, ...props }) => {

 

  return (
    <Card {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          //justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
        style={{ padding: "1em 1em 0.3em 1.4em" }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item style={{ width: '70%' }}>
            <Typography
              sx={{ m: 1 }}
              variant="h6"
              style={{ fontSize: "1em" }}
            >
              {`Puntos de Conexión`}
            </Typography>
          </Grid>
          <Grid item>
          <Box sx={{ m: 1 }}>
              <IconButton
                //color=""
                variant="contained"
                size='small'
                onClick={() => {  }}
              >
                <FileDownloadIcon fontSize='inerhit' />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Divider />
      <Box
        sx={{
          height: 450,
          position: 'relative',
          padding: '0.5em 1em 1em 1em'
        }}
      >
       
      </Box>
    </Card>
  );
};
