import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Chat() {
    return (
        <View style={styles.container}>
            <View style={styles.headerSection}>
                <View>
                    <TouchableOpacity style={styles.iconHolder} onPress={() => navigation.goBack()}>
                        <Image source={require("../../assets/Icon_arrow_back.png")} style={styles.iconBack}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.curveLine}
                           source={require('../../assets/circleHeader.png')}
                    />
                </View>
                <View style={styles.profileImageHolder}>
                    <Image source={require("../../assets/profile_1.png")}
                           style={styles.profileImage}
                    />
                </View>
                <View style={styles.menuIconHolder}>
                    <Image source={require("../../assets/threeDots.png")}
                           style={styles.menuIcon}
                    />
                </View>
                <View style={{alignItems: 'center', marginTop: 16}}>
                    <Text style={{fontSize: 24, color: '#660032'}}>John .M</Text>
                    <Text style={{fontSize: 12, color: '#660032'}}>Online</Text>
                </View>
                {/*<TouchableOpacity style={styles.homeIconHolder} onPress={() => navigation.navigate(PostsPage)}>
                    <Image source={require("../../assets/Icon_home.png")}
                           style={styles.homeIcon}
                    />
                </TouchableOpacity>*/}

            </View>
            <View style={styles.chatSection}>
                <Text style={{color: 'red', fontSize: 36, alignSelf: 'center'}}>MISSING LOGIC</Text>
                <View style={styles.chat}>
                    <View style={styles.incomeMessage}>

                    </View>{/*
                    <View style={styles.outcomeMessage}>

                    </View>*/}
                </View>
            </View>
            <View style={styles.chatFonter}>
                <View style={[styles.chatIconHolder, {flex: 1.5, backgroundColor: 'white'}]}>
                    <Image style={styles.facesIcon} source={require('../../assets/Icon_faces.png')}/>
                </View>
                <View style={{flex: 4}}>
                    <View style={styles.textInputHolder}>
                        <TextInput style={{color: '#660032'}} placeholder={"message"}
                                   placeholderTextColor={"rgba(102,0,50,0.76)"}/>
                    </View>
                </View>
                <View style={[styles.chatIconHolder, {flex: 1, backgroundColor: 'white'}]}>
                    <Image style={styles.libraryIcon} source={require('../../assets/Icon_library.png')}/>
                </View>
                <View style={[styles.chatIconHolder, {flex: 1, backgroundColor: 'white'}]}>
                    <Image style={styles.voiceIcon} source={require('../../assets/Icon_voice.png')}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    headerSection: {
        flex: 0,
        borderColor: 'red',

        marginBottom: 33,
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

    profileImageHolder: {
        // flex: 1,
        height: 75,
        width: 75,
        alignSelf: 'center',

        borderWidth: 0,
        borderColor: '#660032',
        borderRadius: 99,

        marginTop: -40,
        marginLeft: 0,
    },
    profileImage: {
        height: '100%',
        width: '100%',
    },

    menuIconHolder: {
        alignSelf: 'flex-end',

        marginRight: 18,
        marginTop: -65,
    },
    menuIcon: {
        height: 47,
        width: 11,
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

    searchBar: {
        flexDirection: 'row',
        backgroundColor: 'white',

        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#660032',


        paddingVertical: 3,
        paddingLeft: 5,
        marginTop: 15,
        marginHorizontal: 90,
    },
    searchBarIcon: {
        height: '100%',
        width: '12%',
    },
    filterIcon: {
        height: '100%',
        width: '12%',

        marginTop: 1,
        marginLeft: '35%',
    },
    searchBarText: {
        marginLeft: 5,
        textAlign: 'left',
    },

    chatSection: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        marginBottom: 8,
        marginHorizontal: 20,
    },
    chat: {
        height: '25%',
        maxWidth: '75%',
    },
    incomeMessage: {
        flex: 1,
        // backgroundColor: 'blue',


    },
    outcomeMessage: {
        flex: 1,
        // backgroundColor: 'green',
    },

    chatFonter: {
        flexDirection: 'row',
        height: '11.25%',
        backgroundColor: 'white',

        justifyContent: 'center',
        alignContent: 'center',

        borderColor: '#660032',
        borderTopWidth: 4,
    },
    chatIconHolder: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputHolder: {
        flex: 1,

        justifyContent: 'center',

        borderWidth: 1,
        borderColor: '#660032',
        borderRadius: 99,

        paddingHorizontal: 10,
        marginVertical: 17,
    },
    facesIcon: {
        height: 60,
        width: 60
    },
    libraryIcon: {
        height: 40,
        width: 40
    },
    voiceIcon: {
        height: 50,
        width: 38
    },

});

export default Chat;
