import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function PostCard(props) {
    let { post, isFound, isLost} = props;
    let postImage = post.user.profileImage;

    return (
        <View style={[styles.posts, props.style]}>
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
                    {
                        (isFound) ?
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Image style={styles.iconStyle}
                                       source={require('../../assets/icon_found.png')}/>
                            </View>
                            :
                            null
                    }
                    {
                        (isLost) ?
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Image style={styles.iconStyle}
                                       source={require('../../assets/icon_lost.png')}/>
                            </View>
                            :
                            null
                    }
                </View>
                <View>
                    <View style={{marginBottom: 10}}>
                        <Text style={{color: '#660032'}}>{post.content}</Text>
                    </View>

                    {(post.isImage) ?
                        <View style={{borderWidth: 2, borderRadius: 25, borderColor: '#660032'}}>
                            <View style={{flex: 1, overflow: 'hidden', maxHeight: 150}}>
                                {/*<Text style={{backgroundColor: 'black', color: 'red'}}> [Image] </Text>*/}
                                {/*<Text style={{backgroundColor: 'black', color: 'red'}}> I don't know how to deal*/}
                                {/*    with image </Text>*/}
                                <Image style={{maxHeight: 150, width: '100%', resizeMode: 'stretch'}}
                                       source={post.image}/>
                            </View>
                        </View> : null}
                </View>

                <View style={styles.bottomIcons}>
                    <TouchableOpacity style={styles.like}>
                        <Image style={styles.likeIcon} source={require('../../assets/Like.png')}/>
                        <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfLikes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.comment}>
                        <Image style={styles.commentIcon} source={require('../../assets/Comment.png')}/>
                        <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfComments}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.share}>
                        <Image style={styles.shareIcon} source={require('../../assets/Share.png')}/>
                        <Text style={{marginLeft: 5, color: '#660032'}}>{post.numberOfShares}</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

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

    iconStyle: {
        height: 20,
        width: 20,
    },
});