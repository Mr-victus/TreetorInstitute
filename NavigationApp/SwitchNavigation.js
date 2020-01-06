import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createSwitchNavigator,createAppContainer } 
  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator'
import Login from '../Screens/Login'
import Signupfirst from '../Screens/Signup/Signupfirst'
import Signupsecond from '../Screens/Signup/Signupsecond'
import Home from '../Screens/Home/Home'
const Main=createStackNavigator({
  Login:{screen:Login},
  Signupfirst:{screen:Signupfirst},
  Signupsecond:{screen:Signupsecond},
  Home:{screen:Home}
  
})


const SwitchNavigation =createSwitchNavigator({
    Main:Main,
    BottomTabNavigator:BottomTabNavigator
})

const AppContainer = createAppContainer(SwitchNavigation);
export default AppContainer;
