import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Login from './components/login/'
import Profile from './components/profile/'
import Account from './components/account/'
import Balance from './components/balance/'
import Register from './components/registration/'
import Products from './components/product/'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  let stack = createStackNavigator();
  let Tabs = createBottomTabNavigator();
  let profilestack = createDrawerNavigator();

  const Signout = ()=>(
    <profilestack.Navigator>
      <profilestack.Screen name="Account" component={TabsList}/>
      <profilestack.Screen name="Products" component={Products}/>
      <profilestack.Screen name="Sign Out" component={Login}/>
    </profilestack.Navigator>
  )

  const TabsList = () => (
    <Tabs.Navigator>
      <Tabs.Screen name="Account" component={Account} options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Icon name="university" color="midnightblue" size={30} />
        ),
      }} />
      <Tabs.Screen name="Balance" component={Balance} options={{

        tabBarLabel: 'Balance',
        tabBarIcon: ({ color, size }) => (
          <Icon name="money" color="midnightblue" size={30} />
        ),
      }} />
      <Tabs.Screen name="Products" component={Products} options={{

        tabBarLabel: 'Products',
        tabBarIcon: ({ color, size }) => (
          <Icon name="book" color="midnightblue" size={30} />
        ),
      }} />
    </Tabs.Navigator>
  )

  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <stack.Screen name="Login" component={Login} />
        <stack.Screen name="Home" component={Signout} />
        <stack.Screen name="Register" component={Register} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
