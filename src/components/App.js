import React, { Component } from 'react';
import '../App.css';
import 'typeface-roboto'
import Header from "./Header"
import Sidebar from './Sidebar/Sidebar';
import Editor from './Editor'
import Grid from '@material-ui/core/Grid/Grid';
import Paper from '@material-ui/core/Paper/Paper'

class App extends Component {
  render() {
    return (
      <>
          <Header />
          <Sidebar />
          <Editor />
      </>
    );
  }

}

export default App;
