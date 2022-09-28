import * as React from 'react';
import { Text, SafeAreaView, View,  StyleSheet, Image, TextInput,TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
 

export default function Login({ navigation }) {
  
  
   const nextpage = (()=>{
     navigation.navigate('signup')

  });

    const homepage = (()=>{
     navigation.navigate('home')

  });



  
  return (
    <SafeAreaView>
         <View style={styles.container}>
            <Image style={styles.tinyLogo}source={require('../Recodio2.png')}/><br></br><br></br>
            <TextInput  placeholder="Email"   style={styles.input}/><br></br>
            <TextInput  placeholder="Password"   style={styles.input}/><br></br>
             <TouchableOpacity style = {styles.btn}   onPress={homepage}>
              <Text>Login</Text>
             </TouchableOpacity><br></br>
            <Button uppercase={false}>forgot password?</Button>
            <Button uppercase={false}  onPress={nextpage}>create account</Button>
           
           </View>
    </SafeAreaView>
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
    backgroundColor:"white",
    borderRadius: 20,
  },
  btn: {
  borderRadius:30, 
  width:170,
  height:40,
  backgroundColor:"white",
  marginTop:20,
  marginLeft:10,
  paddingLeft:70,
  paddingTop:10,

}
});

            
            

        