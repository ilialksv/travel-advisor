import React, { useState } from 'react';
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

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{padding: '25px'}}>
        <Typography variant='h4'>Restaurants, Hotels & Attractions around you</Typography>
        <FormControl sx={{margin: theme.spacing(1)}}>
          <InputLabel>Type</InputLabel>
          <Select value={type} onChange={(e) => {setType(e.target.value)}}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>
      </Container>
    </ThemeProvider>
  )
}

export default List