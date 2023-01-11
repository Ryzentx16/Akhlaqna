import React from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import ChatMessage from "./ChatMessage";
import chatRoomData from "../../data/chatRoomData";
import InputBox from "./inputBox";

export default function ChatRoom() {
    return (
        <View style={styles.container}>

            <FlatList data={chatRoomData.messages} renderItem={(item, index) => {
                return <ChatMessage message={item.item} myId={'u5'}/>;
            }} inverted/>

            <InputBox />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e5e5e5',
        // paddingBottom: 50,
    },

});