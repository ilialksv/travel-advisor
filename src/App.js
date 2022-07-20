import React, { useState, useEffect } from 'react';
import { getPlacesData } from './api';
import List from './components/List';
import Map from './components/Map';
import Navbar from './components/Navbar';
import './App.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    console.log(coordinates, bounds);
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, [coordinates, bounds])

  return (
    <Box>
      <Navbar />
      <Grid container spacing={3} sx={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App