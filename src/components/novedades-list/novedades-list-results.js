import { useState, useEffect } from 'react';
import { Box, Card, Table, TableBody, Paper, Button } from '@mui/material';
import { novedadesGetAll } from '../../services/novedades';
import EnhancedTableToolbar from './table/enhanced-table-toolbar';
import EnhancedTableHead from './table/enhanced-table-head';
import EnhancedTableSearch from './table/enhanced-table-search';
import EnhancedTableRow from './table/enhanced-table-row';
import TablePagination from '@mui/material/TablePagination';
import UserContext from '../../context/userContext';
import { useContext } from 'react';
import EnhancedTableSkeleton from './table/enhanced-table-skeleton';

//Alerts y Notifications
import Notification from '../../styled-components/alerts/notification';
import ConfirmDialog from '../../styled-components/alerts/confirm-dialog';
import NovedadesListAdd from './components/add-novedad';

export const NovedadesListResults = () => {
  const [user, setUser] = useContext(UserContext);
  const [edit, setEdit] = useState({ open: false, novedad: [] })
  const [reload, setReload] = useState(false)
  const [data, setData] = useState([])
  const novedades = data?.docs || []
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "success" })
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })
  const [certificado, setCertificado] = useState([])
  const [openForm, setOpenForm] = useState(false)

  //Array de filas para mapear skeleton
  let rows = [], i = 0, len = 25;
  while (++i <= len) rows.push(i);

  //Loading
  const [loading, setLoading] = useState(true)
  const handleStartLoading = () => {
    setLoading(true)
  }

  const handleEdit = (value) => {
    setEdit(value)
  }

  const handleConfirmDialogChange = (value) => {
    setConfirmDialog({
      ...confirmDialog,
      ...value
    })
  }

  const handleNotifyChange = (value) => {
    setNotify(value)
  }

  const handleReload = () => {
    setReload(!reload)
  }

  //Selected 
  const [selected, setSelected] = useState([]);
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = novedades.map((n) => n._id);
      const newItemsCertificado = novedades
      setSelected(newSelecteds);
      setCertificado(newItemsCertificado);
      return;
    }
    setSelected([]);
    setCertificado([]);
  };

  const handleClick = (event, name, item) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    let newItem = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
      newItem = newItem.concat(certificado, item)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      newItem = newItem.concat(certificado.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      newItem = newItem.concat(certificado.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
      newItem = newItem.concat(
        certificado.slice(0, selectedIndex),
        certificado.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected);
    setCertificado(newItem)
  };

  //Selected to emty
  const selectedToEmpty = () => {
    setSelected([])
    setCertificado([])
  }

  //Search filers
  const [search, setSearch] = useState({})
  const handleSearchChange = (newValue) => {
    setSearch(newValue)
    setLoading(true);
  }

  //Sort states and functions
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('novedad_numero');
  const handleRequestSort = (event, property) => {
    setLoading(true);
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  //Pagination states and functions
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const rowsCount = data.totalDocs || 100
  const handleChangePage = (event, newPage) => {
    setLoading(true);
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setLoading(true);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    async function getList() {
      try {
        const res = await novedadesGetAll(page, rowsPerPage, order, orderBy, search)
        setData(res.data)
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  }, [reload, page, rowsPerPage, order, orderBy, search])

  const OpenForm = ()=>{
    setOpenForm(!openForm)

  }

  return (
    <>
      <Card sx={{}}>
      <NovedadesListAdd/>
      </Card>
      <Notification
        notify={notify}
        setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog} />
      {
        edit.open &&
        <>
          edit
        </>
      }
    </>
  );
};