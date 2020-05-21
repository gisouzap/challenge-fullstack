import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="form-wrapper">
      <form className="challenge-form">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do Cliente"
        />
        <input
          type="number"
          id="weight"
          name="weight"
          placeholder="Peso da Entrega"
        />
        <div className="form-address__search">
          <input type="text" placeholder="Endereço do Cliente" />
          <button class="form-button__search" type="button">
            Buscar
          </button>
        </div>

        <input
          type="text"
          className="input-disabled"
          disabled
          value={'LATITUDE'}
        />
        <input
          type="text"
          className="input-disabled"
          disabled
          value={'LONGITUDE'}
        />

        <button className="form-button__save" type="submit">
          CADASTRAR CLIENTE
        </button>

        <button className="form-button__reset">RESETAR CADASTRO</button>
      </form>
    </div>
  );
};

export default Form;
