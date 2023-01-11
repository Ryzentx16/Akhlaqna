import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CommentCard from "../Classes/CommentCard";
import comments from "../data/comments";

export default function CommentPage() {
    return (
        <View style={styles.container}>
            <FlatList data={comments}
                      keyExtractor={(item, index) => index}
                      renderItem={(item, index) => {
                          return <CommentCard comment={item.item} key={index}/>
                      }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});