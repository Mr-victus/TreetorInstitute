import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class Attendance extends Component {
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
        color1:'white',
        color2:'white'
    };
  }

  render() {
    return (
      <View style={{alignContent:'center',alignItems:'center',justifyContent: 'space-evenly',}}>
        <Text style={{fontWeight:'bold',marginTop:20}}> Attendance </Text>
        <Text style={{fontWeight:'normal',marginTop:20}}> Check Those Who were present </Text>
        <TouchableOpacity onPress={()=>this.setState({color1:this.state.color1==='white'?'#6EF31A':'white'})} style={{height:29,width:265,backgroundColor:this.state.color1,shadowColor: "#000",alignContent:'flex-start',justifyContent:'center',alignItems:'flex-start',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>
            <Text style={{color:this.state.color1==='white'?'black':'white',marginLeft:20}}>
                1. Honey Singh
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({color2:this.state.color2==='white'?'#6EF31A':'white'})} style={{height:29,width:265,backgroundColor:this.state.color2,shadowColor: "#000",alignContent:'flex-start',justifyContent:'center',alignItems:'flex-start',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>
            <Text style={{color:this.state.color2==='white'?'black':'white',marginLeft:20}}>
                2. Raftaar
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Review')} style={{height:29,width:265,backgroundColor:'#6EF31A',shadowColor: "#000",alignContent:'flex-start',justifyContent:'center',alignItems:'flex-start',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>
            <Text style={{color:'white',alignSelf:'center'}}>
                Next
            </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default Attendance;
