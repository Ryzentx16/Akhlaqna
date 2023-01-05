import React from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import BottomSection from "../Classes/bottomSection";
// import chats from "../data/chats";
import notifications from "../data/notifications";
import HeaderSection from "../Classes/headerSection";

const NotificationsPage = ({navigation}) => {
    let _notifications = [];

    for (let i = 0; i < notifications.length; i++) {
        let notification = notifications[i];
        _notifications.push(
            <View style={styles.notifications}>
                <View style={{flex: 1.5, backgroundColor: 'white'}}>
                    <View>
                        <Image style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'cover',
                            alignSelf: 'center',
                            overflow: 'visible',
                            // backgroundColor: 'black'
                        }} source={notification.user.profileImage}/>
                    </View>
                    {
                        ((notification.notificationIcon === null) ? (
                            <View style={{backgroundColor: "black", margin: 2}}>
                                <Image style={{
                                    height: 50,
                                    width: 50,
                                    resizeMode: 'contain',
                                    alignSelf: 'center',
                                    overflow: 'visible',
                                }} source={notification.notificationIcon}/>
                            </View>) : <View>
                            <Image style={{
                                height: 50,
                                width: 50,
                                resizeMode: 'contain',
                                alignSelf: 'center',
                                overflow: 'visible',

                            }} source={notification.notificationIcon}/>
                        </View>)
                    }
                </View>
                <View style={{flex: 6, backgroundColor: 'white', paddingTop: 10, marginLeft: 5}}>
                    <View style={{flex: 1,}}>
                        <Text style={{color: '#660032'}}>
                            {notification.user.name}
                        </Text>
                    </View>
                    <View style={{flex: 2,}}>
                        <Text style={{color: '#660032'}}>
                            {notification.user.name} has reacted one of your posts
                        </Text>
                    </View>
                </View>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <View>
                        <Image style={{
                            height: 35,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            overflow: 'visible',
                            marginTop: '75%',
                        }} source={require('../../assets/threeDots.png')}/>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            {/*<View style={styles.headerSection}>
                <View>
                    <TouchableOpacity style={styles.iconHolder} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../assets/Icon_arrow_back.png")} style={styles.iconBack}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.curveLine}
                           source={require('../../assets/circleHeader.png')}
                    />
                </View>
                <View style={styles.profileImageHolder}>
                    <Image source={require("../../assets/Logo.png")}
                           style={styles.profileImage}
                    />
                </View>
                <View style={styles.homeIconHolder}>
                    <Image source={require("../../assets/Icon_home.png")}
                           style={styles.homeIcon}
                    />
                </View>
                <View style={styles.searchBar}>
                    <Image style={styles.searchBarIcon}
                           source={require('../../assets/Search-icon.png')}/>
                    <TextInput style={styles.searchBarText}
                               placeholder={'Search Bar'}
                               placeholderTextColor={'#660032'}/>
                    <Image style={styles.filterIcon}
                           source={require('../../assets/Icon_filter.png')}/>
                </View>
            </View>*/}
            <HeaderSection isSearchBar={true} navigation={navigation}/>

            <View style={styles.notificationSection}>
                <ScrollView>
                    {_notifications}
                    {_notifications}
                    {_notifications}
                    {_notifications}
                </ScrollView>
            </View>

            <BottomSection navigation={navigation} currentFunctionValue={NotificationsPage} />
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


    notificationSection: {
        flex: 1,
        backgroundColor: 'white',

        marginTop: 55,
        marginHorizontal: 25,
    },
    notifications: {
        // height: getHeight("13"),
        flexDirection: 'row',

        // justifyContent: 'center',

        borderColor: "#660032",
        borderRadius: 7,
        borderTopWidth: 3,
        borderBottomWidth: 3,

        marginBottom: -3,
        paddingVertical: 5,
    },
});

export default NotificationsPage;
