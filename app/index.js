/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import AppRoute from './routes/index';
import Home from './components/Home/Home.component';
class AppMain extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}
export default AppMain;