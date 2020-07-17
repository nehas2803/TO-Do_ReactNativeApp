import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Touchable,
    TouchableOpacity} 
from 'react-native';

export default function GoalList(props) {
    return( 
       <TouchableOpacity onPress={props.onDelete}>
    <View style={styles.list}>
        <Text>{props.title}</Text></View>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    list:{
        padding:10,
        backgroundColor:"grey",
        borderColor:'black',
        borderBottomWidth:1,
        marginVertical:10
      }
})