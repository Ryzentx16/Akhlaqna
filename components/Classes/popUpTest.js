import React, {Component} from 'react';
import {Text, View, StyleSheet, Modal} from 'react-native';

export default function PopUpTest() {
    return (
        <Modal>
            <View style={styles.container}>
                <View style={styles.box}>

                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
      backgroundColor: '#000000aa'
    },
});