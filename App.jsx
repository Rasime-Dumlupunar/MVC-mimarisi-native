import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ListPostController from './src/screens/ListPost/ListPostController';
import AddPostController from './src/screens/AddPost/AddPostController';
import AppBar from './src/components/AppBar';

const App = () => {
  const [activePage, setActivePage] = useState('Gönderiler');
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppBar activePage={activePage} setActivePage={setActivePage} />
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="AddPost">
          <Stack.Screen name="ListPost" component={ListPostController} />
          <Stack.Screen name="AddPost" component={AddPostController} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
