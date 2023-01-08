import React from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import BottomSection from "../Classes/bottomSection";
// import chats from "../data/chats";
import notifications from "../data/notifications";
import HeaderSection from "../Classes/headerSection";
import NotificationCard from "../Classes/notificationCard";

const NotificationsPage = ({navigation}) => {
    let _notifications = [];

    for (let i = 0; i < notifications.length * 5; i++) {
        _notifications.push(notifications[i % notifications.length]);
        // _notifications.push(notifications[i]);
        // _notifications.push(notifications[i]);
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
                <FlatList data={_notifications}
                          keyExtractor={(item, index) => index}
                          renderItem={(item, index) => {
                              // console.warn(item);
                              return <NotificationCard notification={item.item}
                                                       type={item.item.type}/>;
                          }}
                />
            </View>

            <BottomSection navigation={navigation} currentFunctionValue={NotificationsPage}/>
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
