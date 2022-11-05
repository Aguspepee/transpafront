import { Box, Container } from '@mui/material';
import { useState} from 'react';

import { DashboardLayout } from '../layout/layout';
import Basic from '../components/scheduler-personas/basic';

function SchedulerPersonas() {

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
          
              <Basic/>
           
          </Container>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default SchedulerPersonas;
