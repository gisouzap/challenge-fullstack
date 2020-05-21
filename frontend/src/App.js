import React, { useState, useEffect } from 'react';
import './App.css';
import LeafLet from './components/LeafLet/LeafLet';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import UIContainer from './UI/Container/Container';
import axios from 'axios';
const url = 'http://localhost:3001/deliveries';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data.map((item) => item));
    });
  }, [user]);

  return (
    <UIContainer>
      <Form />
      <LeafLet />
      <Table>
        {user.map((user, key) => {
          return (
            <tr key={key}>
              <td>{user.name}</td>
              <td>{user.address.route}</td>
              <td>{user.address.administrative_area_level_2}</td>
              <td>{user.address.country}</td>
              <td>{user.weight}</td>
              <td>{user.address.geolocation.lat}</td>
              <td>{user.address.geolocation.lng}</td>
            </tr>
          );
        })}
      </Table>
    </UIContainer>
  );
}

export default App;
