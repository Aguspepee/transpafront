import { useState, useEffect } from 'react';
import { Box, Card, Table, TableBody, Paper } from '@mui/material';
import { indisponibilidadesGetAll } from '../../services/indisponibilidades';
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

export const IndisponibilidadesListResults = () => {
  const [user, setUser] = useContext(UserContext);
  const [edit, setEdit] = useState({ open: false, indisponibilidad: [] })
  const [reload, setReload] = useState(false)
  const [data, setData] = useState([])
  const indisponibilidades = data?.docs || []
  const [notify, setNotify] = useState({ isOpen: false, message: "", type: "success" })
  const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "", subTitle: "" })
  const [certificado, setCertificado] = useState([])

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
      const newSelecteds = indisponibilidades.map((n) => n._id);
      const newItemsCertificado = indisponibilidades
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
  const [orderBy, setOrderBy] = useState('indisponibilidad_numero');
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
        const res = await indisponibilidadesGetAll(page, rowsPerPage, order, orderBy, search)
        setData(res.data)
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    }
    getList()
  }, [reload, page, rowsPerPage, order, orderBy, search])

  return (
    <>
      <Card sx={{}}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          selected={selected}
          certificado={certificado}
          handleReload={handleReload}
          handleConfirmDialogChange={handleConfirmDialogChange}
          handleNotifyChange={handleNotifyChange}
          selectedToEmpty={selectedToEmpty}
          order={order}
          orderBy={orderBy}
          search={search}
          columns={user.indisponibilidadesColumns}
          user={user}
        />
        <Paper sx={{ overflowX: "auto", width: "100%", height: `calc(100vh - 245px)` }}>
          {/*     <PerfectScrollbar> */}
          <Box sx={{ minWidth: 500, maxWidth: 1900 }}>
            <Table stickyHeader size="small" >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                numSelected={selected.length}
                rowCount={indisponibilidades.length}
                onSelectAllClick={handleSelectAllClick}
                columns={user.indisponibilidadesColumns}
              />
              <TableBody>
                <EnhancedTableSearch
                  columns={user.indisponibilidadesColumns}
                  search={search}
                  onChange={handleSearchChange}
                  handleStartLoading={handleStartLoading}
                />

                {loading &&
                  rows.map((item, index) =>
                    <EnhancedTableSkeleton key={index} columns={user.indisponibilidadesColumns} />)
                }

                {!loading && indisponibilidades?.map((indisponibilidad, index) => (
                  <EnhancedTableRow
                    key={indisponibilidad._id}
                    indisponibilidad={indisponibilidad}
                    handleReload={handleReload}
                    handleClick={handleClick}
                    selectedToEmpty={selectedToEmpty}
                    index={index}
                    selected={selected}
                    columns={user.indisponibilidadesColumns}
                    handleConfirmDialogChange={handleConfirmDialogChange}
                    handleNotifyChange={handleNotifyChange}
                    handleEdit={handleEdit}
                    rol={user.role}
                  />
                ))}
              </TableBody>
            </Table>
          </Box>
          {/*  </PerfectScrollbar> */}
        </Paper>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50, 100]}
          component="div"
          count={rowsCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            "& .MuiTablePagination-selectLabel": {
              fontSize: "9pt",
            },
            "& 	.MuiTablePagination-root": {
              fontSize: "9pt",
            },
            "& 	.MuiTablePagination-actions": {
              fontSize: "9pt",
            },
            "& .MuiTablePagination-displayedRows": {
              fontSize: "9pt",
            }
          }}
          style={{ backgroundColor: "#F3F4F6", fontSize: "9pt" }}
          labelRowsPerPage={"Filas por página"}
        />
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