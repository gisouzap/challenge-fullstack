import React from 'react';
import './App.css';
import LeafLet from './components/LeafLet/LeafLet';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import UIContainer from './UI/Container/Container';

function App() {
  return (
    <UIContainer>
      <Form />
      <LeafLet />
      <Table>
        <tr>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
          <td>Teste</td>
        </tr>
      </Table>
    </UIContainer>
  );
}

export default App;
