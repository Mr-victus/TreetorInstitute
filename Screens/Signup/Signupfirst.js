import React, { Component } from 'react';
import { View, Text,Image,SafeAreaView,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import axios from 'axios'
import Config from 'react-native-config'
class Signupfirst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:'institute@gmail.com',
      password:'password',
      confirmpassword:'password',
      PhoneNumber:'8249619206',
      Address:'tat',
      Name:'institute',

    };
  }

  callapi(){
    console.log('jii',Config.BASE_URL)
    let url=Config.BASE_URL+'/institutes-signup/' //username,password,institute_name,institute_phone,institute_address
    axios.get(url,{
      params:{
        username:this.state.email,
      password:this.state.password,
      institute_name:this.state.Name,
      institute_phone:this.state.PhoneNumber,
      institute_address:this.state.Address
      }
      
    }).then((response)=>{
      if(response.data.status)
      {
        this.props.navigation.navigate('BottomNavigation',{auth_key:response.data.key})
        
      }
      else
      {
        alert('already exists')
      }
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  render() {
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
        <View style={{flex:1,justifyContent:'center',backgroundColor:'white'}}>
            <View style={{alignContent:'space-between'}} >
          <Image style={{alignSelf:'center',marginBottom:60}} source={require('../../assets/treetorlogo.png')}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' value={this.state.email} onChangeText={(text)=>this.setState({email:text})} />
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Password' textContentType='password' secureTextEntry={true}value={this.state.password} onChangeText={(text)=>this.setState({password:text})}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Confirm Password' textContentType='password' secureTextEntry={true} value={this.state.confirmpassword} onChangeText={(text)=>this.setState({confirmpassword:text})}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='PhoneNumber' textContentType={"telephoneNumber"} value={this.state.PhoneNumber}  onChangeText={(text)=>this.setState({PhoneNumber:text})}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Institute Name' value={this.state.Name} onChangeText={(text)=>this.setState({Name:text})}/>
          <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='Address' textContentType={"telephoneNumber"} value={this.state.Address} onChangeText={(text)=>this.setState({Address:text})} />
          <TouchableOpacity onPress={()=>{
                   //this.props.navigation.navigate('BottomTabNavigator')
                    console.log('hii')
                    this.callapi()
              }}>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50}}>
                    <Text style={{color:'white',alignSelf:'center'}}>NEXT</Text>
              </View>
              </TouchableOpacity>
      </View>
      </View>
      </SafeAreaView>
    );
  }
}

export default Signupfirst;
