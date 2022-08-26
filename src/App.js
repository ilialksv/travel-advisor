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
  const [bounds, setBounds] = useState({sw: 0, ne: 0});
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude})
    })
  }, [])

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setIsLoading(false);
    });
  }, [coordinates, bounds])

  return (
    <Box>
      <Navbar />
      <Grid container spacing={3} sx={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={places}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map 
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default App