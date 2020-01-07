import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-elements';

class AllTeachers extends Component {
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
        search:'',
        color1:'white',
    };
  }

  render() {
    return (
        <View style={{flex:1}} >

       
      <View >
        <SearchBar
        placeholder="Type Teachers Email ..."
        onChangeText={(search)=>this.setState({search:search})}
        value={this.state.search}
        lightTheme={true}
        round={true}
        showCancel={false}
        cancelIcon={false}
        searchIcon={false}
      />
      <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('BottomTabNavigator')
              }}>
        <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginVertical:20,marginBottom:10}}>
        <Text style={{color:'white',alignSelf:'center'}}>INVITE</Text>
        </View>
    </TouchableOpacity>
      </View>

      <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                    <View style={{margin:30}}>
                      {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
                      <Text>Name :A J Loren</Text>
                      <Text>{'Phone Number :9876543210'}</Text>
                      <Text>Email :ajloren@gmail.com</Text>
                    </View>
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}} >
                    <Avatar
                        size="large"
                        rounded
                        title="AJ"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    </View>
                </View>

                <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                    <View style={{margin:30}}>
                      {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
                      <Text>Name :A J Loren</Text>
                      <Text>{'Phone Number :9876543210'}</Text>
                      <Text>Email :ajloren@gmail.com</Text>
                    </View>
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}} >
                    <Avatar
                        size="large"
                        rounded
                        title="AJ"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    </View>
                </View>
                <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                    <View style={{margin:30}}>
                      {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
                      <Text>Name :A J Loren</Text>
                      <Text>{'Phone Number :9876543210'}</Text>
                      <Text>Email :ajloren@gmail.com</Text>
                    </View>
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}} >
                    <Avatar
                        size="large"
                        rounded
                        title="AJ"
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                    />
                    </View>
                </View>
      </View>
    );
  }
}

export default AllTeachers;
