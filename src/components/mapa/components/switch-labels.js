import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function SwitchLabels({ search, handleSearchChange, ...props }) {
  const [reparadas, setReparadas] = React.useState(search.reparadas);
  const [historico, setHistorico] = React.useState(search.historico)

  const handleChangeReparadas = (event) => {
    handleSearchChange({ ...search, ["reparadas"]: event.target.checked })
    setReparadas(event.target.checked);
  };

  const handleChangeHistorico = (event) => {
    handleSearchChange({ ...search, ["historico"]: event.target.checked })
    setHistorico(event.target.checked);
  };

  return (
    <FormGroup style={{paddingLeft:"1em"}}>
      <FormControlLabel control={
        <Switch
          checked={reparadas}
          //size="small"
          color="secondary"
          onChange={handleChangeReparadas}
        />} label="Reparadas" />
      <FormControlLabel control={
        <Switch
          checked={historico}
          //size="small"
          onChange={handleChangeHistorico}
        />} label="Duplicadas" />
{/*         <FormControlLabel control={
        <Switch
          checked={historico}
          //size="small"
          onChange={handleChangeHistorico}
        />} label="Torres críticas" /> */}
    </FormGroup>
  );
}