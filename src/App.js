import React from 'react';
import './App.css';
import { Layout } from 'antd';

import Login from "./Views/Login";
import Root from "./Views/Root";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: true
    }

  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    const display = isLoggedIn ? <Root /> : <Login />

    return (
      <Layout>
        {display}
      </Layout>
    );
  }

}

export default App;
