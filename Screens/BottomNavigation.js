import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomTabNavigator from '../NavigationApp/BottomTabNavigator'
class BottomNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BottomTabNavigator screenProps={{auth_key:this.props.navigation.state.params.auth_key.toString()}}/>
    );
  }
}

export default BottomNavigation;
