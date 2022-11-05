import { useState } from "react";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function StyledDatepickerFilterbar({ handleFiltersChange, description, id, defaultValue, search, ...props }) {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (newValue) => {
    handleFiltersChange({...search, [id]: newValue })
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        {...props}
        label={description}
        inputFormat="dd/MM/yyyy"
        value={value}
        onChange={(value) => handleChange(value)}
        renderInput={(params) =>
          <TextField
          style={{width:"100%"}}
            size="small" 
            {...params} />}
      />
    </LocalizationProvider>
  )
}

export default StyledDatepickerFilterbar