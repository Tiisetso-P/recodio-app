import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login  from './components/login';
import SignUp from './components/SignUp';
import HomeScreen from './components/Home';
 
 





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="login" component={Login} />
       <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={HomeScreen} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




