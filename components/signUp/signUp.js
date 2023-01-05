import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Touchable} from "react-native-web";

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    handlePress(target, owner) {
        if (this.props.onPress) {
            let name;
            let id;
            let index = -1;
            if (target.search("::") > -1) {
                const varCount = target.split("::").length;
                if (varCount === 2) {
                    name = target.split("::")[0];
                    id = target.split("::")[1];
                } else if (varCount === 3) {
                    name = target.split("::")[0];
                    index = parseInt(target.split("::")[1]);
                    id = target.split("::")[2];
                }
            } else {
                name = target;
            }
            this.props.onPress({type: 'button', name: name, index: index, id: id, owner: owner});
        }
    }

    handleChangeTextinput(name, value) {
        let id;
        let index = -1;
        if (name.search('::') > -1) {
            const varCount = name.split("::").length;
            if (varCount === 2) {
                name = name.split("::")[0];
                id = name.split("::")[1];
            } else if (varCount === 3) {
                name = name.split("::")[0];
                index = name.split("::")[1];
                id = name.split("::")[2];
            }
        } else {
            name = name;
        }
        let state = this.state;
        state[name.split('::').join('')] = value;
        this.setState(state, () => {
            if (this.props.onChange) {
                this.props.onChange({type: 'textinput', name: name, value: value, index: index, id: id});
            }
        });
    }

    render(navigation) {

        return (
            <View style={styles.background}>
                <View style={styles.backSection}>
                    <TouchableOpacity style={styles.iconHolder} onPress={() => this.props.navigation.goBack()}>
                        <Image source={require("../../assets/Icon_arrow_back.png")} style={styles.iconBack}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.logoSection}>
                    <View style={styles.logoHolder}>
                        <Image source={require("../../assets/Logo.png")} style={styles.imageLogo}/>
                    </View>
                </View>
                <View style={styles.questionSection}>
                    <Text style={styles.qText}>Choose how you want to sign up</Text>
                    <View style={styles.firstRowButtons}>
                        <TouchableOpacity style={styles.qidButton} onPress={() => this.props.navigation.navigate('SignUpQID')}>
                            <Text style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                color: '#660032',
                                fontSize: 23
                            }}>QID</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.phoneButton} onPress={() => this.props.navigation.navigate('SignUpPhone')}>
                            <Text style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                                color: '#660032',
                                fontSize: 20
                            }}>Phone</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.secRowButton}>
                        <TouchableOpacity style={styles.emailButton} onPress={() => this.props.navigation.navigate('SignUpEmail')}>
                            <Text style={{
                                flex: 1,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                color: '#660032',
                                fontSize: 25,
                            }}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.submitSection}>
                    {/*<TouchableOpacity style={styles.nextButton}>
                        <Text style={{
                            flex: 1,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            color: '#660032',
                            fontSize: 32,
                        }}>Next</Text>
                    </TouchableOpacity>*/}
                </View>
            </View>
        );
    }
}


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
    background: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 190,
    },

    backSection: {
        flex: 1,
        // backgroundColor: 'lightblue'
    },

    iconHolder: {
        flex: 1,
        marginTop: 15,
        marginLeft: 15,
    },
    iconBack: {
        height: 32,
        width: 32,
    },

    logoSection: {
        flex: 3,
        // backgroundColor: 'yellow'
        marginBottom: -20,
    },
    logoHolder: {
        flex: 1,
        borderWidth: 3,
        borderColor: '#660032',
        borderRadius: 99,

        marginHorizontal: 140,
        marginBottom: 48,
    },
    imageLogo: {
        height: 102,
        width: 67,
        alignSelf: 'center',

        marginTop: 9,
        marginLeft: 7,
        // justifyContent: 'center',
    },

    questionSection: {
        flex: 5,
        // backgroundColor: 'green',

        // borderWidth: 4,
        borderColor: 'black',

        // marginTop: -20,
        marginHorizontal: 40,
    },
    qText: {
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#660032',
        marginTop: 40,
    },
    firstRowButtons: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'black',
        marginVertical: 35,
        marginHorizontal: 20,
    },
    qidButton: {
        flex: 1,
        // backgroundColor: 'red',

        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 37,

        marginRight: 10,

        paddingTop: 10,
        // paddingBottom: ,
    },
    phoneButton: {
        flex: 1,
        // backgroundColor: 'pink',

        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 37,

        marginLeft: 10,

        paddingTop: 12,
    },
    secRowButton: {
        flex: 1,
        // backgroundColor: 'purple',

        marginBottom: 40,
        marginHorizontal: 75,
    },
    emailButton: {
        flex: 1,
        // backgroundColor: 'yellow',
        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 37,

        paddingTop: 7,
    },

    submitSection: {
        flex: 1,
        // backgroundColor: 'blue',

        marginTop: 20,
    },
    nextButton: {
        flex: 1,
        // backgroundColor: 'red',

        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 37,

        marginHorizontal: 85,

        paddingTop: 3,
    },
});