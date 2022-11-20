import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Inspeccion"
      size="small" 
    >
      <ToggleButton value="android">Minuciosa</ToggleButton>
      <ToggleButton value="ios">Terrestre</ToggleButton>
    </ToggleButtonGroup>
  );
}