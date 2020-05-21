import React from 'react';

const Form = () => {
  return (
    <form class="challenge-form">
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="cform-group">
        <label htmlFor="weight">Peso: </label>
        <input type="number" id="weight" name="weight" />
      </div>
      <div className="form-group">
        <label htmlFor="address">Endereço: </label>
        <input type="text" className="form-address" />
        <button type="button">Buscar</button>
      </div>
      <div className="form-group__disabled">
        <input type="text" className="input-lat" disabled value={'LATITUDE'} />
        <input type="text" className="input-lng" disabled value={'LONGITUDE'} />
      </div>
      <button className="form-button__save" type="submit">
        Salvar dados
      </button>
      <button className="form-button__reset">Resetar dados</button>
    </form>
  );
};

export default Form;
