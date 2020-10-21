import React from 'react';

import './App.scss';
import Layout from './containers/Layout/Layout';
import Home from './containers/Home/Home';

function App() {
  return (
    <Layout className="Layout">
      <Home className="Home"/>
    </Layout>
  );
}

export default App;
