import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleMinuciosasTerrestres({ search, handleSearchChange, ...props }) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newValue) => {
    handleSearchChange({ ...search, inspecciones: newValue  })

    setAlignment(newValue);
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
      <ToggleButton value="PINM" fullWidth>Minuciosas</ToggleButton>
      <ToggleButton value="PINT" fullWidth>Terrestres</ToggleButton>
    </ToggleButtonGroup>
  );
}