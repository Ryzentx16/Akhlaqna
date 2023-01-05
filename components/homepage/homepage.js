import React, {Component} from 'react';
import {Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


export default class Homepage extends Component {
    state = {phoneNumber: "", password: ""};

    checkLogin() {
        const {phoneNumber, password} = this.state;
        const axios = require('axios').default;

        axios.post('http://ryzentx.online/?phoneNumber=' + phoneNumber + '&password=' + password)
            .then(function (response) {
                console.warn(response.data);
                if (response.data === 1) {
                    // redirect to Dashboard
                    this.props.navigation.navigate('PostsPage');
                } else {
                    // alert something is wrong
                    Alert.alert('Error', 'Username/Password Wrong');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(navigation) {
        return (
            <View style={styles1.background}>
                {/*<Shadow distance={15}
                        startColor={'rgba(102,0,50,0.35)'}
                        containerStyle={styles1.outerShadow}
                        radius={37}><View style={{borderRadius: 37}}></View></Shadow>*/}

                {/*<View style={styles1.test}/>
                <View style={styles1.test}/>*/}

                <View style={styles1.form}>
                    <View style={styles1.logoSection}>
                        <View style={styles1.logo}>
                            <Image source={require("../../assets/Logo.png")} style={styles1.imageLogo}/>
                        </View>
                    </View>
                    <View style={styles1.title}>
                        <Text style={styles1.titleText}>Login</Text>
                    </View>
                    <View style={styles1.inputsArea}>
                        <View style={[styles1.inputSection, {justifyContent: 'center',}]}>
                            <View style={styles1.phoneInput}>
                                <View style={styles1.iconHolder}>

                                </View>
                                <TextInput placeholder={'Email or Phone Number'} placeholderTextColor={'#660032'}
                                           onChangeText={text => this.setState({phoneNumber: text})}/>

                            </View>
                        </View>
                        <View style={styles1.inputSection}>
                            <View style={styles1.passInput}>
                                <View style={styles1.iconHolder}>

                                </View>
                                <TextInput placeholder={'Password'} placeholderTextColor={'#660032'}
                                           onChangeText={text => this.setState({password: text})}
                                           secureTextEntry={true}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles1.buttonsArea}>
                        <View style={styles1.forgetButton}>
                            <TouchableOpacity onPress={() => this.checkLogin()}>
                                <Text style={styles1.textForget}>Forget Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles1.loginButton}>
                            <TouchableOpacity onPress={() => this.checkLogin()}>
                                <Text style={styles1.textLogin}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles1.signupButton}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
                                <Text style={styles1.textSignup}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            // </KeyboardAvoidingView>
        );
    }
}

// var counterH = 0;
// var counterW = 0;

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
    homepage: {
        opacity: 1,

        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "#660032",
        borderWidth: 7,
        borderRadius: 32,
        alignSelf: "center",
        width: getWidth("78%"),
        height: getHeight("64.729%"),
        top: "12.972%",

        shadowColor: "red",
        shadowOffset: {
            width: 20,
            height: 50,
        },
        shadowOpacity: 1,
        shadowRadius: 16.00,

        elevation: 50,

        // left: "10.27%",
    },// W: 287 | H: 479
    homepage_inputPhoneNumber: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "transparent",
        width: 253,
        height: 41,
        left: "7.430%",
        top: "43.423%",
    },
    homepage_inputPhoneNumber_rectangle1: {
        opacity: 1,
        // position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        borderColor: "rgba(102, 0, 50, 1)",
        borderRadius: 22,
        paddingLeft: 20,
        width: "100%",
        height: "100%",
    },
    homepage_inputPassword: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "transparent",
        width: 253,
        height: 41,
        left: "7.430%",
        top: "55.323%",
    },
    homepage_inputPassword_rectangle2: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        borderColor: "rgba(102, 0, 50, 1)",
        borderRadius: 22,
        paddingLeft: 20,
        width: "100%",
        height: "100%",
    },
    homepage_loginButton: {
        opacity: 1, //position: "absolute",
        alignSelf: "center",
        backgroundColor: "transparent",
        width: 137,
        height: 30,
        top: "73.068%",
    }, homepage_loginButton_rectangle3: {
        opacity: 1,
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
        borderColor: "rgba(102, 0, 50, 1)",
        borderRadius: 13,
        width: 137,
        height: 30,
        left: 0,
        top: 0
    },
    homepage_signUp: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "red",
        top: "81.002%",
        left: "40%"
    }, homepage_signUp_signUp: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0)",
        color: "rgba(102, 0, 50, 1)",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "normal", // fontFamily: Segoe UI,
        textAlign: "right",
        left: 0,
        top: 0,
    }, homepage_header: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "transparent",
        borderColor: "#660032",
        borderWidth: 3
        ,
        borderRadius: 100,
        width: 128,
        height: 128,
        top: "7.724%",
        left: "28.526%"
    }, homepage_header_logo: {
        opacity: 1,
        position: "absolute",
        backgroundColor: "transparent",
        width: 128,
        height: 128,
        left: 0,
        top: 0
    }, homepage_header_logo_ellipse5: {
        opacity: 1, position: "absolute", width: 128, height: 128, left: 0, top: 0
    }, homepage_header_logo_asset261538bd7: {
        opacity: 1, position: "absolute", backgroundColor: "transparent", width: 64, height: 97, left: 33, top: 14
    }, homepage_header_logo_asset261538bd7_asset2: {
        opacity: 1, position: "absolute", width: 64, height: 97, left: 0, top: 0
    }
});

const styles1 = StyleSheet.create({
    background: {
        position: 'absolute',
        height: '100%',
        width: '100%',

        // paddingTop: 90,
        // paddingLeft: 36,
        // paddingRight: 36,
        // paddingBottom: 160,
        // overflow: 'hidden',
    },

    /*test: {
        position: 'absolute',
        // borderWidth: 2,
        borderRadius: 37,

        elevation: 18,
        shadowColor: "#940148",

        // backgroundColor: 'white',
        width: '107%',
        height: '104%',

        marginTop: 76 - 7,
        marginLeft: 24,
        marginRight: 36,
        marginBottom: 160,
    },
    test3: {
        position: 'absolute',
        borderWidth: 2,
        borderRadius: 1,

        width: '107%',
        height: '104%',

        marginTop: 76 + 25,
        marginLeft: 24 + 25,
        marginRight: 36,
        marginBottom: 160,
    },
    test2: {
        position: 'absolute',
        // borderWidth: 2,
        borderRadius: 37,

        elevation: 9,
        shadowColor: "#940148",

        // backgroundColor: 'white',
        width: '100%',
        height: '100%',

        marginTop: 76 + 4,
        marginLeft: 24 + 12,
        marginRight: 36,
        marginBottom: 160,
    },
    outerShadow: {
        flex: 1,
        position: 'absolute',
        // borderColor: 'red',
        // borderRadius: 37,
        height: '100%',
        width: '100%',
        marginTop: 96,
        marginLeft: 31,
        marginRight: 36,
        marginBottom: 165,
    },
    innerShadow: {
        // flex: 1,
        position: 'absolute',

        elevation: 17,
        shadowColor: 'white',

        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'rgb(218,165,188)',
        borderRadius: 30,

        height: '96%',
        width: '93%',

        marginTop: 102,
        marginLeft: 36 + 11.5,
    },*/

    form: {
        flex: 1,
        // position: 'relative',
        borderColor: '#660032',
        // borderWidth: 5,
        // borderRadius: 37,
        backgroundColor: 'white',
    },
    border: {
        flex: 1,
    },

    title: {
        position: 'absolute',
        // alignContent: 'center',
    },
    titleText: {
        fontSize: 26,
        color: '#660032',

        marginLeft: '56%',
        marginTop: '73%',
    },

    logoSection: {
        flex: 1,
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

    inputsArea: {
        flex: 1,
        // backgroundColor: 'blue',
        // marginTop: 25,
        // marginLeft: 25,
        // marginRight: 25,
        // marginBottom: 55,
    },
    inputSection: { // Used Twice !
        flex: 1,
        // backgroundColor: 'green',

        paddingHorizontal: 32,
    },
    iconHolder: {
        width: 32,
        backgroundColor: 'red',
        marginRight: 7
    },
    phoneInput: {
        flexDirection: 'row',
        height: 50,

        backgroundColor: 'white',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        // marginBottom: 16,
        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 7,
    },
    passInput: {
        flexDirection: 'row',
        height: 50,

        backgroundColor: 'white',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        paddingTop: 7,
        paddingLeft: 13,
        paddingRight: 13,
        paddingBottom: 7,
    },


    buttonsArea: {
        flex: 1,
        // backgroundColor: 'green',
    },
    forgetButton: {
        marginTop: -40,
        marginBottom: 20,
    },
    loginButton: {
        marginHorizontal: 100,

        // backgroundColor: 'grey',
        borderColor: '#660032',
        borderWidth: 2,
        borderRadius: 30,

        paddingTop: 2,
        paddingRight: 45,
        paddingLeft: 45,
        paddingBottom: 5,
    },
    textLogin: {
        fontSize: 26,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
    textForget: {
        fontSize: 17,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
    signupButton: {

        // backgroundColor: 'pink',
        // borderWidth: 1,

        marginHorizontal: 150,
        marginTop: 100,
    },
    textSignup: {
        fontSize: 22,
        color: '#660032',
        // marginLeft: 5,
        alignSelf: 'center',
    },
});