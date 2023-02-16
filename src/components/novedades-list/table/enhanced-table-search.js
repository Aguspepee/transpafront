import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TextField } from '@mui/material';
import StyledChipFilter from '../../../styled-components/styled-chip-filter'
import StyledDatepickerFilter from '../../../styled-components/styled-datepicker-filter';
import { Fragment } from 'react';

function EnhancedTableSearch({handleStartLoading,  search, columns, ...props }) {
    return (
        <TableRow style={{ height: "40px", backgroundColor: "#F3F4F6" }}>
            <TableCell padding="checkbox">
            </TableCell>
            <TableCell style={{ backgroundColor: "#F3F4F6" }}>
            </TableCell>
            {columns.map((column) => {
                function handleChange(value) {
                    handleStartLoading()
                    props.onChange({ ...search, [column.id.replace("[", ".").replace("]", "")]: value })
                }
                return (
                    <Fragment key={column.id}>
                        {column.show &&
                            <TableCell
                                padding={column.disablePadding ? 'none' : 'normal'}
                                style={{ backgroundColor: "#F3F4F6", minWidth: column.width }}>
                                {column.type === "text" &&
                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        onChange={(e)=>handleChange(e.target.value)}
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                height: 30,
                                                fontSize: 12,
                                            }
                                        }}
                                        placeholder='-'
                                    />
                                }
                                {column.type === "number" &&
                                    <TextField
                                        size="small"
                                        fullWidth
                                        variant="outlined"
                                        type="number"
                                        onChange={(e)=>handleChange(e.target.value)}
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                height: 30,
                                                fontSize: 12,
                                            }
                                        }}
                                        placeholder='-'
                                    />
                                }
                                {column.type === "date" &&
                                    <StyledDatepickerFilter onChange={handleChange} />
                                }
                                {column.type === "select" &&
                                    <StyledChipFilter default_value={column.search} onChange={handleChange} />
                                }
                                {column.type === "none" &&
                                    <>
                                    </>
                                }
                            </TableCell>
                        }
                    </Fragment>
                )
            })}
            <TableCell style={{ backgroundColor: "#F3F4F6" }}>
            </TableCell>
        </TableRow>
    );
}


export default EnhancedTableSearch