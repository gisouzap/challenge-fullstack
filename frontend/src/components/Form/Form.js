import React, { useState } from 'react';
import './Form.css';
import { useLoad } from '../../context/Load';
import axios from 'axios';

const url = 'http://localhost:3001/deliveries';

const Form = () => {
  const { load, setLoad } = useLoad();
  const [user, setUser] = useState([]);
  const [address, setAddress] = useState([]);
  const [position, setPosition] = useState([]);
  const [userAddress, setUserAddress] = useState([]);
  const [failMessage, setFailMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSearch = () => {
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: process.env.REACT_APP_API_GEOCODE,
        },
      })
      .then((resp) => {
        onSetAddress(resp);
      })
      .catch((error) => console.log(error));
  };

  const onSetAddress = (resp) => {
    const results = resp.data.results[0].address_components;
    const latLng = resp.data.results[0].geometry.location;
    const formattedAddress = resp.data.results[0].formatted_address;

    if (results.length >= 8) {
      setFailMessage('');
      setSuccessMessage('Endereço encontrado: ' + formattedAddress);

      setUserAddress({
        street: results[2].long_name,
        street_number: results[1].long_name,
        complement: results[0].long_name,
        neighbourhood: results[3].long_name,
        city: results[4].long_name,
        state: results[5].long_name,
        country: results[6].long_name,
        geolocation: {
          lat: latLng.lat,
          lng: latLng.lng,
        },
      });
    } else {
      setFailMessage(
        'Endereço não encontrado! Inclua complemento, n° da rua, bairro, etc. '
      );
    }
    setPosition([latLng.lat, latLng.lng]);
  };

  const onChange = (ev) => {
    const { name, value } = ev.target;
    setUser({ ...user, [name]: value });
  };

  const onSave = (ev) => {
    ev.preventDefault();
    try {
      axios.post(url, {
        name: user.name,
        weight: user.weight,
        address: userAddress,
      });
      onClear();
      setLoad(!load);
    } catch (error) {
      console.log('Erro ao cadastrar novo cliente!' + error);
    }
  };

  const onDelete = (ev) => {
    ev.preventDefault();
    try {
      axios.delete(url, {
        params: {
          name: user.name,
          weight: user.weight,
          address: userAddress,
        },
      });
      onClear();
      setLoad(!load);
    } catch (err) {
      console.log(err);
    }
  };

  const onClear = () => {
    setUser({ name: '', weight: '' });
    setAddress('');
    setPosition({ 0: '', 1: '' });
    setFailMessage('');
    setSuccessMessage('');
  };

  return (
    <div className="form-wrapper">
      <form className="challenge-form">
        <input
          type="text"
          id="name"
          name="name"
          value={user.name || ''}
          placeholder="Nome do Cliente"
          onChange={onChange}
        />
        <input
          type="text"
          id="weight"
          name="weight"
          value={user.weight || ''}
          placeholder="Peso da Entrega"
          onChange={onChange}
        />
        <div className="form-address__search">
          <input
            type="text"
            value={address || ''}
            placeholder="Endereço do Cliente"
            onChange={(ev) => setAddress(ev.target.value)}
          />

          <button
            className="form-button__search"
            type="button"
            onClick={onSearch}
          >
            BUSCAR
          </button>
        </div>
        <span className="form-address__failed">{failMessage}</span>
        <span className="form-address__succeded">{successMessage}</span>

        <input
          type="text"
          className="input-disabled"
          disabled
          value={position[0] ? position[0] : 'LATITUDE'}
        />
        <input
          type="text"
          className="input-disabled"
          disabled
          value={position[1] ? position[0] : 'LONGITUDE'}
        />

        <button className="form-button__save" onClick={onSave} type="submit">
          CADASTRAR CLIENTE
        </button>

        <button className="form-button__reset" onClick={onDelete}>
          RESETAR CADASTRO
        </button>
      </form>
    </div>
  );
};

export default Form;
