import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import posts from '../data/posts';
import BottomSection from "../Classes/bottomSection";

const PostsPage = ({navigation}) => {
    // const post = notifications[0];
    // console.warn(post.image);
    let _posts = [];

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let postImage = post.user.profileImage;
        _posts.push(
            <View style={styles.posts}>
                <View style={{flex: 1, backgroundColor: 'white'}}>
                    <Image style={styles.profilePicture} source={postImage}/>
                </View>
                <View style={{flex: 4, backgroundColor: 'white', paddingLeft: 5}}>
                    <View style={{flexDirection: 'row', marginBottom: 10,}}>
                        <Text style={{color: '#660032'}}>{post.user.name}</Text>
                        {/*<Text style={{color: 'grey'}}> @{post.user.username}</Text>*/}
                        <Text style={{
                            marginLeft: 5,
                            color: '#99004b',
                            fontSize: 12,
                            alignSelf: 'center'
                        }}>{Math.floor((Math.random() * 40) + 1)}s</Text>
                    </View>
                    <View>
                        <View style={{marginBottom: 10}}>
                            <Text style={{color: '#660032'}}>{post.content}</Text>
                        </View>
                        {(post.isImage) ? <View style={{borderWidth: 2, borderRadius: 15, borderColor: '#660032'}}>
                            <View style={{
                                width: '100%',
                                height: 121,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{backgroundColor: 'black', color: 'red'}}> [Image] </Text>
                                <Text style={{backgroundColor: 'black', color: 'red'}}> I don't know how to deal
                                    with image </Text>
                                {/*<Image style={{width: 'auto', height: '20%', resizeMode: 'contain'}} source={require('../../assets/image_2.png')} />*/}
                            </View>
                        </View> : null}
                    </View>
                    <View style={styles.bottomIcons}>
                        <View style={styles.like}>
                            <Image style={styles.likeIcon} source={require('../../assets/Like.png')}/>
                            <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfLikes}</Text>
                        </View>
                        <View style={styles.comment}>
                            <Image style={styles.commentIcon} source={require('../../assets/Comment.png')}/>
                            <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfComments}</Text>
                        </View>
                        <View style={styles.share}>
                            <Image style={styles.shareIcon} source={require('../../assets/Share.png')}/>
                            <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfShares}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.background}>
            <View style={styles.headerSection}>
                <View>
                    <Image style={styles.curveLine}
                           source={require('../../assets/circleHeader.png')}
                    />
                </View>
                <View style={styles.circleShape}>
                    <Image source={require("../../assets/myProfileExample.png")}
                           style={styles.myPicture}
                    />
                </View>
                <View style={styles.logoHolder}>
                    <Image source={require("../../assets/Logo.png")}
                           style={styles.imageLogo}
                    />
                </View>
                <View style={styles.homeIconHolder}>
                    <Image source={require("../../assets/Icon_home.png")}
                           style={styles.homeIcon}
                    />
                </View>
                <View style={styles.menuIconHolder}>
                    <Image source={require("../../assets/Icon_menu.png")}
                           style={styles.menuIcon}
                    />
                </View>
            </View>
            <View style={styles.postsSection}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {_posts}
                </ScrollView>
            </View>

            <BottomSection navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    headerSection: {
        flex: 2,
        // borderWidth: 3,
        borderColor: 'red',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    curveLine: {
        flex: 1,
        position: 'absolute',
        height: 500,
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
        height: 100,
        width: 100,
        alignSelf: 'center',

        borderWidth: 3,
        borderColor: '#660032',
        borderRadius: 99,

        marginTop: -65,
        marginLeft: -15,
    },
    imageLogo: {
        height: '85%',
        width: '55%',
        alignSelf: 'center',

        marginTop: 9,
        marginLeft: 4,
        // justifyContent: 'center',
    },
    homeIconHolder: {
        position: 'absolute',

        marginTop: 45,
        marginLeft: 300 - 15,
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

    postsSection: {
        flex: 6,
        borderTopWidth: 5,
        borderRadius: 3,
        borderColor: '#660032',

        marginHorizontal: 20,
        marginBottom: 7,

        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 5,
    },
    posts: {
        height: 'auto',
        minWidth: '50%',
        backgroundColor: 'red',

        flexDirection: 'row',

        marginBottom: 20,
    },
    head: {
        flex: 1,
        flexDirection: "row",
        maxHeight: 'auto',

        justifyContent: 'flex-start',
        alignContent: 'space-between',

        // backgroundColor: 'green',

        marginBottom: 10,
    },
    pictureHolder: {
        flex: 1,
        backgroundColor: 'green',
        marginBottom: -4,

        borderRadius: 999,
    },
    profilePicture: {
        position: 'absolute',
        height: 65,
        width: 65,
    },
    nameHolder: {
        flex: 4,
        // backgroundColor: 'green',

        // justifyContent: 'center',
        paddingLeft: 10,
    },
    content: {
        flex: 3,
        backgroundColor: 'yellow',

        // marginBottom: -10,
        marginLeft: 60,
    },
    text: {
        flex: 1,
        backgroundColor: 'green',

        // marginLeft: 83,
    },
    imageHolder: {
        flex: 3,
        // height: 'auto',
        backgroundColor: 'grey',
    },

    bottomIcons: {
        // flex: 1,
        // backgroundColor: 'pink',
        flexDirection: 'row',


        justifyContent: 'space-around',

        marginTop: 10,
    },
    share: {
        flexDirection: 'row',
    },
    comment: {
        flexDirection: 'row',
    },
    like: {
        flexDirection: 'row',
    },
    shareIcon: {
        height: 16 + 10,
        width: 20 + 10,
    },
    commentIcon: {
        height: 16 + 10,
        width: 16 + 10,
    },
    likeIcon: {
        height: 16 + 10,
        width: 20 + 10,
    },


    bottomSection: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around',

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

export default PostsPage;
