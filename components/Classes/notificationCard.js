import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NotificationCard(props) {
    const {notification, type} = props;
    let currentIcon;
    // console.warn(type);
    let size=64;

    switch (type) {
        case "share":
            currentIcon =
                <FontAwesome5
                    name={"share"}
                    color={"#660032"}
                    size={50}
                    style={[
                        {
                            backgroundColor: 'green',
                            position: "absolute",
                            alignSelf: "flex-end",
                            borderColor: "white",
                            borderWidth: 2,
                        },
                        {
                            width: size / 4,
                            height: size / 4,
                            borderRadius: size / 4,
                            bottom: true ? size / 32 : -(size / 32),
                            right: true ? size / 32 : -(size / 32),
                        },
                    ]}
                />
            ;
            break;
        case "like":
            currentIcon =
                <Ionicons
                    name={"heart"}
                    color={"#660032"}
                    size={50}
                />
            ;
            break;
        case "comment":
            currentIcon =
                <Ionicons
                    name={"chatbubbles"}
                    color={"#660032"}
                    size={45}
                />
            ;
            break;
    }


    return (
        <View style={styles.notifications}>
            <View style={{flex: 1.5, backgroundColor: 'white'}}>
                <View>
                    <Image style={{
                        height: 50,
                        width: 50,
                        resizeMode: 'cover',
                        alignSelf: 'center',
                        overflow: 'visible',
                        // backgroundColor: 'black',
                    }} source={notification.user.profileImage}/>
                    {currentIcon}
                </View>
                <View style={{alignItems: 'center'}}>
                    {currentIcon}
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                        {notification.user.name}
                    </Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.detail}>
                        {notification.user.name} has reacted one of your posts
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    notifications: {
        // height: getHeight("13"),
        flexDirection: 'row',

        // justifyContent: 'center',

        borderColor: "#660032",
        borderRadius: 7,
        // borderTopWidth: 1,


        marginBottom: 0,
        paddingVertical: 5,
    },
    bodyContainer: {
        flex: 6,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingRight: 10,
        marginLeft: 5,

        borderColor: '#660032',
        borderBottomWidth: 1,
    },
    nameContainer: {
        flex: 1,
    },
    name: {
        color: '#660032',
    },
    detailContainer: {
        flex: 2,
        marginLeft: 15,
    },
    detail: {
        color: '#660032',
    },

});