import { Box, Container} from '@mui/material';
import { IndisponibilidadesListResults } from '../components/indisponibilidades-list/indisponibilidades-list-results';
import { DashboardLayout } from '../layout/layout';


function Indisponibilidades() {

  return (
    <>
      <DashboardLayout>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            py: 4
          }}
        >
          <Container maxWidth={false}>
            <IndisponibilidadesListResults />
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Indisponibilidades;
