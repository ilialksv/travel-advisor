import axios from 'axios';

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(url, { 
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng
    },
    headers: {
      'X-RapidAPI-Key': 'b328813871msha25f646de4cb840p12c574jsn40e6a92935ca',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  });
    return data;
  } catch (error) {
    console.log(error)
  }
}