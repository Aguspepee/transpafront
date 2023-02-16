import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material"; 
import Delete from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Tooltip } from "@mui/material";
import ColumnsEdit from './columns-edit'
//import { remitoDelete, remitoEstado } from "../../../services/indisponibilidades";
//import CertificadoCreate from "../indisponibilidades-list-certificado";
//import ExportTable from "./components/export-table";
 
//Icons
import HighlightOff from "@mui/icons-material/HighlightOff";

export default function EnhancedTableToolbar({ handleConfirmDialogChange, handleNotifyChange, numSelected, selected, certificado, handleReload, selectedToEmpty, order, orderBy, search, columns, user, ...props }) {
  const handleDelete = () => {
    //remitoDelete(selected)
    handleConfirmDialogChange({
      isOpen: false,
      title: "",
      subTitle: ""
    })
    handleNotifyChange({
      isOpen: true,
      message: 'Los indisponibilidades se eliminaron correctamente correctamente',
      type: 'error'
    })
    handleReload()
  }
  
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        pt: { xs: 0, sm: 0 },
        pb: { xs: 0, sm: 0 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
          style={{ fontSize: "10pt" }}
        >
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
          style={{ fontSize: "13pt" }}
        >
          Indisponibilidades
        </Typography>
      )}

      {numSelected > 0 ? (
        <>

          

          <Tooltip title="Borrar ítems">
            <IconButton onClick={() => {
              handleConfirmDialogChange({
                isOpen: true,
                title: "¿Deseas eliminar el remito seleccionado?",
                subTitle: "Luego de eliminarlo, no podrás recuperar la información.",
                onConfirm: () => { handleDelete() },
                icon: <HighlightOff fontSize='inherit' color="error" />
              })
            }} >
              <Delete fontSize='small' />
            </IconButton>
          </Tooltip>
        </>
      ) : (
        <>
          {/* <ExportTable
            handleConfirmDialogChange={handleConfirmDialogChange}
            handleNotifyChange={handleNotifyChange}
            handleReload={handleReload}
            order={order}
            orderBy={orderBy}
            search={search}
            columns={columns}
          /> */}
          <ColumnsEdit handleReload={handleReload} />
        </>
      )
      }
    </Toolbar >
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};