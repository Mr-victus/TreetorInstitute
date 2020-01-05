import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Dialog from "react-native-dialog";
class Review extends Component {

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
        color2:'white',
        starCount: 3.5,
        dialogVisible:false
    };
  }
  handleDelete(){
      
  }

  render() {
    return (
        <View style={{alignContent:'center',alignItems:'center',justifyContent: 'space-evenly',}}>
        <Text style={{fontWeight:'bold',marginTop:20}}> Review </Text>
        <Text style={{fontWeight:'normal',marginTop:20}}> Please rate the Students </Text>
        <TouchableOpacity onPress={()=>this.setState({color1:this.state.color1==='white'?'#6EF31A':'white'})} >
            <View style={{flexDirection:'row',height:29,width:265,backgroundColor:this.state.color1,shadowColor: "#000",alignContent:'flex-start',alignItems:'center',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>

           
            <Text style={{color:this.state.color1==='white'?'black':'white',marginLeft:20}}>
                2. Raftaar
            </Text>
            <View  style={{flexDirection:'row',alignItems:'flex-end',justifyContent: 'flex-end',alignContent: 'flex-end',}}>

           
            {/* <AirbnbRating
               
                count={5}
                reviews={["Terrible", "Bad", "Meh", "OK", "Good"]}
                defaultRating={4}
                size={10}
            /> */}
             </View>
            {/* <Rating showRating fractions="{1}" startingValue="{3.3}" /> */}
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.setState({color2:this.state.color2==='white'?'#6EF31A':'white'})} >
            <View style={{ flexDirection:'row',height:29,width:265,backgroundColor:this.state.color2,shadowColor: "#000",alignContent:'flex-start',alignItems:'center',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>

           
            <Text style={{color:this.state.color2==='white'?'black':'white',marginLeft:20}}>
                2. Raftaar
            </Text>
            {/* <Rating showRating fractions="{1}" startingValue="{3.3}" /> */}
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>this.setState({dialogVisible:true})} style={{height:29,width:265,backgroundColor:'#6EF31A',shadowColor: "#000",alignContent:'flex-start',justifyContent:'center',alignItems:'flex-start',marginTop:15,shadowOffset: {width: 0,height: 3,},shadowOpacity: 0.27,shadowRadius: 4.65,elevation: 6,}}>
            <Text style={{color:'white',alignSelf:'center'}}>
                Next
            </Text>
        </TouchableOpacity>
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>What will be Taught in Next Class</Dialog.Title>
          <Dialog.Input placeholder="Please mention what will be taught in next class" />
          <Dialog.Button label="Cancel" onPress={()=>this.setState({dialogVisible:false})} />
          <Dialog.Button label="Submit" onPress={()=>this.setState({dialogVisible:false})} />
        </Dialog.Container>
      </View>
    );
  }
}

export default Review;
