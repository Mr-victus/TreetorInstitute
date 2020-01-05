import React, { Component } from 'react';
import { View, Text, Image,ImageBackground } from 'react-native';

class Account extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <View >
            <ImageBackground style={{height:'80%',width:'100%'}} source={require('../assets/profilePic.png')} >
            

            </ImageBackground>
            
        </View>
      </View>
    );
  }
}

export default Account;
