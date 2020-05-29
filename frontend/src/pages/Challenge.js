import React, { useState, useEffect } from 'react';
import LeafLet from '../components/LeafLet/LeafLet';
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import UIContainer from '../UI/Container/Container';
import { useLoad } from '../context/Load';
import axios from 'axios';

const ChallengePage = () => {
  const url = 'http://localhost:3001/deliveries';
  const { load } = useLoad();
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setUser(response.data);
    });
  }, [load]);

  return (
    <UIContainer>
      <Form />
      <LeafLet />
      <Info />
      <Table>
        {user &&
          user.map((user, key) => {
            return (
              <tr key={key}>
                <td>{user.name}</td>
                <td>{user.address.street}</td>
                <td>{user.address.city}</td>
                <td>{user.address.country}</td>
                <td>{user.weight}</td>
                <td>{user.address.geolocation.lat}</td>
                <td>{user.address.geolocation.lng}</td>
              </tr>
            );
          })}
      </Table>
      <Footer />
    </UIContainer>
  );
};

export default ChallengePage;
