import React, { useState, useEffect } from 'react';
import './Info.css';
import axios from 'axios';

const Info = () => {
  const url = 'http://localhost:3001/deliveries';
  const [deliveries, setDeliveries] = useState({
    totalUsers: 0,
    totalWeight: 0,
    mediumTicket: 0,
  });
  useEffect(() => {
    axios.get(url).then((response) => {
      const users = response.data;
      const totalUsers = users.length;
      if (users) {
        const weight = users
          .map((user) => user.weight)
          .reduce((acc, add) => acc + add, 0);
        setDeliveries({
          totalUsers: totalUsers,
          totalWeight: weight,
          mediumTicket: weight / totalUsers,
        });
      }
    });
  }, [deliveries]);

  return (
    <div className="info-wrapper">
      <span>Total de Clientes: {deliveries.totalUsers};</span>{' '}
      <span>
        Peso total: {parseFloat(deliveries.totalWeight).toFixed(1)} kg;
      </span>{' '}
      <span>
        Ticket Médio: {deliveries.mediumTicket ? deliveries.mediumTicket : 0}
      </span>
    </div>
  );
};

export default Info;
