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
  const [message, setMessage] = useState('');

  const getGeocode = () => {
    axios
      .get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: address,
          key: 'AIzaSyCUN5lpFhSKu2xRPdIAMx0D6jZli-Pwr5c',
        },
      })
      .then((resp) => {
        const results = resp.data.results[0].address_components;
        const latLng = resp.data.results[0].geometry.location;

        if (results.length >= 8) {
          setMessage('');
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
          onFailedSearch();
        }
        setPosition([latLng.lat, latLng.lng]);
      })
      .catch((error) => console.log(error));
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

  const onFailedSearch = () => {
    setMessage('Inclua o endereço completo. Ex: complemento, n° da rua, etc.');
  };

  const onClear = () => {
    setUser({ name: '', weight: '' });
    setAddress('');
    setPosition({ 0: '', 1: '' });
    setMessage('');
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
            onClick={getGeocode}
          >
            BUSCAR
          </button>
        </div>
        <span class="form-address__failed">{message}</span>

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
