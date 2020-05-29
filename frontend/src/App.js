import React from 'react';
import ChallengePage from './pages/Challenge';
import LoadProvider from '../src/context/Load';

function App() {
  return (
    <LoadProvider>
      <ChallengePage />
    </LoadProvider>
  );
}

export default App;
