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
  View
} from 'react-native';
import { CardList } from 'react-native-card-list';


const Tabs = createBottomTabNavigator()
const Stack = createStackNavigator()

export default class App extends Component<{}> {
  FeedStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Feed} />
            <Stack.Screen name="My Cards" component={PostDetails} />
        </Stack.Navigator>
    )
}
  render() {
    return (
      <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name='Cards' children={this.FeedStack} />
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
});