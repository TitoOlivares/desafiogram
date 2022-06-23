import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import styles from '../features/counter/Counter.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { loginInsta } from '../api/desafiogram-api';


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('username: ', username)
    console.log('password: ', password)
    const params = {
      email: username,
      password: password,
    }
    const login = await loginInsta(params)
    if (login.status === 200) {
      localStorage.setItem('instaToken', login.data.token)
      window.location.href = '/explore'
    }
    console.log('lalala', login.data.token)
  }

  return (
    <div>
      <Box className={styles.row} sx={{ flexGrow: 1, mt: 10, pb: 3 }}>
        <Card sx={{ p: 10 }} variant="outlined">
          <Typography style={{ display: 'flex', justifyContent: 'center' }} variant='h5' sx={{ mb: 2 }}>
            Desafiogram
          </Typography>
          <Box sx={{ mb: 2 }}>
            <TextField onChange={(e) => setUsername(e.target.value)} id="email" label="Email" variant="outlined" size='small' />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField type="password" onChange={(e) => setPassword(e.target.value)} id="password" label="Contraseña" variant="outlined" size='small' />
          </Box>
          <Box sx={{ mb: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={handleLogin} disabled={!username || !password} variant="contained">Login</Button>
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body2'>
              No tienes cuenta? <Link to='/signup'>Signup</Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Login;
