import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import RoomIcon from '@material-ui/icons/Room';

const GoogleMap = () => {
  const [mapPosition, setMapPosition] = useState({ lat: 36.97, lng: -122.01 });
  const [mapZoom, setMapZoom] = useState(13);

  return (
    // Important! Always set the container height explicitly
    <div
      className="googleMap"
      style={{ height: '96vh', width: '49vw', margin: '0', padding: '0' }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAdQoT-TsGwyxWvk5muBONXAL4cXdIfXMM' }}
        defaultCenter={mapPosition}
        defaultZoom={mapZoom}
      >
        <div lat={36.97} lng={-122.01}>
          <RoomIcon />
        </div>
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
