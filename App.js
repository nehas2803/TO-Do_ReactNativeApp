import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, 
  View,FlatList, Button } 
from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
 
  const [totalGoals,SetTotalGoals] = useState([]);
  const [isVisible,SetVisibilty] = useState(false);

  
  const onDelete=(id)=>{
    SetTotalGoals(currentgoal=>{
      console.log(id)
      return currentgoal.filter((goal)=>goal.id !== id)
    })
  }
  const addGoalHandler = (enteredGoal)=>{
   
    SetTotalGoals(currentgoal=>[...currentgoal,{id:Math.random(100).toString(),value:enteredGoal}])
    SetVisibilty(false)
    //console.log(totalGoals);
   // totalGoals.length=0;
   
  }
  const cancelGoalHandle = ()=>{
   SetVisibilty(false)
   }

  return (
    <View style={styles.container}>
      <Button title='Add Goals for today' onPress={()=>SetVisibilty(true)}/>
    <GoalInput visible={isVisible} addGoalHandler={addGoalHandler} cancelGoalHandle={cancelGoalHandle}/>
  <View>
  <FlatList data={totalGoals}
  renderItem={(goals)=>{
    
    return(<GoalList onDelete={onDelete.bind(this,goals.item.id)} title={goals.item.value}/>)
  }
 }
  keyExtractor={(item,index)=>item.id}
  > 
   </FlatList></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   padding:50
  },
  containerChild:{
    flexDirection:'row',
    justifyContent:'space-between'  
  },
  textinput:{
    padding:5,
    width:200 ,
    borderWidth:1,
    borderColor:'black'
  },
  btn:{
    color:"#f194ff"
  },
  list:{
    padding:10,
    backgroundColor:"grey",
    borderColor:'black',
    borderBottomWidth:1,
    marginVertical:10
  }
});
