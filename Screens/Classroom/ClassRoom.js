import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import CalendarStrip from "react-native-calendar-strip";
import { ScrollView,  } from "react-native-gesture-handler";
class ClassRoom extends Component {

  static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{backgroundColor:'#fafafa',height:'100%'}}>
          <CalendarStrip
                    calendarAnimation={{type: 'sequence', duration: 30}}
                    daySelectionAnimation={{type: 'background', duration: 300, highlightColor: '#fff'}}
                    style={{height:100, paddingTop: 20, paddingBottom: 10}}
                    calendarHeaderStyle={{color: 'white'}}
                    calendarColor={'#55D511'}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    iconLeft={require('../../assets/left-arrow.png')}
                    iconRight={require('../../assets/right-arrow.png')}
                    onDateSelected={(date)=>console.log(date)}
                    iconContainer={{flex: 0.1}}
                />
        <ScrollView style={{height:'100%'}}>

       
                

            {/* make this a Component */}
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
            {/* make this a Component */}

                {/* it is repeated (repeat the above component in a loop based on the data fetched from API) */}
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
                {/* it is repeated */}

                </ScrollView>
      </View>
      
    );
  }
}

export default ClassRoom;
