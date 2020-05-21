import React from 'react';
import './App.css';
import LeafLet from './components/LeafLet/LeafLet';
import Form from './components/Form/Form';
import UIContainer from './UI/Container/Container';

function App() {
  return (
    <UIContainer>
      <Form />
      <LeafLet />
    </UIContainer>
  );
}

export default App;
