import React from 'react';
import GoogleMapReact from 'google-map-react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOn from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';

const Map = () => {
  const isMobile = useMediaQuery('min-width: 600px');

  const coordinates = { lat: 0, lng: 0 }

  return (
    <Container sx={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCztf7jaLG9AwynVFdo5FTP42wilqHgB28' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}
      >

      </GoogleMapReact>
    </Container>
  )
}

export default Map