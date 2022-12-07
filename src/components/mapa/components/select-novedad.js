
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { codigos_lineas } from '../../../utils/codigos-lineas';
import { styled, lighten, darken } from '@mui/system';
import { useState } from 'react';


export default function SelectNovedad({ search, handleSearchChange, ...props }) {
  const [value, setValue] = useState(null)
  const options = codigos_lineas;
  const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === 'light'
        ? lighten(theme.palette.primary.light, 0.85)
        : darken(theme.palette.primary.main, 0.8),
  }));

  const GroupItems = styled('ul')({
    padding: 0,
  });

  const handleChange = (newValue) => {
    handleSearchChange({ ...search, ["codigos"]: [newValue?.map((value)=>value.codigo)] })
    setValue(newValue)
  };


  return (
    <Autocomplete
      multiple
      limitTags={1}
      disableCloseOnSelect
      id="grouped-demo"
      options={options}
      groupBy={(option) => option.categoria}
      getOptionLabel={(a) => (`${a.codigo} ${a.descripcion}`)}
      sx={{ width: '100%' }}
      size='small'
      onChange={(event, newValue)=>handleChange(newValue) }
      renderInput={(params) => <TextField key={params.key}  {...params} label="Novedades" />}
      renderGroup={(params) => {
        return (
          <li key={params.key}>
            <GroupHeader>{params.group}</GroupHeader>
            <GroupItems style={{ fontSize: "0.8em" }}>{params.children}</GroupItems>
          </li>
        )
      }}

    />
  );
}