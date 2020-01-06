import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack'
import Home from '../Screens/Home/Home'
import Rank from '../Screens/Home/Rank'
import Curriculam from '../Screens/Home/Curriculam'
import Diary from '../Screens/Home/Diary'
import AllStudent from '../Screens/Home/AllStudent'

import Institute from '../Screens/Home/Institute'
import Forum from '../Screens/Home/Forum'
import ClassRoom from '../Screens/Classroom/ClassRoom'
import Account from '../Screens/Account'
import Attendance from '../Screens/Classroom/Attendance';
import Review from '../Screens/Classroom/Review';


const home=createStackNavigator({
  Home:{screen:Home},
  Rank:{screen:Rank},
  Curriculam:{screen:Curriculam},
  Diary:{screen:Diary},
  Institute:{screen:Institute},
  Forum:{screen:Forum},
  AllStudent:{screen:AllStudent}
})

const classroom=createStackNavigator({
  ClassRoom:{screen:ClassRoom},
  Attendance:{screen:Attendance},
  Review:{screen:Review}
})
const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: home },
    ClassRoom:{screen:ClassRoom},
    Account:{screen:Account}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      
      headerBackAllowFontScaling: true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName=null
        if (routeName.includes("Home")) {
          iconName = focused ? require('../assets/homeSelect.png') : require('../assets/homeUnselect.png');
        } 
        else if (routeName.includes("ClassRoom")) {
          iconName = focused ? require('../assets/classromSelect.png') : require('../assets/classromUnselect.png')

        } 
        else if (routeName.includes("Account")) {
          iconName = focused ? require('../assets/accountSelect.png') : require('../assets/accountUnselect.png')
        } 
        return (
          <Image
            source={iconName}
            style={{ height: 25, width: 25 }}
            color={tintColor}
          />
          
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#6EF31A",
      style: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white',
        height:55,
        //shadowColor:'black',
        
       // paddingVertical: 5,
        //backgroundColor: "#eaeaea"
      },
      labelStyle: {
        fontSize: 12,
        //fontFamily: Fonts.type.bold,
        fontWeight: "200"
      },
      headerBackTitleStyle: {
        color: "#ffffff",
        //fontFamily: Fonts.type.base,
        fontSize: 17
      }
    }
  }
);

export default BottomTabNavigator;
