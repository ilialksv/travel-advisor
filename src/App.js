import React from 'react';
import List from './components/List';
import Map from './components/Map';
import Navbar from './components/Navbar';
import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <Container maxWidth='xl'>
      <Navbar />
      <Grid container spacing={3} sx={{width: '100%'}}>

      </Grid>
    </Container>
  )
}

export default App