import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form-challenge">
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input type="text" className="input-name" />
        </div>
        <div className="form-group">
          <label htmlFor="weigth">Peso:</label>
          <input type="text" className="input-weigth" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço Cliente:</label>
          <input type="text" className="input-addres" />
        </div>
        <div className="form-group__disabled">
          <label htmlFor="address">Latitude</label>
          <input type="text" className="input-addres" disabled />
        </div>
        <div className="form-group__disabled">
          <label htmlFor="address">Longitude</label>
          <input type="text" className="input-addres" disabled />
        </div>
        <button className="form-save">Cadastrar cliente</button>
        <button className="form-reset">Resetar Cadastros</button>
      </form>
      <Map center={[-23.54, -46.63]} zoom={12}>
        {' '}
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
    </div>
  );
}

export default App;
