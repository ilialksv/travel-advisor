import React from 'react';
import GoogleMapReact from 'google-map-react';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import LocationOn from '@mui/icons-material/LocationOn';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const isDesktop = useMediaQuery('min-width: 600px');

  const Card = styled('div')({
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '&:hover': {zIndex: 2} 
  })

  return (
    <Container sx={{height: '85vh', width: '100%'}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCztf7jaLG9AwynVFdo5FTP42wilqHgB28' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
        }}
        onChildClick={(child) => {
          setChildClicked(child);
        }}
      >
        {places?.map((place, index) => (
          <Card 
            key={index}
            lat={Number(place.latitude)} 
            lng={Number(place.longitude)}
          >
            {
              isDesktop ? (
                <LocationOn color='primary' fontSize='large' />
              ) : (
                <Paper elevetion={3} sx={{
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  width: '100px'
                }}>
                  <Typography variant='body2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img 
                    src={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                    sx={{cursor: 'pointer'}} 
                    alt={place.name}
                  />
                  <Rating size="small" value={Number(place.rating)} readOnly />
                </Paper>
              )
            }
          </Card>
        ))}
      </GoogleMapReact>
    </Container>
  )
}

export default Map