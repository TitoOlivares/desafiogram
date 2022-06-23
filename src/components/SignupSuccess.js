import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SignupSuccess() {
  return (
    <Box style={{ textAlign: 'center' }}>
      <Box>

        <Typography variant='h5'>
          ¡Registro exitoso!
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1'>Te estamos redirigiendo a la página de inicio de sesión...</Typography>
      </Box>
    </Box>
  )
}

export default SignupSuccess;