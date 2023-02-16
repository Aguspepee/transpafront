import { Box, Container} from '@mui/material';
import { NovedadesListResults } from '../components/novedades-list/novedades-list-results';
import { DashboardLayout } from '../layout/layout';


function Novedades() {

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
            <NovedadesListResults />
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Novedades;
