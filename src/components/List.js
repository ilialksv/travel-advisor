import React, { useState } from 'react';
import PlaceDetails from './PlaceDetails';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material'

const List = () => {
  const theme = createTheme();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState(0)
  const places = [
    {name: 'Cool Place'}, 
    {name: 'Best Beer'}, 
    {name: 'Best Steak'},
    {name: 'Cool Place'}, 
    {name: 'Best Beer'}, 
    {name: 'Best Steak'},
    {name: 'Cool Place'}, 
    {name: 'Best Beer'}, 
    {name: 'Best Steak'}
  ];

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{padding: '25px'}}>
        <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
        <FormControl 
          variant="standard" 
          sx={{margin: theme.spacing(1)}}
        >
          <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
          <Select 
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard" 
            value={type} 
            onChange={(e) => {setType(e.target.value)}}
          >
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard" sx={{margin: theme.spacing(1)}}>
          <InputLabel id="demo-simple-select-standard-label">Rating</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            label='Rating'
            id="demo-simple-select-standard"
            value={rating}
            onChange={(e) => {setRating(e.target.value)}}
          >
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={3}>Above 3.0</MenuItem>
            <MenuItem value={4}>Above 4.0</MenuItem>
            <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} sx={{height: '75vh', overflow: 'auto'}}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default List