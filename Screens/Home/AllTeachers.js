import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import axios from 'axios'
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
        ui:[],
        tid:''
    };
  }

  handleInvite(){
    let auth_key=this.props.screenProps.auth_key
    let url='http://192.168.1.103:8000/institutes-invite-teacher/'

    axios.get(url,{
        params:{
            auth_key:auth_key,
            email:this.state.search
        }
    }).then((response)=>{
        if(response.data)
        {

        }
        else{
            alert('user does not exists')
        }
    })
  }
  callapi(){
    let auth_key=this.props.screenProps.auth_key
    console.log(auth_key)
    console.log('jii')
    let arr=[]
    let tid=[]
    let url='http://192.168.1.103:8000/institutes-all-teachers/' //username,password,institute_name,institute_phone,institute_address
    axios.get(url,{
      params:{
        auth_key:auth_key,
      
     
      }
      
    }).then((response)=>{
      if(response.data.teachers.length==0)
      {
        alert('no teachers')
        
      }
      else
      {
          for(let i=0;i<response.data.teachers.length;i++)
          {
            arr.push(
                <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                <View style={{margin:30}}>
                  {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
            <Text>{`Name: ${response.data.teachers[i].teacher__teacher_name}`}</Text>
                  <Text>{`Phone Number :${response.data.teachers[i].teacher__teacher_phone}`}</Text>
                  <Text>{`Email :${response.data.teachers[i].teacher__auth_id_id__username}`}</Text>
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
    
            )
            tid.push(response.data.teachers[i].teacher__teacher_id)
          }
          this.setState({ui:arr,tid:tid})
        
        //alert('already exists')
      }
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  

  render() {
      if(this.state.tid=='' && this.state.search=='')
      this.callapi()
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
                this.handleInvite()
                //this.props.navigation.navigate('BottomTabNavigator')
              }}>
        <View style={{backgroundColor:'#6EF31A',height:40,justifyContent:'center',marginHorizontal:50,marginVertical:20,marginBottom:10}}>
        <Text style={{color:'white',alignSelf:'center'}}>INVITE</Text>
        </View>
    </TouchableOpacity>
      </View>

      {this.state.ui}
      </View>
    );
  }
}

export default AllTeachers;
