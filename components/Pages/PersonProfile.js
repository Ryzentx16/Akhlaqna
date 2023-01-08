import React from 'react';
import {FlatList, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BottomSection from "../Classes/bottomSection";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import posts from "../data/posts";
import PostCard from "../Classes/postCard";

import users from "../data/users";

export default function PersonProfile() {
    const ourUser = users.user[2];

    let x = [];

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].user.id === ourUser.id) {
            x.push(posts[i]);
            x.push(posts[i]);
            x.push(posts[i]);
        }
    }


    /*{
        id: 't5',
            user: {
            id: 'u4',
            username: 'Mohamed',
            name: 'Mohamed .A',
            profileImage: require('../../assets/profile_4.png'),
    },
        createdAt: '2022:07:04 14:02:00',
            content: 'Lorem Ipsum is simply dummy text of the printing and ' +
    'typesetting industry. ',
        image: require('../../assets/image_3.png'),
        isImage: true,
        numberOfComments: 126,
        numberOfShares: 506,
        numberOfLikes: 53,
    },*/


    return (
        <View style={styles.container}>
            <View style={{flex: 2}}>
                <View style={{flex: 1}}>
                    <View style={styles.iconImageBackContainer}>
                        <Image source={require('../../assets/Icon_arrow_back.png')}/>
                    </View>
                </View>
                <View style={{flex: 4, borderTopWidth: 3, borderBottomWidth: 3, borderColor: "#660032"}}>
                    <View style={{flex: 5, flexDirection: 'row',}}>
                        <View style={styles.imageContainer}>
                            <Image style={{height: 90, width: 90,}}
                                   source={ourUser.profileImage}/>
                        </View>
                        <View style={{
                            flex: 3,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingLeft: 10,
                        }}>
                            <Text style={{fontSize: 24, color: '#660032', marginTop: 10}}>
                                {ourUser.name}
                            </Text>
                            <MaterialCommunityIcons
                                name={"dots-vertical"}
                                color={"#660032"}
                                size={50}
                            />
                        </View>
                    </View>
                    <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                        <View style={{flex: 1, maxWidth: 170,}}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 99,
                                borderWidth: 1,
                                maxHeight: 40,
                                borderColor: '#660032',
                                paddingLeft: 10,
                                paddingTop: 5
                            }}>
                                <Text style={{marginLeft: 30, color: '#660032', fontSize: 20}}>Message</Text>
                            </View>
                        </View>
                        <View style={{flex: 1, maxWidth: 170}}>
                            <View style={{
                                flex: 1,
                                backgroundColor: 'white',
                                borderRadius: 99,
                                borderWidth: 1,
                                borderColor: '#660032',
                                maxHeight: 40,
                                paddingTop: 8
                            }}>
                                <Text style={{marginLeft: 30, color: '#660032', fontSize: 16}}>Lost & Found</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <SafeAreaView style={{flex: 4, backgroundColor: 'white', marginTop: 12, marginHorizontal: 25}}>
                <FlatList data={x}
                          keyExtractor={(item, index) => index}
                          renderItem={(item, index) => {
                              return <PostCard post={item.item}
                                               key={index}
                                               style={{
                                                   borderBottomWidth: 1,
                                                   borderColor: '#660032',
                                                   paddingBottom: 15,
                                                   backgroundColor: 'white'
                                               }}/>;
                          }}
                />
            </SafeAreaView>

            <BottomSection/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    iconImageBackContainer: {
        flex: 1,
        // backgroundColor: 'grey',
        maxWidth: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20,
        // backgroundColor: 'green',
    }

});
