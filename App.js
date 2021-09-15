import React, { useState } from 'react';
import { Button, View, Text,Image,StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as chrono from 'chrono-node';


const styles = StyleSheet.create({
   
  stretch: {
    width: 300,
    margin:5,
    padding:5,
    height: 150,
    resizeMode: 'stretch',
  },
});
 
function HomeScreen({ navigation }) {
   const [text, setText] = useState('');
  const [input, setInput] = useState('');
    
  const parsers= ()=>  {
    const value = chrono.parse(input);
    console.log('value = ' + value[0].start.date());
    var val = value[0].start.date();
    var array = val.toUTCString();
  
   setText(array);
   console.log(text);
  } 
  return (
    
    <View style={{padding: 10}}>
      <TextInput 
      onChangeText = {setInput}
      />
      
      <Button title='update' onPress= {                                                                                             
        () => parsers()                                                                                                                                                                                                                                     
      } 
        />
 

    <Text>{text}</Text>
    <Text>  </Text>


    <Text>  </Text>
   
    </View>
  );
}
 function DetailsScreen({ navigation, route }) {
    React.useEffect(() => {
      if (route.params?.text) {

}
    }, [route.params?.text]);
  
  return (
    <View>
     <Text> {route.params?.text}</Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Back" component={DetailsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
