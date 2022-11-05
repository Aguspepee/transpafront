import { useEffect, useState, useContext } from 'react';
import 'react-datasheet-grid/dist/style.css'
import './App.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './context/userContext';

//Private Routes
import Private from './components/Private';

//Autenticación inicial
import { userWhoami } from './services/users';

//Páginas
import UsersLogin from './pages/users-login';
import UsersAccount from './pages/users-account';
import UsersList from './pages/users-list';
import UsersCreate from './pages/users-create';
import UsersEdit from './pages/users-edit';
import Loading from './pages/loading';
import SessionTimeout from './styled-components/alerts/session-timeout';
import Settings from './pages/settings';
import Mapa from './pages/mapa';
/* import SchedulerPersonas from './pages/scheduler-personas'; */

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  const [user, setUser] = useContext(UserContext);
  const [loadingUser, setLoadingUser] = useState(true)
  const [expirationTime, setExpirationTime] = useState(1000000000000)

  useEffect(() => {
    const Login = async () => {
      try {
        const { data: usuario } = await userWhoami()
        setExpirationTime(usuario.exp)
        setUser(usuario[0])
        setLoadingUser(false)
      } catch (e) {
        console.log(e)
        setLoadingUser(false)
      }
    }
    Login()
  }, []
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loadingUser === true &&
        <Loading />}
      {loadingUser === false &&
        <BrowserRouter>
          <Routes>

            {/* Inicio */}
            <Route path="/" element={<Private Component={Mapa} user={user} roles={["Administrador", "Supervisor", "Inspector", "Asistente"]} />} />


            {/* Users */}
            <Route path="/users-account" element={<Private Component={UsersAccount} user={user} roles={["Administrador", "Supervisor", "Inspector", "Asistente"]} />} />
            <Route path="/users-create" element={<Private Component={UsersCreate} user={user} roles={["Administrador", "Supervisor", "Inspector", "Asistente"]} />} />
            <Route path="/users-edit/:id" element={<Private Component={UsersEdit} user={user} roles={["Administrador", "Supervisor", "Inspector", "Asistente"]} />} />
            <Route path="/users-list" element={<Private Component={UsersList} user={user} roles={["Administrador", "Supervisor", "Inspector", "Asistente"]} />} />
            <Route path="/users-login" element={<UsersLogin />} />

            {/* Loading */}
            <Route path="/loading" element={<Loading />} />

            {/* Settings*/}
            <Route path="/settings" element={<Private Component={Settings} user={user} roles={["Administrador"]} />} />

            {/* SchedulerPersonas*/}
            {/*             <Route path="/scheduler-personas" element={<Private Component={SchedulerPersonas} user={user} roles={["Administrador"]} />} /> */}

            {/* Mapa*/}
            <Route path="/mapa" element={<Private Component={Mapa} user={user} roles={["Administrador"]} />} />


          </Routes>

          <SessionTimeout expirationTime={expirationTime} />
        </BrowserRouter>}

    </ThemeProvider>
  );
}

export default App;
