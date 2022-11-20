import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function EstadoChip({estado,...props}) {
  return (
      <Chip sx={{ fontSize: "8px", padding: '0px 0px 0px 0px' }} label={estado === 0 ?"ABIERTO" :"REPARADO"} color={estado === 0 ?"error" :"success"} size="small" />
  );
}