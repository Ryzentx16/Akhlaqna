import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function InputBox(props) {
    const [message, setMessage] = useState('');
    const [myUserId, setMyUserId] = useState(null);

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={100}
            style={{width: '100%'}}
        >
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <TextInput
                        placeholder={"Type a message"}
                        style={styles.textInput}
                        multiline
                        value={message}
                        onChangeText={setMessage}
                    />
                    <Entypo name="location" size={24} color="grey" style={styles.icon}/>
                    {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
                </View>
                <TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <MaterialIcons name="send" size={28} color="white"/>
                    </View>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    mainContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 25,
        marginRight: 10,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        backgroundColor: "#660032",
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

const styles2 = StyleSheet.create({
    inputBoxContainer: {
        // flex: 1,
        minHeight: 50,
        maxHeight: 50,
        backgroundColor: 'red',
        // marginBottom: 10,
    },
    inputBox: {},
    input: {},
    sendAction: {
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: 'blue'
    }

});