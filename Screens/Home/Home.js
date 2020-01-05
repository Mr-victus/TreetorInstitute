import React, { Component } from 'react';
import { View, Text,Image,SafeAreaView,TouchableOpacity, } from 'react-native';



class Home extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white',height:'100%'}}>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white',height:'100%'}}>
            <View style={{alignContent:'center',}} >
          <Image style={{alignSelf:'center',marginBottom:60}} source={require('../../assets/treetorlogo.png')}/>
          <Text style={{alignSelf:'center',textAlign:'center'}}>
          {"ppdpiyush.007@gmail.com \n We have sent an link to the above email address.\n Kindly add the students."}
          </Text>
          <View style={{alignItems:'center',justifyContent:'center',marginTop:500}}>
          <Text style={{textAlign:'center'}}>
            {"Kindly use a Desktop or Laptop to \n add the students and teachers"}
          </Text>
          </View>
          

          
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

export default Home;
