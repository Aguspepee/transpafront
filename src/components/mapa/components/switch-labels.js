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
    <FormGroup>
      <FormControlLabel control={
        <Switch
          checked={reparadas}
          color="secondary"
          onChange={handleChangeReparadas}
        />} label="Reparadas" />
      <FormControlLabel control={
        <Switch
          checked={historico}
          onChange={handleChangeHistorico}
        />} label="Historico" />
    </FormGroup>
  );
}