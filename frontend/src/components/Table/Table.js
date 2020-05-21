import React from 'react';
import './Table.css';

const Table = ({ children }) => {
  return (
    <div className="table-wrapper">
      <table className="challenge-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rua</th>
            <th>Cidade</th>
            <th>País</th>
            <th>Peso</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
