import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import SearchPage from "../Pages/searchPage";
import NotificationsPage from "../Pages/notificationsPage";
import ChatsPage from "../Pages/Chat/chatsPage";
import AddPostPage from "../Pages/addpostPage";


function BottomSection(props) {
    const {navigation} = props;
    const {currentFunctionValue} = props;

    let filledImage = null;
    let currentFunction = null;

    switch (currentFunctionValue) {
        case SearchPage:
            currentFunction = SearchPage;
            filledImage = require('../../assets/Search-icon_Filled.png');
            break;
        case NotificationsPage:
            currentFunction = NotificationsPage;
            filledImage = require('../../assets/Notifications-icon_Filled.png');
            break;
        case ChatsPage:
            currentFunction = ChatsPage;
            filledImage = require('../../assets/Chat-icon_Filled.png');
            break;
        case AddPostPage:
            currentFunction = AddPostPage;
            filledImage = require('../../assets/addCircle-icon_Filled.png');
            break;
        default:
            currentFunction = null;
            break;
    }

    return (
        // <View style={props.style}>
        <View style={[styles.bottomSection, props.style]}>
            <TouchableOpacity style={styles.searchIconHolder}
                              onPress={() => navigation.navigate(SearchPage)}>
                <Image
                    source={(currentFunction !== SearchPage) ? require('../../assets/Search-icon.png') : filledImage}
                    style={styles.searchIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationIconHolder}
                              onPress={() => navigation.navigate(NotificationsPage)}>
                <Image
                    source={(currentFunction !== NotificationsPage) ? require('../../assets/Notifications-icon.png') : filledImage}
                    style={styles.notificationIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileIconHolder}>
                <Image source={require("../../assets/Logo.png")}
                       style={styles.profileIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chatIconHolder}
                              onPress={() => navigation.navigate(ChatsPage)}>
                <Image source={(currentFunction !== ChatsPage) ? require('../../assets/Chat-icon.png') : filledImage}
                       style={styles.chatIcon}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.addIconHolder}
                              onPress={() => navigation.navigate(AddPostPage)}>
                <Image
                    source={(currentFunction !== AddPostPage) ? require('../../assets/addCircle-icon.png') : filledImage}
                    style={styles.addIcon}
                />
            </TouchableOpacity>
        </View>
        // </View>
    );
}


const styles = StyleSheet.create({
    bottomSection: {
        height: '11.25%',
        flexDirection: 'row',

        backgroundColor: 'white',

        borderTopWidth: 5,
        borderRadius: 3,
        borderColor: '#660032',

        marginHorizontal: 9,
    },

    searchIconHolder: {
        flex: 1,

        borderWidth: 3,
        borderColor: 'white',
        // borderRadius: 99,

        marginBottom: 5,
    },
    searchIcon: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },

    notificationIconHolder: {
        flex: 1,

        borderWidth: 3,
        borderColor: 'white',
        // borderRadius: 99,

        marginBottom: 5,
    },
    notificationIcon: { // here
        height: '100%',
        width: '85%',
        resizeMode: 'stretch',
        marginLeft: 6,
    },

    profileIconHolder: {
        flex: 1,

        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 99,

        marginTop: 2,
        marginBottom: 5,
    },
    profileIcon: {
        height: '89%',
        width: '59%',
        alignSelf: 'center',

        marginTop: 4,
        marginLeft: 4,
        // justifyContent: 'center',
    },

    chatIconHolder: {
        flex: 1,

        borderWidth: 3,
        borderColor: 'white',
        // borderRadius: 99,

        marginTop: 5,
        marginLeft: 5,
        marginBottom: 5,
    },
    chatIcon: { // here
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },

    addIconHolder: {
        flex: 1,

        borderWidth: 3,
        borderColor: 'white',
        // borderRadius: 99,

        marginBottom: 5,
    },
    addIcon: { // little here
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
    },
});

export default BottomSection;
