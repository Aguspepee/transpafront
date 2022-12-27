import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';
import UserContext from '../../../context/userContext';
import { useContext } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { userEdit } from '../../../services/users';

const ITEM_HEIGHT = 48;

export default function ColumnsEdit() {
    const [user, setUser] = useContext(UserContext);
    const [anchorEl, setAnchorEl] = useState(null);
    let columns = user.indisponibilidadesColumns;
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const onChangeShow = async (id) => {
        columns = columns.map((column) => {
            column._id === id ? (column.show = !column.show) : (column.show = column.show)
            return ({ ...column })
        })
        let document = await userEdit({ indisponibilidadesColumns: columns }, user._id)
        setUser(document.data)
    };

    const onChangeWidth = async (id, event) => {
        console.log(event.target.value)
        columns = columns.map((column) => {
            column._id === id ? column.width = Number(event.target.value) : (column.width = column.width)
            return ({ ...column })
        })
        let document = await userEdit({ indisponibilidadesColumns: columns }, user._id)
        setUser(document.data)
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ViewColumnIcon fontSize='small'/>
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 7,
                    },
                }}
            >
                <Box sx={{ width: '100%', backgroundColor: "#F3F4F6", padding: "1em 1em 1em 1em" }}>
                    <Typography variant="body2" gutterBottom>
                        Seleccione las columnas que desea ver en la tabla.
                    </Typography>
                </Box>
                {columns.map((option) => (
                    <MenuItem key={option._id}>
                        <Checkbox
                            checked={option.show}
                            inputProps={{ 'aria-label': 'controlled' }}
                            onChange={() => onChangeShow(option._id)}
                        />
                        <Input
                            value={Number(option.width) || 0}
                            style={{ width: "80px", paddingRight: "5px" }}
                            endAdornment={<InputAdornment position="end">px</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            type="number"
                            onChange={(event) => onChangeWidth(option._id, event)}
                        />
                        <Typography
                            style={{ paddingLeft: "15px" }}
                            variant="body1"
                        >
                            {option.label}
                        </Typography>
                    </MenuItem>
                ))}


            </Menu>
        </div>
    );
}