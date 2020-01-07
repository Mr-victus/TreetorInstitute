import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';

class BatchCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderLeftBtn(){

    return(<Text style={{color:'#6EF31A',fontSize:30}}>
       {"<"}
    </Text>)
  }
  renderRightBtn(){

    return(<Text style={{color:'#6EF31A',fontSize:30}}>
       {">"}
    </Text>)
  }

  render() {
    return (
      <View>

      
      <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center'}}>
        {this.renderLeftBtn()}
        <Text style={{color:'#6EF31A',fontSize:30}}> Monday </Text>
        {this.renderRightBtn()}
        </View>
        <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                    <View style={{margin:10}}>
                      <Text style={{fontWeight:'bold'}}>10:00AM</Text>
                      <Text>Subject :Mathemtatics</Text>
                      <Text>{'Venue :Trident Academy of \n technology'}</Text>
                      <Text>Teach :Newton's 2nd Law</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Attendance')} style={{backgroundColor:'#55D511',height:42,width:137,borderRadius:4,alignContent:'center',alignItems:'center',justifyContent: 'center',alignSelf:'center'}}>
                    <View >
                      <Text style={{color:'white',fontWeight:'bold'}}>Attendance</Text>
                    </View>
                    </TouchableOpacity>
                </View>
      
      </View>
    );
  }
}

export default BatchCreation;
