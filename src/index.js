import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

const container = document.getElementById('root');
const root = createRoot(container);
const token = localStorage.getItem('instaToken');

const logout = () => {
  localStorage.removeItem('instaToken');
  window.location.href = '/login'
}

root.render(
  <Provider store={store}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' position="static" elevation={1}>
        <Toolbar>
          <Typography color="InfoText" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Desafiogram
          </Typography>
          {token ?
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={logout}
              color="inherit"
            >
              <LogoutIcon />
            </IconButton> : null}
        </Toolbar>
      </AppBar>
    </Box>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
