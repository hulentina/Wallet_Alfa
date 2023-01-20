import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    Platform,
    SafeAreaView, 
    View, 
    Text,
    StyleSheet
} from 'react-native';

import { CardList } from 'react-native-card-list';

const cards = [
    {
      id: "0",
      title: "Starry Night",
      picture: require('../../assets/starry.jpg'),
      content: <Text>Starry Night</Text>
    },
    {
      id: "1",
      title: "Wheat Field",
      picture: require('../../assets/wheat.jpg'),
      content: <Text>Wheat Field with Cypresses</Text>
    },
    {
      id: "2",
      title: "Bedroom in Arles",
      picture: require('../../assets/bed.jpg'),
      content: <Text>Bedroom in Arles</Text>
    }
  ]

  export default class PostDetails extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
          <CardList cards={cards} />
        </View>
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