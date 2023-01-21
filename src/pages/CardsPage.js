import 'react-native-gesture-handler'
import React, {Component} from 'react'
// import * as Location from 'expo-location'
import {Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import {CardList} from 'react-native-card-list'

import * as SQLite from 'expo-sqlite'
import Barcode from "@kichiyaki/react-native-barcode-generator"
import * as FileSystem from 'expo-file-system'

const db = SQLite.openDatabase('db.testDb') // returns Database object

async function nearby(lat_1, lon_1) {
    console.log(await Asset.loadAsync(require('../../assets/csvjson.json')))//, 'utf8', (err, jsonString) => {
    //     if (err) {
    //         console.log("File read failed:", err)
    //     }
    //     const data = JSON.parse(jsonString);
    //     const res = [['', 100000], ['', 100000], ['', 100000], ['', 100000], ['', 100000]];
    //     for (let i = 0; i < data.length; i++) {
    //         const distance = Math.sqrt((lat_1 - data[i].lat) ** 2 + (lon_1 - data[i].lon) ** 2);
    //         for (let i_1 = 0; i_1 < res.length; i_1++) {
    //             if (distance <= res[i_1][1]) {
    //                 for (let i_2 = i_1; i_2 < res.length - 1; i_2++) {
    //                     res[i_2] = res[i_2 + 1]
    //                 }
    //                 res[i_1] = [data[i].name, distance]
    //                 i_1 = 5
    //             }
    //         }
    //     }
    //     console.log(res)
    //     return res;
    // })
}


const cards = [
    {
        id: "0",
        title: "Sty Night",
        picture: require('../../assets/starry.jpg'),
        // Тут не получилось сделать баркод(  поэтому простоместо для изображения)
        content: <View>
            <Barcode value="Hello World" format="CODE128" text='Hello World' width={1.5}/>
            <TouchableOpacity>
                <Text>Remove card</Text>
            </TouchableOpacity>
        </View>
    },
    {
        id: "1",
        title: "Wheat Field",
        picture: require('../../assets/wheat.jpg'),
        // Тут не получилось сделать баркод(  поэтому простоместо для изображения)
        content: <Barcode value="Hello World" format="CODE128" text='Hello World' width={1.5}/>
    },
    {
        id: "2",
        title: "Bedroom in Arles",
        picture: require('../../assets/bed.jpg'),
        // Тут не получилось сделать баркод(  поэтому простоместо для изображения)
        content: <Barcode value="Hello World" format="CODE128" text='Hello World' width={1.5}/>

    }
]

export default class CardsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            location: null,
            setLocation: null,
            setErrorMsg: null,
            errorMsg: null,
            text: null,
        }
    //     this.state.text = 'Waiting..'
    //     this.getLocation().then((location) => {
    //         if (this.state.errorMsg) {
    //             this.state.text = this.state.errorMsg
    //         } else if (this.state.location == null) {
    //             this.state.text = JSON.stringify(location)
    //         }
    //         nearby(1, 2)
    //         this.forceUpdate()
    //     })
    }


    // hide show modal
    displayModal(show){
        this.setState({isVisible: show})
    }

    // async getLocation() {
    //     let {status} = await Location.requestForegroundPermissionsAsync()
    //     if (status !== 'granted') {
    //         this.state.setErrorMsg = 'Permission to access location was denied'
    //         return
    //     }

    //     return await Location.getCurrentPositionAsync()
    // }


    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.')
                    }} style={styles.modal}>
                    <View style={styles.container}>
                        <Text style={styles.header}>
                            Add new card</Text>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Card name"
                                placeholderTextColor="#003f5c"
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <View style={styles.inputView}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="Card number"
                                placeholderTextColor="#003f5c"
                                onChangeText={(email) => setEmail(email)}
                            />
                        </View>
                        <TouchableOpacity style={styles.loginBtn} onPress={() => {
                            this.displayModal(false)
                        }}>
                            <Text style={styles.loginText}>Add</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeBtn} onPress={() => {
                            this.displayModal(false)
                        }}>
                            <Text style={styles.loginText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.loginBtn} onPress={() => {
                    this.displayModal(true)
                }}>
                    <Text style={styles.loginText}>Add</Text>
                </TouchableOpacity>
                <CardList cards={cards}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    loginBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#e3041b",
        marginBottom: 20,
        //position: 'absolute'
    },
    closeBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "gray",
        marginBottom: 20,
        //position: 'absolute'
    },
    loginText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    remBtn: {
        width: "30%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#e3041b",
        marginBottom: 20,
        //position: 'absolute'
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        padding: 40,
    },
    header: {
        fontSize: 30,
        marginBottom: 30,
        padding: 40,
    },
    TextInput: {
        height: 50,
        padding: 10,
        marginLeft: 20,
        fontSize: 24,
        flex: 1,
    },
    inputView: {
        backgroundColor: "#e4e7ec",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})