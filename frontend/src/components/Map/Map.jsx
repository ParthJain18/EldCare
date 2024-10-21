import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5pa2VzaDAyIiwiYSI6ImNscnZ4M2VkcjBsY3Aya282MG1sN2E2cDkifQ.R-psoYeBCQg_WI-ohOM1jg';

const Map = () => {
  const { id } = useParams();
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitude: 0
  });
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/location/${id}`);
        console.log(res);
        const s = res.data.location
        const [latitude, longitude] = s.split(', ').map(parseFloat);
        setCoordinates({
          latitude: latitude,
          longitude: longitude
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchLocation();
  },[])
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [72.8999, 19.0728],
      zoom: 6
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: {
        color: 'orange'
      },
      mapboxgl: mapboxgl
    });

    geocoder.on('result', function (e) {
      const coordinates = e.result.geometry.coordinates;

      new mapboxgl.Marker({ color: 'red' })
        .setLngLat(coordinates)
        .addTo(map);
    });

    map.addControl(geocoder);

    // Add a marker at a specific location
    const marker = new mapboxgl.Marker({ color: 'blue' })
      .setLngLat([72.8999, 19.0728])
      .addTo(map);

    // Clean up map on component unmount
    return () => map.remove();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div id="map" style={{ position: 'absolute', top: 0, bottom: 0, width: '100%' }} />
    </div>
  );
};

export default Map;
