import React, { useState, useEffect, createRef } from 'react';
import PlaceDetails from './PlaceDetails';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const theme = createTheme();
  const [elRefs, setElRefs] = useState([]);

  const Loading = styled('div')({
    height: '600px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  })
  
  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, index) => elRefs[index] || createRef())
    setElRefs(refs);
  }, [places])

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{padding: '25px'}}>
        <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
        {isLoading ? (
          <Loading>
            <CircularProgress size="5rem" />
          </Loading>
        ) : (
        <>
          <FormControl 
            variant="standard" 
            sx={{margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'}}
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
          <FormControl variant="standard" sx={{margin: theme.spacing(1), minWidth: 120, marginBottom: '30px'}}>
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
              <Grid ref={elRefs[i]} item key={i} xs={12}>
                <PlaceDetails 
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                />
              </Grid>
            ))}
          </Grid>
        </>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default List