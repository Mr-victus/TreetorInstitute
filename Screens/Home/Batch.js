import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

class Batch extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text:""
    };
  }

  render() {
    return (
      <View style={{flex:1,alignContent:'center',justifyContent:'center'}}>
        <TextInput
        mode='outlined'
        label='Batch Name'
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        theme={{ colors: { primary: "#6EF31A" }}}
      />

      <TextInput
        mode="outlined"
        label='Number of periods'
        keyboardType='numeric'
        theme={{ colors: { primary: "#6EF31A" }}}
      />

        <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('BatchCreation')
              }}>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10,marginTop:20}}>
                    <Text style={{color:'white',alignSelf:'center'}}>NEXT</Text>
              </View>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Batch;
