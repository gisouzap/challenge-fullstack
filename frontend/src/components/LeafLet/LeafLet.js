import React from 'react';
import './LeafLet.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

const LeafLet = () => {
  return (
    <div>
      <Map className="leaflet-map" center={[-23.5489, -46.6388]} zoom={6}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[-23.5489, -46.6388]}>
          <Popup></Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default LeafLet;
