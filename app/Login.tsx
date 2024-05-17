import React from "react";
import { Text, View,Button,TextInput,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      
      }}
    >
      <Text style={[styles.setColorBlue]}><b>LOG IN PANEL</b></Text>
       <View style={styles.button1} >
      
      <br></br>
      <Text>Username</Text>
      <TextInput
 style={{
 height: 40,
 borderColor: 'Black',
 borderWidth: 1,
 }}
 defaultValue=""
 />
   <Text>Password</Text>
      <TextInput
 style={{
 height: 40,
 borderColor: 'Black',
 borderWidth: 1,
 
 }}
 defaultValue=""
 secureTextEntry
 />
<br></br>
<Button title={"Login"} 
/>


</View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  button1: {
      marginBottom: 30,
      height:200,
      width:200,
  },
  button2: {
      backgroundColor: 'azure'
  },
  setColorBlue :{
    color: '#2196f3'
  }
})