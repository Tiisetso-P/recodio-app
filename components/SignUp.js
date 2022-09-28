import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput,TouchableOpacity } from 'react-native';

 

export default function SignUp({ navigation }) {

  const homepage = (()=>{
     navigation.navigate('home')

  });
  return (
    <View style={styles.container}>
<Image style={styles.tinyLogo}
        source={require('../Recodio2.png')}
      /><br></br><br></br>
       <TextInput  placeholder="Name"   style={styles.input}/><br></br>
       <TextInput  placeholder="Email"   style={styles.input}/><br></br>
       <TextInput  placeholder="Password"   style={styles.input}/><br></br>
      <TouchableOpacity style = {styles.btn}  onPress={homepage}>
      <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },

  input :{
    width: 200,
    height:40,
    backgroundColor:"white"
  }
});