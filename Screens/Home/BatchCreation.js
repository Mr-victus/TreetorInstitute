import React, { Component } from 'react';
import { View, Text,TouchableOpacity ,ScrollView} from 'react-native';
import { TextInput } from 'react-native-paper';
import SearchableDropdown from 'react-native-searchable-dropdown';
// import { ScrollView } from 'react-native-gesture-handler';

class BatchCreation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchName:'',
      periods:0,
      startTime:[],
      endTime:[],
      finalObj:{},
      teachers: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ],
      subjects: [
        {
          id: 7,
          name: 'Go',
        },
        {
          id: 8,
          name: 'Swift',
        }
      ],
      day:0,
      weekDay:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    };
  }

  renderLeftBtn(){

    return(
    <TouchableOpacity onPress={()=>
      {
        if(this.state.day!=0)
      {
        this.setState({day:this.state.day-1})
      }
      
    }}>
    <Text style={{color:'#6EF31A',fontSize:30}}>
       {"<"}
    </Text>
    </TouchableOpacity>)
  }
  renderRightBtn(){
    let obj=this.state.finalObj
    return(<TouchableOpacity onPress={()=>{
      let day=this.state.day
      console.log(this.state.weekDay[day])
      if(this.state.day!=6)
      {
        let obj2={}
        for(let i=0;i<this.state.periods;i++)
        {
          let temp={"subject":this.state.subjects[i].id,"teacher":this.state.teachers[i].id,"start":this.state.startTime[i],"end":this.state.endTime[i]}
          if(obj[this.state.weekDay[day]]==undefined)
          {
            obj[this.state.weekDay[day]]={}
          }
          
          obj[this.state.weekDay[day]][i.toString()]=temp
        }
        
        this.setState({day:this.state.day+1,finalObj:obj})
      }
      else{
        console.log(this.state.finalObj)
      }
      }}>
      <Text style={{color:'#6EF31A',fontSize:30}}>
         {">"}
      </Text>
      </TouchableOpacity>)
  }

  renderPeriod()
  {

    var items = [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'Java',
      },
      {
        id: 3,
        name: 'Ruby',
      },
      {
        id: 4,
        name: 'React Native',
      },
      {
        id: 5,
        name: 'PHP',
      },
      {
        id: 6,
        name: 'Python',
      },
      {
        id: 7,
        name: 'Go',
      },
      {
        id: 8,
        name: 'Swift',
      },
    ];
    let arr=[]
    for(let i=0;i<this.state.periods;i++)
    {
      arr.push(<View style={{backgroundColor:'white',justifyContent:'space-around',alignSelf:'center',marginTop:25,width:150,height:250,shadowColor: "#000",shadowOffset: {width: 0,height: 7,},shadowOpacity: 0.43,shadowRadius: 9.51,elevation: 15,}}>
                    
      <SearchableDropdown
          onItemSelect={(item) => {
            const items = this.state.subjects;
            items.push(item)
            this.setState({ subjects: items });
          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const items = this.state.subjects.filter((sitem) => sitem.id !== item.id);
            this.setState({ subjects: items });
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 100 }}
          items={items}
          defaultIndex={2}
          resetValue={false}
          textInputProps={
            {
              placeholder: "placeholder",
              underlineColorAndroid: "transparent",
              style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  height:50
              },
              onTextChange: text => alert(text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
      />
      <SearchableDropdown
          onItemSelect={(item) => {
            const items = this.state.teachers;
            items.push(item)
            this.setState({ teachers: items });
          }}
          containerStyle={{ padding: 5 }}
          onRemoveItem={(item, index) => {
            const items = this.state.teachers.filter((sitem) => sitem.id !== item.id);
            this.setState({ teachers: items });
          }}
          itemStyle={{
            padding: 10,
            marginTop: 2,
            backgroundColor: '#ddd',
            borderColor: '#bbb',
            borderWidth: 1,
            borderRadius: 5,
          }}
          itemTextStyle={{ color: '#222' }}
          itemsContainerStyle={{ maxHeight: 100 }}
          items={items}
          defaultIndex={2}
          resetValue={false}
          textInputProps={
            {
              placeholder: "placeholder",
              underlineColorAndroid: "transparent",
              style: {
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 5,
                  height:50
              },
              onTextChange: text => alert(text)
            }
          }
          listProps={
            {
              nestedScrollEnabled: true,
            }
          }
      />
            <TextInput style={{backgroundColor:'white',color:'black',}} label='Start Time' value={this.state.startTime[i]} onChangeText={(text)=>{
              let temp=this.state.startTime
              temp[i]=text
              this.setState({startTime:temp})}} />
            <TextInput style={{backgroundColor:'white',color:'black'}} label='End Time' value={this.state.endTime[i]} onChangeText={(text)=>{
              let temp=this.state.endTime
              temp[i]=text
              this.setState({endTime:temp})
            }} />          
                  
                  
              </View>)
    }

    return arr
    
  }

  render() {

    if(this.state.batchName=='')
    {
      this.setState({batchName:this.props.navigation.state.params.batchName,periods:this.props.navigation.state.params.periods})
      
    }
    var items = [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'Java',
      },
      {
        id: 3,
        name: 'Ruby',
      },
      {
        id: 4,
        name: 'React Native',
      },
      {
        id: 5,
        name: 'PHP',
      },
      {
        id: 6,
        name: 'Python',
      },
      {
        id: 7,
        name: 'Go',
      },
      {
        id: 8,
        name: 'Swift',
      },
    ];
    return (
      
      <View>

      
      <View style={{flexDirection:'row',justifyContent:'space-around',alignContent:'center'}}>
        {this.renderLeftBtn()}
        <Text style={{color:'#6EF31A',fontSize:30}}> {this.state.weekDay[this.state.day]} </Text>
        {this.renderRightBtn()}
        </View>
        
       <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-around',marginBottom:30}}>
                {this.renderPeriod()}
                </View> 
                

      </View>
      
    );
  }
}

export default BatchCreation;
