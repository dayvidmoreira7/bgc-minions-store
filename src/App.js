import React from 'react';
import './app.css'

import Routes from './routes';

import amplify from 'aws-amplify';
import amplify_config from './amplify-config';
amplify.configure(amplify_config);

function App() {
  return (
    <Routes />
  );
}

export default App;
