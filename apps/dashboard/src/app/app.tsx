import React from 'react';

import './app.css';

import { Button } from '@gdgworkspace/components';

export const App = () => {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Welcome to dashboard!</h1>
        <Button />
        <Button />
        <Button />
      </header>
    </div>
  );
};

export default App;
