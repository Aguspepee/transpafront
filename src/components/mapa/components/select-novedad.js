
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { codigos_lineas } from '../../../utils/codigos-lineas';
import { styled, lighten, darken } from '@mui/system';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

const torresCriticas = [
  {
    "categoria": "Estructura - Base",
    "codigo": "LE01",
    "descripcion": "con perfiles sueltos/flojos"
  },
  {
    "categoria": "Estructura - Base",
    "codigo": "LE04",
    "descripcion": "con ausencia de Perfiles"
  },
  {
    "categoria": "Estructura - Base",
    "codigo": "LE15",
    "descripcion": "con perfiles torcidos y/o deformados"
  },
  {
    "categoria": "Picada",
    "codigo": "LP09",
    "descripcion": "Estructura sin acceso"
  },
]

export default function SelectNovedad({ search, handleSearchChange, ...props }) {
  const [value, setValue] = useState(null)
  //let value = []
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
    handleSearchChange({ ...search, codigos: [newValue?.map((value) => value.codigo)] })
    setValue(newValue)
  };

  const verTorresCriticas = () => {
    handleSearchChange({ ...search, codigos: [torresCriticas?.map((value) => value.codigo)] })
    setValue(torresCriticas)
  }


  return (
    <>
      <Autocomplete
        multiple
        limitTags={1}
        value={value ? value : []}
        isOptionEqualToValue={(option, value)=>{
          return(option.codigo===value.codigo)}}
        disableCloseOnSelect
        id="grouped-demo"
        options={options}
        groupBy={(option) => option.categoria}
        getOptionLabel={(a) => (`${a.codigo} ${a.descripcion}`)}
        sx={{ width: '100%' }}
        size='small'
        onChange={(event, newValue) => handleChange(newValue)}
        renderInput={(params) => <TextField key={params.key}  {...params} label="Selección" />}
        renderGroup={(params) => {
          return (
            <li key={params.key}>
              <GroupHeader>{params.group}</GroupHeader>
              <GroupItems style={{ fontSize: "0.8em" }}>{params.children}</GroupItems>
            </li>
          )
        }}
      />
      <Button variant='outlined' onClick={() => verTorresCriticas()}>Ver torres críticas</Button>
    </>
  );
}