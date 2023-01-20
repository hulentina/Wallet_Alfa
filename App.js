import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './src/tabs/Feed'
import Profile from './src/tabs/Profile'
//import Notifications from './src/tabs/Notifications'
import NewPost from './src/tabs/NewPost'
import PostDetails from './src/stack/PostDetails.js'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  
} from 'react-native';
import { CardList } from 'react-native-card-list';


const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

export default class App extends Component<{}> {
  FeedStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
          headerTintColor: '#e3041b',
          headerTitleAllowFontScaling: 'bold',
          backgroundColor: 'yellow',
          //style: { backgroundColor: 'orange'}
          headerStyle: {
            backgroundColor: '#e4e7ec',
          },
          
        }}>
            <Stack.Screen name="MAIN" component={Feed} />
            <Stack.Screen name="My Cards" component={PostDetails} />
        </Stack.Navigator>
    )
}
  render() {
    return (
      <NavigationContainer>
            <Tabs.Navigator
            screenOptions={{
              tabBarActiveTintColor: 'black',
              backgroundColor: 'yellow',
              //style: { backgroundColor: 'orange'}
              tabBarStyle: {
                backgroundColor: '#e4e7ec',
              },
              
            }}>
                <Tabs.Screen name='Alpha-Wallet' children={this.FeedStack}/>
            </Tabs.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabs: {
    backgroundColor: '#e4e7ec',
  }
});
