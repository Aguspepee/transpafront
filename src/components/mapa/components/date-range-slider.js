import { Slider, Box } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-valueLabel': {
    fontSize: 10,
    fontWeight: 'normal',
    top: 0,
    backgroundColor: 'unset',
    color: theme.palette.text.primary,
    '&:before': {
      display: 'none',
    },
    '& *': {
      background: 'transparent',
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
}));

const DateRangeSlider = ({ search, handleSearchChange, ...props }) => {
  const [value, setValue] = useState([new Date('01/01/2020').getTime(), new Date().getTime()]);

  const handleChange = (event, newValue) => {
    handleSearchChange({ ...search, fecha_inicio: newValue[0], fecha_fin: newValue[1]  })
    setValue(newValue);
  };

  return (
    <Box style={{ padding: '1em 2em 0em 2em' }}>
      <StyledSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        min={new Date('01/01/2020').getTime()}
        max={new Date().getTime()}
        step={24 * 60 * 60 * 1000} // one day
        valueLabelFormat={(val) => {
          return (new Date(val).toLocaleDateString('en-GB'))
        }}
      />
    </Box>
  );
}

export default DateRangeSlider;