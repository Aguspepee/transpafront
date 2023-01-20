import { Slider, Box, Typography } from '@mui/material';
import React, { useState } from 'react';




const DateRangeSlider = () => {
  const [value, setValue] = useState([new Date('01/01/2020').getTime(), new Date().getTime()]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box style={{padding:'0em 2em 0em 2em'}}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={new Date('01/01/2020').getTime()}
        max={new Date().getTime()}
        step={24 * 60 * 60 * 1000} // one day
        valueLabelFormat={(val) => {
          return (new Date(val).toLocaleDateString('en-GB'))
        }}
      />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>{new Date(value[0]).toLocaleDateString()}</Typography>
        <Typography>{new Date(value[1]).toLocaleDateString()}</Typography>
      </div>
    </Box>
  );
}

export default DateRangeSlider;