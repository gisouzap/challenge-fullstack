import React from 'react';
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
      <div id="mapid"></div>
    </div>
  );
}

export default App;
