import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import BottomSection from '../Classes/bottomSection'
import chats from "../data/chats";
import users from "../data/users";
import HeaderSection from "../Classes/headerSection";

const ChatsPage = ({navigation}) => {
    let _chats = [];

    for (let i = 0; i < chats.length; i++) {
        let chat = chats[i];
        _chats.push(
            <View style={styles.chat}>
                <View style={styles.profileImageHolder}>
                    <Image style={styles.profileImage} source={users.user[i].profileImage}/>
                </View>
                <View style={{flex: 3}}>
                    <View style={styles.head}>
                        <Text style={{
                            flex: 1,
                            fontSize: 17,
                            color: '#660032',
                            alignSelf: 'flex-start',
                        }}>{users.user[i].name}</Text>
                        <Image style={{
                            height: 25,
                            resizeMode: 'contain',
                            alignSelf: 'flex-end',
                            overflow: 'visible',
                        }} source={require('../../assets/threeDots.png')}/>
                    </View>
                    <View style={styles.lastSeen}>
                        <Text style={{alignSelf: 'flex-end', color: '#660032'}}>Last Seen {chat.lastSeen} ago</Text>
                    </View>
                    <View style={styles.preText}>
                        <Text style={{color: '#660032'}}>Hi this post's image is wha...</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <HeaderSection isSearchBar={true}
                           navigation={navigation}
                           style={{marginBottom: 28}}
                           searchBarStyle={{borderTopWidth: 0,borderRightWidth: 0,borderLeftWidth: 0,}}/>

            <View style={styles.chatsSection}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {_chats}
                    {_chats}
                    {_chats}
                    {_chats}
                    {_chats}
                    {_chats}
                    {_chats}
                </ScrollView>
            </View>

            <BottomSection navigation={navigation} style={{flex: 1}} currentFunctionValue={ChatsPage} />
        </View>
    );
}

function getHeight(num) {
    // counterH += 1;
    // console.warn("From Height: " + counterH)
    num = parseInt(num);
    return (num / 100) * Dimensions.get('window').height;
}

function getWidth(num) {
    // counterW += 1;
    // console.warn(Dimensions.get('window').width)
    num = parseInt(num);
    return (num / 100) * Dimensions.get('window').width;
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerSection: {
        flex: 2,
        borderColor: 'red',
    },
    iconHolder: {
        marginTop: 15,
        marginLeft: 15,
    },
    iconBack: {
        height: 32,
        width: 32,
    },
    curveLine: {
        flex: 1,
        position: 'absolute',
        height: 460,
        width: 800,
        resizeMode: 'stretch',

        alignSelf: 'center',
        marginTop: -350,
        // marginHorizontal: -100,
    },
    circleShape: {
        // position: 'absolute',
        height: 70,
        width: 70,

        borderWidth: 2,
        borderRadius: 99,
        borderColor: 'white',
        overflow: 'hidden',

        marginTop: 20,
        marginLeft: 30,
    },

    myPicture: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },

    logoHolder: {
        // flex: 1,
        height: 75,
        width: 75,
        alignSelf: 'center',

        borderWidth: 3,
        borderColor: '#660032',
        borderRadius: 99,

        marginTop: -40,
        marginLeft: 0,
    },
    imageLogo: {
        height: '85%',
        width: '55%',
        alignSelf: 'center',

        marginTop: 6,
        marginLeft: 4,
        // justifyContent: 'center',
    },

    homeIconHolder: {
        position: 'absolute',

        marginTop: 20,
        marginLeft: 300,
    },
    homeIcon: {
        height: 40,
        width: 36,

    },
    menuIconHolder: {
        position: 'absolute',

        marginTop: 50,
        marginLeft: 360,
    },
    menuIcon: {
        height: 30,
        width: 30,

    },

    searchBar: {
        flexDirection: 'row',
        backgroundColor: 'white',

        borderBottomWidth: 2,
        borderRadius: 8,
        borderColor: '#660032',


        paddingLeft: 5,
        marginTop: 15,
        marginHorizontal: 90,
    },
    searchBarIcon: {
        height: '100%',
        width: '12%',
    },
    searchBarText: {
        marginLeft: 5,
        textAlign: 'left',
    },

    chatsSection: {
        flex: 6,
        backgroundColor: 'white',
        // borderWidth: 2,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    chat: {
        flexDirection: 'row',
        height: getHeight('12'),
        borderTopWidth: 2,
        borderColor: '#660032',

        paddingLeft: 17,
        paddingVertical: 10,
        marginTop: 5,
    },
    profileImageHolder: {
        flex: 1,
        // backgroundColor: 'red',
    },
    profileImage: {
        resizeMode: 'contain',
        height: '100%',
        width: '100%',
    },
    head: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'green',
    },
    lastSeen: {
        flex: 1,
        // backgroundColor: 'pink',

        paddingRight: 25,
    },
    preText: {
        flex: 1,
        // backgroundColor: 'blue',
    },
});

export default ChatsPage;
