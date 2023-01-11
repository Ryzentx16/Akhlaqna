import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserAvatar from "@muhzi/react-native-user-avatar";

const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];
function calcTime(offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + 3600000 * offset);

    // return time as a string
    return nd.toLocaleString();
}
function getPostDuration(postDate) {
    // var postDate = new Date(post.createdAt).getTime();
    // var currDate = new Date().getTime();
    // var postDuration = new Date(currDate - postDate);

    var postDate = new Date(postDate).getTime();
    var currDate = new Date(calcTime("+3")).getTime();
    var duration = currDate - postDate;

    var days = Math.floor(duration / (1000 * 60 * 60 * 24));
    var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((duration % (1000 * 60)) / 1000);

    var durationString = "";

    if (days > 90) {
        var date = new Date(postDate);

        durationString =
            date.getDate() +
            " " +
            month[date.getMonth()] +
            " " +
            date.getFullYear().toString().substr(-2);
    } else if (days > 30 && days <= 90) {
        var date = new Date(postDate);
        durationString = date.getDate() + " " + month[date.getMonth()];
    } else if (days !== 0 && days > 0) {
        durationString = days + " d";
    } else if (hours !== 0 && hours > 0) {
        durationString = hours + " h";
    } else if (minutes !== 0 && minutes > 0) {
        durationString = minutes + " m";
    } else if (seconds !== 0 && seconds > 0) {
        durationString = seconds + " s";
    } else {
        durationString = "Just now";
    }

    return durationString;
    // console.log(postDuration)
}

export default function CommentCard(props) {
    const { comment } = props;

    return (
        <View style={[styles.commentContainer, props.style]}>
            <View style={styles.comment}>
                <View style={styles.profileContainer}>
                    <UserAvatar userName={"John"}
                                size={50}/>
                </View>
                <View style={styles.detailsContainer}>
                    <View style={styles.headContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{comment.user.name}</Text>
                        </View>
                        <View style={styles.createdAtContainer}>
                            <Text style={styles.createdAtText}>{getPostDuration(comment.createdAt)}</Text>
                        </View>
                    </View>
                    <View style={styles.contentContainer}>
                        <Text style={styles.content}>
                            {comment.content}
                        </Text>
                    </View>

                    <View style={styles.replyContainer}>
                        <View style={styles.replyActionContainer}>
                            <Text style={styles.replyText}>Reply</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        marginVertical: 8,
    },

    comment: {
        flexDirection: 'row',
        // backgroundColor: 'red'
        marginLeft: 20,
        marginRight: 30,
    },
    profileContainer: {
        flex: 1,

        alignItems: 'center',

        marginHorizontal: 10,
    },

    detailsContainer: {
        flex: 8,
        borderRadius: 17,
        backgroundColor: '#e1e1e1',

        padding: 7,
        paddingTop: 10,
    },

    headContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameContainer: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        color: "#660032",
    },
    createdAtContainer: {
        marginLeft: 10,
    },
    createdAtText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(96,0,50,0.75)',
    },
    contentContainer: {
        paddingTop: 0,
        padding: 5,
    },
    content: {
        fontSize: 14,
        color: "#660032",
    },
    replyContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 3,
    },
    replyText: {
        fontWeight: 'bold',
        color: 'rgba(96,0,50,0.75)',
    },
});