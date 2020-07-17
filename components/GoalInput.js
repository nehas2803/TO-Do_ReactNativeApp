import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
    StyleSheet, 
    View,Button,
    TextInput,Modal } 
from 'react-native';

export default function GoalInput(props) {
  const [enteredGoal,SetGoals] = useState('');
  const setGoalHandler = (enteredText)=>{
    SetGoals(enteredText);
   
  }
  const addGoalHandler=()=>{
    props.addGoalHandler(enteredGoal)
    SetGoals('');
  }
  const cancelGoalHandle=()=>{
    props.cancelGoalHandle()
    SetGoals('');
  }
    return( 
     <Modal visible={props.visible} animationType='slide'>
        <View style={styles.containerChild}>
        <TextInput style={styles.textinput} 
        placeholder='course content' 
        onChangeText={setGoalHandler}
        value={enteredGoal}  />
        <View style={styles.btnContainor}>
        <Button  title='Cancel' color='red' onPress={cancelGoalHandle} />
        <Button  title='Add' onPress={addGoalHandler} />
        </View>
      
        </View>
        </Modal>)
}

const styles = StyleSheet.create({
    containerChild:{
      flex:1,
        alignItems:'center',
        justifyContent:'center',
    
      },
      textinput:{
        padding:5,
        width:'80%',
        borderWidth:1,
        borderColor:'black',
        marginRight:2,
        marginBottom:10
        
      },
      btn:{
        color:"#f194ff",
      
      },
      btnContainor:{
        flexDirection:'row',
        width:'60%',
        justifyContent:'space-between',
      }
})