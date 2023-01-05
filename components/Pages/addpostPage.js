import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import BottomSection from "../Classes/bottomSection";
import HeaderSection from "../Classes/headerSection";

const AddPostPage = ({navigation}) => {
    return (
        <View style={styles.background}>
            <HeaderSection isSearchBar={false} style={{marginBottom: 50}} navigation={navigation}/>

            <View style={styles.addPostSection}>
                <View style={styles.buttons}>
                    <View style={styles.firstRow}>
                        <View style={styles.addTextButton}>
                            <Image  style={{height: 65, width: 65}}
                                    source={require("../../assets/Icon_text.png")}/>
                        </View>
                        <View style={styles.addImageButton}>
                            <Image  style={{height: 65, width: 65}}
                                    source={require("../../assets/Icon_photo-library.png")}/>
                        </View>
                    </View>
                    <View style={styles.secRow}>
                        <View style={styles.cameraButton}>
                            <Image  style={{height: 65, width: 74}}
                                    source={require("../../assets/Icon_camera.png")}/>
                        </View>
                    </View>
                </View>
            </View>

            <BottomSection navigation={navigation} currentFunctionValue={AddPostPage} />
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff',
    },

    addPostSection: {
        flex: 1,
        // backgroundColor: 'red',

        justifyContent: 'center',

        margin: 15,
    },
    buttons: {
        height: 240,
        width: 270,

        alignSelf: 'center',

        borderRadius: 25,

        // backgroundColor: 'green',
    },
    firstRow: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'grey',

        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
    },
    addTextButton: {
        flex: 1,
        backgroundColor: '#660032',

        justifyContent: 'center',
        alignItems: 'center',

        borderColor: 'white',
        borderRightWidth: 2,

        borderTopStartRadius: 25,
    },
    addImageButton: {
        flex: 1,
        backgroundColor: '#660032',

        justifyContent: 'center',
        alignItems: 'center',

        borderColor: 'white',
        borderLeftWidth: 2,

        borderTopEndRadius: 25,
    },
    secRow: {
        flex: 1,
        // backgroundColor: 'yellow',

        borderColor: 'white',
        borderTopWidth: 3,

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    cameraButton: {
        flex: 1,
        backgroundColor: '#660032',

        justifyContent: 'center',
        alignItems: 'center',

        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    }
});

export default AddPostPage;
