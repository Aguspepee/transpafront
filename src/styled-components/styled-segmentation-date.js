import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function StyledSegmentationDate({handleFiltersChange, filters,...props}) {
  const [alignment, setAlignment] = useState(filters.segmentacion);

  const handleChange = (event, newAlignment) => {
    handleFiltersChange({ ["segmentacion"]: newAlignment })
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Segmentacion"
      size='small'
    >
      <ToggleButton value="anual">Anual</ToggleButton>
      <ToggleButton value="mensual">Mensual</ToggleButton>
      <ToggleButton value="semanal">Semanal</ToggleButton>
      <ToggleButton value="diario">Diario</ToggleButton>
    </ToggleButtonGroup>
  );
}