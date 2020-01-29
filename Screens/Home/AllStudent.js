import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import axios from 'axios'
import Config from 'react-native-config'
import { ScrollView } from 'react-native-gesture-handler';
class AllStudents extends Component {
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
        name:'',
        color1:'white',
        ui:[],
        tid:''
    };
  }

  handleInvite(){
    let auth_key=this.props.screenProps.auth_key
    let url=Config.BASE_URL+'/institutes-add-students/'
    let arr=[]
    let arr2=[]
    let str=`[${this.state.search}]`
    arr.push(this.state.search)
    arr2.push(this.state.name)
    axios.get(url,{
        params:{
            auth_key:auth_key,
            username:`["${this.state.search}"]`,
            name:`["${this.state.name}"]`
        }
    }).then((response)=>{
        if(response.data)
        {
          this.setState({search:'',name:''})
          this.callapi()
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
    let url=Config.BASE_URL+'/institutes-all-students/' //username,password,institute_name,institute_phone,institute_address
    axios.get(url,{
      params:{
        auth_key:auth_key,
      
     
      }
      
    }).then((response)=>{
      if(response.data.students.length==0)
      {
        alert('no teachers')
        
      }
      else
      {
          for(let i=0;i<response.data.students.length;i++)
          {
            arr.push(
                <View style={{backgroundColor:'white',alignSelf:'center',marginTop:25,flexDirection:'row',width:340,height:124,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                <View style={{margin:30}}>
                  {/* <Text style={{fontWeight:'bold'}}>10:00AM</Text> */}
            <Text>{`Name: ${response.data.students[i].student__student_name}`}</Text>
                  <Text>{`Phone Number :${response.data.students[i].student__student_phone==''?'N/A':response.data.students[i].student__student_phone}`}</Text>
                  <Text>{`Email :${response.data.students[i].student__auth_id_id__username}`}</Text>
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
            tid.push(response.data.students[i].student)
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
        placeholder="Type Students Email ..."
        onChangeText={(search)=>this.setState({search:search})}
        value={this.state.search}
        lightTheme={true}
        round={true}
        showCancel={false}
        cancelIcon={false}
        searchIcon={false}
      />
      <SearchBar
        placeholder="Type Students Name ..."
        onChangeText={(search)=>this.setState({name:search})}
        value={this.state.name}
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
        <Text style={{color:'white',alignSelf:'center'}}>ADD</Text>
        </View>
    </TouchableOpacity>
      </View>
      <ScrollView>
      {this.state.ui}
      </ScrollView>
      </View>
    );
  }
}

export default AllStudents;
