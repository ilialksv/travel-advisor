import React from 'react';
import List from './components/List';
import Map from './components/Map';
import Navbar from './components/Navbar';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const App = () => {
  return (
    <Box>
      <Navbar />
      <Grid container spacing={3} sx={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App