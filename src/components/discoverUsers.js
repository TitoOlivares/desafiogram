import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { getExplore } from '../api/desafiogram-api';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


function DiscoverUsers() {
  const [exploreArray, setExploreArray] = useState([])
  useEffect(() => {
    getExplore()
      .then(res => {
        setExploreArray(res.data)
        console.log(res)
      })
  }, [getExplore])

  function aleatorio(inferior, superior) {
    const numPosibilidades = superior - inferior
    let aleat = Math.random() * numPosibilidades
    let aleato = Math.floor(aleat)
    return parseInt(inferior) + aleato
  }

  function dame_color_aleatorio() {
    const hexadecimal = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F")
    let color_aleatorio = "#";
    for (let i = 0; i < 6; i++) {
      const posarray = aleatorio(0, hexadecimal.length)
      color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
  }

  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }} color='gray' variant='body1'>Descubrir usuarios</Typography>
      <Container sx={{ display: 'flex', overflowX: 'scroll' }}>
        {exploreArray.map((user, i) => (
          <Card variant='outlined' sx={{ pr: 12, pl: 12, pt: 3, pb: 3, m: 3 }} key={i}>
            <Box sx={{ mb: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar sx={{ bgcolor: dame_color_aleatorio }}>N</Avatar>
            </Box>
            <Typography sx={{ mb: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
              {user.username}
            </Typography>
            <Box sx={{ mb: 3 }} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button size='small' variant='contained'>Ver Perfil</Button>
            </Box>
          </Card>
        ))}
      </Container>
    </Box >
  )
}

export default DiscoverUsers;