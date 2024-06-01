import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import TaskScreen from './Taskscreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: '',
            headerTitleAlign: 'left',
            headerTitleStyle: {
              marginLeft: -20, // Adjust this value as needed to align the title as per your requirement
            }
          }}
        />
        <Stack.Screen
          name="Task"
          component={TaskScreen}
          options={{ title: 'Task Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}