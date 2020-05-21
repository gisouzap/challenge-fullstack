import React, { useState, useEffect } from 'react';
import './LeafLet.css';
import Pin from './pin/Pin';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
const url = 'http://localhost:3001/deliveries';

const LeafLet = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data.map((item) => item));
    });
  }, [user]);

  return (
    <div>
      <Map className="leaflet-map" center={[-23.5489, -46.6388]} zoom={8}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {user &&
          user.map((item) => (
            <Marker
              key={item._id}
              icon={Pin}
              position={[
                item.address.geolocation.lat,
                item.address.geolocation.lng,
              ]}
            >
              <Popup>
                {item.name}, {item.weight} Kg
              </Popup>
            </Marker>
          ))}
      </Map>
    </div>
  );
};

export default LeafLet;
