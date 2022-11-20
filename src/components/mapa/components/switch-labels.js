import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels() {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch />} label="Mostrar histórico" />
      <FormControlLabel control={<Switch />} label="Mostrar reparadas" />
    </FormGroup>
  );
}