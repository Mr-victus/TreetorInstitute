import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { TextInput } from 'react-native-paper';
class Login extends Component {
  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      <View style={{flex:1,justifyContent:'center',backgroundColor:'white',marginVertical:100}}>
          <View style={{alignContent:'space-between'}} >
              {/* for treetor logo */}
              <Image style={{alignSelf:'center',marginBottom:60}} source={require('../assets/treetorlogo.png')}/>
              <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white',color:'black'}} label='email' />
              <TextInput style={{marginHorizontal:50,marginBottom:20,backgroundColor:'white'}} label='password'  selectionColor='#6EF31A' secureTextEntry={true} />
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Home')
              }}>
              <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View flexDirection='row' style={{backgroundColor:'#3B5998',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                  <Image style={{alignSelf:'center',marginLeft:10}} source={require('../assets/facebook.png')}/>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN WITH FACEBOOK</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <View style={{backgroundColor:'#DE4B39',height:40,justifyContent:'center',marginHorizontal:50,marginBottom:10}}>
                    <Text style={{color:'white',alignSelf:'center'}}>LOGIN WITH GOOGLE</Text>
              </View>
              </TouchableOpacity>

              <Text style={{color:'#6EF31A',alignSelf:'center'}} >Forgot Password?</Text>
              <Text style={{alignSelf:'center'}}>{"New to treetor?" }</Text>
              <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Signupfirst')
              }}>
              <Text  style={{color:'#6EF31A',alignSelf:'center'}}>Register</Text>
              </TouchableOpacity>
              
          </View>
         
          <View>
              {/* Buttons */}
          </View>
          <View>
              {/* forgot pass and shits */}
          </View>
       
      </View>
      </SafeAreaView>
    );
  }
}

export default Login;
