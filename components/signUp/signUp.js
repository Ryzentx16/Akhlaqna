import React from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

let firstName = "";
let lastName = "";
let phoneNumber = "";
let birthday = "";
let newPassword = "";
let confirmPassword = "";

export default function SignUp({navigation}) {
    return (
        <View style={styles.background}>
            <View style={styles.logoSection}>
                <View style={styles.logo}>
                    <Image source={require("../../assets/Logo.png")}
                           style={styles.imageLogo}/>
                    {/*<AmanatiLogo style={styles.imageLogo}/>*/}
                </View>
            </View>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>Sign Up</Text>
            </View>

            <View style={styles.inputsContainer}>
                <View style={styles.usernameContainer}>
                    <View style={styles.firstnameContainer}>
                        <View style={styles.firstname}>
                            <TextInput placeholder={"First Name"}
                                       placeholderTextColor={"rgba(102,0,50,0.75)"}
                                       onChangeText={(text) => {
                                           firstName = text
                                       }}/>
                        </View>
                    </View>
                    <View style={styles.lastnameContainer}>
                        <View style={styles.lastname}>
                            <TextInput placeholder={"Last Name"}
                                       placeholderTextColor={"rgba(102,0,50,0.75)"}
                                       onChangeText={(text) => {
                                           lastName = text
                                       }}/>
                        </View>
                    </View>
                </View>

                <View style={styles.phonenumberContainer}>
                    <View style={styles.phonenumber}>
                        <TextInput placeholder={"+974" + " | Phone Number"}
                                   placeholderTextColor={"rgba(102,0,50,0.75)"}
                                   onChangeText={(text) => {
                                       phoneNumber = text
                                   }}/>
                    </View>
                </View>

                <View style={styles.birthdayContainer}>
                    <View style={styles.birthday}>
                        <View style={{flex: 8}}>
                            <TextInput placeholder={"Birthday"}
                                       placeholderTextColor={"rgba(102,0,50,0.75)"}
                                       onChangeText={(text) => {
                                           birthday = text
                                       }}/>
                        </View>
                        <View style={styles.birthdayIcon}>
                            <FontAwesome5 name={'calendar-alt'}
                                          size={30}
                                          color={"#660032"}/>
                        </View>
                    </View>
                </View>

                <View style={styles.passwordContainer}>
                    <View style={styles.newPasswordContainer}>
                        <TextInput placeholder={"New Password"}
                                   placeholderTextColor={"rgba(102,0,50,0.75)"}
                                   onChangeText={(text) => {newPassword = text}}
                        />
                    </View>
                    <View style={styles.confirmPasswordContainer}>
                        <TextInput placeholder={"Confirm Password"}
                                   placeholderTextColor={"rgba(102,0,50,0.75)"}
                                   onChangeText={(text) => {confirmPassword = text}}
                        />
                    </View>
                </View>
            </View>

            <View style={styles.loginContainer}>
                <TouchableOpacity style={styles.login}>
                    <Text style={{fontSize: 26, color: '#660032'}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white',
    },

    logoSection: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',

        // backgroundColor: 'red',
    },
    logo: {
        height: 125,
        width: 125,
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 150 / 2,

        alignItems: 'center',
        justifyContent: 'center',
    },
    imageLogo: {
        // alignSelf: 'center',
        height: 87,
        width: 57,

        // marginTop: 12,
        marginLeft: 4,
    },

    titleContainer: {
        flex: 1,
        // backgroundColor: 'green',

        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 26,
        color: '#660032'
    },

    inputsContainer: {
        flex: 5,
        // backgroundColor: 'blue',

    },
    usernameContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#578978',
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstnameContainer: {
        flex: 1,
        // backgroundColor: "red",

        paddingHorizontal: 20,
    },
    firstname: {
        flex: 1,
        maxHeight: 50,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        padding: 8,
    },
    lastnameContainer: {
        flex: 1,
        maxHeight: 50,

        // backgroundColor: "blue",
        paddingHorizontal: 20,

    },
    lastname: {
        flex: 1,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        padding: 8,
    },

    phonenumberContainer: {
        flex: 1,
        // backgroundColor: '#005152',
        // alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
    },
    phonenumber: {
        flex: 1,
        maxHeight: 50,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        padding: 8,
    },

    birthdayContainer: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: '#987412',
        alignItems: 'center',
        justifyContent: 'center',

        paddingHorizontal: 20,
    },
    birthday: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 50,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        padding: 8,
    },
    birthdayIcon: {
        flex: 1,
        // position: 'absolute',
        // backgroundColor: 'red',

        alignItems: 'flex-end',
    },

    btnsContainer: {
        flex: 3,
        backgroundColor: 'grey',
    },
    createNewPasswordContainer: {
        flex: 1,
        backgroundColor: 'red',
    },
    createNewPassword: {},
    loginContainer: {
        flex: 1,
        // backgroundColor: 'blue',
    },
    login: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    passwordContainer: {
        flex: 2,
        // backgroundColor: 'green',
        // justifyContent: 'center',

        paddingHorizontal: 20,
        // paddingBottom: 15,
    },
    newPasswordContainer: {
        flex: 1,
        maxHeight: 50,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        // paddingBottom: 10,
        padding: 8,
        marginBottom: 18,
    },
    confirmPasswordContainer: {
        flex: 1,
        maxHeight: 50,

        borderWidth: 2,
        borderColor: "#660032",
        borderRadius: 50,

        paddingHorizontal: 16,
        padding: 8,
    },
});