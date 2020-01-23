import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';



class Home extends Component {

  static navigationOptions = {
    title: "A J Loren",
    
    headerTitleStyle: {
      color: "#000",
      //fontFamily: Fonts.type.bold,

      // fontWeight: Fonts.weight.bold,
      fontSize: 16,
      alignSelf: "center"
    },
    headerTintColor: "#000",
    headerBackTitleStyle: {
      color: "#000",
      // fontFamily: Fonts.type.bold,
      // fontWeight: Fonts.weight.bold,
      fontSize: 17
    }
  };
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    console.log(this.props)
    return (
      <View style={{backgroundColor:'#fafafa',justifyContent:'space-evenly',height:'100%',width:'100%'}}>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignContent:'center',alignItems:'center'}}>
         
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Batch')}>
          <View style={{alignContent:'center',justifyContent:'center',alignItems:'center',}}>
            <View style={{backgroundColor:'white',borderRadius:17,height:90,width:90,alignContent:'center',justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,}}> 
            <Image source={require('../../assets/rank.png')}/>
            </View>
            <Text>Batch</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllTeachers')}>
          <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            <View style={{backgroundColor:'white',borderRadius:17,height:90,width:90,alignContent:'center',justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,}}> 

            <Image source={require('../../assets/school.png')}/>
            </View>
            <Text>All Teachers</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-evenly',alignContent:'center',alignItems:'center'}}>
          <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            {/* <View style={{backgroundColor:'white',height:'90',width:'90'}}>
                <Image source={require('../../assets/rank.png')}/>

            </View> */}
            <View style={{backgroundColor:'white',borderRadius:17,height:90,width:90,alignContent:'center',justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,}}> 
            
            <Image source={require('../../assets/badge.png')}/>
            </View>
            <Text>Star Student</Text>
          </View>
          

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('AllStudent')}>

          
          
          <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            {/* <View style={{backgroundColor:'white',height:'90',width:'90'}}>
                <Image source={require('../../assets/rank.png')}/>

            </View> */}
            <View style={{backgroundColor:'white',borderRadius:17,height:90,width:90,alignContent:'center',justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,}}> 
            
            <Image source={require('../../assets/boy.png')}/>
            </View>
            <Text>All students</Text>
          </View>
          
          </TouchableOpacity>
          

        </View>
        <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
            {/* <View style={{backgroundColor:'white',height:'90',width:'90'}}>
                <Image source={require('../../assets/rank.png')}/>

            </View> */}
            <View style={{backgroundColor:'white',borderRadius:17,height:90,width:234,alignContent:'center',justifyContent:'center',alignItems:'center',shadowColor: "#000",shadowOffset: {width: 0,height: 4,},shadowOpacity: 0.32,shadowRadius: 5.46,elevation: 9,}}> 
            
            <Image source={require('../../assets/forum.png')}/>
            </View>
            <Text>Forum</Text>
          </View>
      </View>
    );
  }
}

export default Home;
