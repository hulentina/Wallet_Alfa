import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';


import {
    SafeAreaView,
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions
 } from 'react-native';

export default function Feed(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const staticImage = require("../../assets/fon1.png");
    return (
        <SafeAreaView style = {styles.container}>
        <ImageBackground source={staticImage} style={styles.ImageBackground}>
            <StatusBar style="auto" />
        </ImageBackground>
        <Text style = {styles.Text}>AUTHORIZE</Text>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
        </View>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
        </View>
        <View>
        <Button
        title = "Go to Cards"
        onPress={() => props.navigation.navigate('My Cards')}
        />
        </View>
        <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
        </TouchableOpacity>
        </SafeAreaView>
    )
}
var width = Dimensions.get('window').width; 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    inputView: {
        backgroundColor: "#e4e7ec",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#e3041b",
        marginBottom: 20
      },
      loginText: {
        color: '#fff',
        fontWeight: 'bold'
      },
      ImageBackground: {
        flex: 1,
        resizeMode: "contain",
        aspectRatio: 1.5,  
        height: '80%',
        alignItems: "center",
        marginBottom: 0
      },
      Text: {
        color: '#303e49',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 40
      }
  });
