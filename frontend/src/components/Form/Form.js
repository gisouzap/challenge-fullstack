import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <form class="challenge-form">
      <input type="text" id="name" name="name" placeholder="Nome do Cliente" />
      <input
        type="number"
        id="weight"
        name="weight"
        placeholder="Peso da Entrega"
      />
      <div className="form-address__search">
        <input
          type="text"
          className="form-address"
          placeholder="Endereço do Cliente"
        />
        <button class="form-button__search" type="button">
          Buscar
        </button>
      </div>

      <input type="text" className="input-lat" disabled value={'LATITUDE'} />
      <input type="text" className="input-lng" disabled value={'LONGITUDE'} />
      <button className="form-button__save" type="submit">
        CADASTRAR CLIENTE
      </button>
      <button className="form-button__reset">RESETAR CADASTRO</button>
    </form>
  );
};

export default Form;
