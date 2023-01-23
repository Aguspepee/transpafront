import { useState } from 'react';
import { IconButton } from '@mui/material';
import { resolvePath } from '../../../utils/path-resolvers';
import { format } from 'date-fns';
import { Tooltip } from '@mui/material';
import { Stack } from '@mui/material';
//import { indisponibilidadDelete, indisponibilidadEstado } from '../../../services/indisponibilidades';
import { Checkbox } from '@mui/material';
import StyledChipUpdate from '../../../styled-components/styled-chip-update'
//import { indisponibilidadEdit } from '../../../services/indisponibilidads';
import { Fragment } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { styled } from '@mui/material/styles';

//icons
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOff from "@mui/icons-material/HighlightOff";
import DownloadIcon from '@mui/icons-material/Download';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        fontSize: 11,
        padding: "0px 6px 0px 6px",
        borderBottom: "0.1px solid #F5F5F5",
        //bordetTop:4
    }
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    /*  [`&.${tableRowClasses.root}`]: {
        // height: "10px",
         padding:0,
         borderBottom: "none",
         //border:1
     }, 
      // hide last border
      "&:last-child td, &:last-child th": {
         border: "none",
         borderBottom: "none",
         height: 1
     }   */
}));

function EnhancedTableRow({ handleConfirmDialogChange, handleNotifyChange, columns, indisponibilidad, selected, handleClick, index, handleReload, handleEdit, rol, selectedToEmpty, ...props }) {
    const [open, setOpen] = useState(false);
    const isSelected = (name) => selected.indexOf(name) !== -1;
    const isItemSelected = isSelected(indisponibilidad._id);
    const labelId = `enhanced-table-checkbox-${index}`;

    //Cantidad de columnas mostradas
    const colums_quantity = columns.filter((column) => column.show === true).length + 3

    const handleDelete = (id) => {
        //indisponibilidadDelete(id)
        handleConfirmDialogChange({
            isOpen: false,
            title: "",
            subTitle: ""
        })
        handleNotifyChange({
            isOpen: true,
            message: 'El indisponibilidad se eliminó correctamente',
            type: 'error'
        })
        handleReload()
    }
    return (
        <>
            <StyledTableRow
                hover
                role="checkbox"
                aria-checked={isItemSelected}
                tabIndex={-1}
                key={indisponibilidad._id}
                selected={isItemSelected}
                style={{ paddingTop: "0px" }}
            >
                <StyledTableCell padding='none' style={{ backgroundColor: open ? "rgba(80, 72, 229, 0.12)" : "" }}>
                      <Checkbox
                        onClick={(event) => handleClick(event, indisponibilidad._id, indisponibilidad)}
                        color="primary"
                        checked={isItemSelected}
                        size="small"
                        inputProps={{
                            'aria-labelledby': labelId,
                        }}
                        style={{
                            transform: "scale(0.8)",
                            margin: 0,
                            padding: "0px 0px 0px 2px"
                        }}
                    /> 
                </StyledTableCell>
                <StyledTableCell padding='none' style={{ backgroundColor: open ? "rgba(80, 72, 229, 0.12)" : "", fontSize: '7pt', }}>
                </StyledTableCell>
                {columns.map((column) => {
                    return (
                        <Fragment key={column.id}>
                            {column.show &&
                                <TableCell
                                    key={column.id}
                                    align={column.numeric ? 'right' : 'left'}
                                    padding={column.disablePadding ? 'none' : 'normal'}
                                    style={{ backgroundColor: open ? "rgba(80, 72, 229, 0.12)" : "", fontSize: '8pt' }}
                                >
                                    <>
                                        {column.type === "text" &&
                                            resolvePath(indisponibilidad, column.id)
                                        }
                                        {column.type === "number" &&
                                            resolvePath(indisponibilidad, column.id)
                                        }
                                        {column.type === "select" &&
                                            <StyledChipUpdate
                                                data={indisponibilidad}
                                                value={resolvePath(indisponibilidad, column.id)}
                                                //edit={indisponibilidadEstado}
                                                field={column.id}
                                                label={column.label}
                                                id={indisponibilidad._id}
                                                handleReload={handleReload}
                                                rol={rol}
                                                selectedToEmpty={selectedToEmpty}
                                            />
                                        }
                                        {column.type === "date" &&
                                            (resolvePath(indisponibilidad, column.id) ? format(new Date(resolvePath(indisponibilidad, column.id)), 'dd/MM/yyyy') : "-")
                                        }
                                    </>

                                </TableCell>
                            }
                        </Fragment>
                    )
                })}
                <StyledTableCell align={'right'} style={{ backgroundColor: open ? "rgba(80, 72, 229, 0.12)" : "", fontSize: '8pt' }}>
                    <Stack direction="row" spacing={0}>
                        <IconButton 
                        sx={{ width: "25px", height: "25px", fontSize: '12pt' }} 
                        onClick={() => {
                            handleConfirmDialogChange({
                                isOpen: true,
                                title: "¿Deseas eliminar este indisponibilidad?",
                                subTitle: "Luego de eliminarlo, no podrás recuperar la información.",
                                onConfirm: () => { handleDelete(indisponibilidad.indisponibilidad_numero) },
                                icon: <HighlightOff fontSize='inherit' color="error" />
                            })
                        }}>
                            <Tooltip title="Eliminar indisponibilidad">
                                <DeleteIcon fontSize="inherit" />
                            </Tooltip>
                        </IconButton>
                    </Stack>
                </StyledTableCell>
            </StyledTableRow >
            {/* <RowDetails
                open={open}
                indisponibilidad={indisponibilidad}
                colums_quantity={colums_quantity}
                handleReload={handleReload}
                handleConfirmDialogChange={handleConfirmDialogChange}
                handleNotifyChange={handleNotifyChange}
                rol={rol} /> */}

        </>
    );
}


export default EnhancedTableRow