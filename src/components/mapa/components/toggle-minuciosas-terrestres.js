import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleMinuciosasTerrestres() {
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
      aria-label="Platform"
      fullWidth={true}
      size="small"
    >
      <ToggleButton value="minuciosa" fullWidth>Minuciosa</ToggleButton>
      <ToggleButton value="terrestre" fullWidth>Terrestre</ToggleButton>
    </ToggleButtonGroup>
  );
}