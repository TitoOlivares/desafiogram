import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import styles from '../features/counter/Counter.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { signup } from '../api/desafiogram-api'
import SignupSuccess from '../components/SignupSuccess';
import { Container } from '@mui/material';


function Login() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSignup = async () => {
    const params = {
      username: username,
      password: password,
      email: email,
      nombre: name,
      bio: bio,
    }
    const register = await signup(params)
    if (register.status === 201) {
      setSuccess(true)
      setTimeout(() => {
        window.location.href = '/login'
      }, 5000);
    } else if (register.response.status === 400) {
      setError(true);
    }
  }

  const validateSignup = () => {
    return username && email && name && bio && password;
  }

  return (
    <div>
      {success ? <SignupSuccess /> :
        <Container>
          <Grid style={{ paddingBottom: '30px' }} container spacing={2}>
            <Grid item xs={6}>
              <Box className={styles.row} sx={{ flexGrow: 1, mt: 10 }}>
                <img alt='phone' src='phone.png'></img>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className={styles.row} sx={{ flexGrow: 1, mt: 10 }}>
                <Card sx={{ p: 10 }} variant="outlined">
                  <Typography style={{ display: 'flex', justifyContent: 'center' }} variant='h5' sx={{ mb: 1 }}>
                    Desafiogram
                  </Typography>
                  <Typography color="gray" variant="caption" component="div" sx={{ flexGrow: 1, mb: 2 }}>
                    Registrate para que veas el clon de Instagram
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <TextField onChange={(e) => setEmail(e.target.value)} id="email" label="Email" variant="outlined" size='small' />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <TextField onChange={(e) => setName(e.target.value)} id="name" label="Nombre" variant="outlined" size='small' />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <TextField onChange={(e) => setUsername(e.target.value)} id="username" label="Usuario" variant="outlined" size='small' />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <TextField onChange={(e) => setBio(e.target.value)} id="bio" label="Descripción" variant="outlined" size='small' />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <TextField type="password" onChange={(e) => setPassword(e.target.value)} id="password" label="Contraseña" variant="outlined" size='small' />
                  </Box>
                  {error ?
                    <Box>
                      <Typography variant='body1' color='error'>
                        Ha ocurrido un error. Revisa los campos: el email debe ser un email válido y la contraseña debe tener al menos 6 caracteres
                      </Typography>
                    </Box> : null}
                  <Box sx={{ mb: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleSignup} disabled={!validateSignup()} variant="contained">Sign Up</Button>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='body2'>
                      Ya tienes cuenta? <Link to='/login'>Login</Link>
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>}
    </div>
  );
}

export default Login;
