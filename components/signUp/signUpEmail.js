import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class SignUpEmail extends Component {

    constructor() {
        super();
        this.state = {
            cameFrom: 'Email',
            data: 'example@example.com',
        };
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
                    <View style={styles.firstRowSection}>
                        <View style={{flex: 1,}}>
                            <Text style={styles.qText}>Enter your Email account</Text>
                        </View>
                        <View style={styles.emailInput}>
                            <TextInput style={{fontSize: 20}} placeholder={'Email account'}
                                       placeholderTextColor={'rgba(102,0,50,0.75)'} />
                        </View>
                    </View>
                    <View style={styles.secRowSection}>
                        <View style={{flex: 1,}}>
                            <Text style={styles.qText}>Enter your Password number</Text>
                        </View>
                        <View style={styles.passInput}>
                            <TextInput style={{fontSize: 20}} placeholder={'Password'}
                                       placeholderTextColor={'rgba(102,0,50,0.75)'} secureTextEntry={true}/>
                        </View>
                    </View>
                </View>
                <View style={styles.submitSection}>
                    <TouchableOpacity style={styles.nextButton} onPress={() => this.props.navigation.navigate('SignUpConfirmation', {cameFrom: this.state.cameFrom, data: this.state.data})}>
                        <Text style={{
                            flex: 1,
                            alignSelf: 'center',
                            justifyContent: 'center',
                            color: '#660032',
                            fontSize: 32,
                        }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
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
        width: 68,
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

        marginTop: -8,
        marginHorizontal: 40,
    },
    qText: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#660032',
        // marginTop: 40,
    },
    firstRowSection: {
        flex: 1,
        // flexDirection: 'row',
        // backgroundColor: 'black',
        marginVertical: 20,
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
    secRowSection: {
        flex: 1,
        // backgroundColor: 'purple',

        marginBottom: 40,
        marginHorizontal: 20,
    },
    emailInput: {
        flex: 1,
        // backgroundColor: 'red',

        borderWidth: 2,
        borderRadius: 24,
        borderColor: '#660032',

        marginHorizontal: 20,
        // paddingVertical: 10,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    passInput: {
        flex: 1,
        // backgroundColor: 'red',

        borderWidth: 2,
        borderRadius: 24,
        borderColor: '#660032',

        marginHorizontal: 20,
        // paddingVertical: 10,
        paddingHorizontal: 15,
        paddingTop: 10,
    },

    submitSection: {
        flex: 1,
        // backgroundColor: 'green',

        marginTop: 20,
    },
    nextButton: {
        flex: 1,
        // alignSelf: 'center'
        // backgroundColor: 'red',

        borderWidth: 2,
        borderColor: '#660032',
        borderRadius: 37,

        marginHorizontal: 100,

        marginTop: 10,
        paddingTop: -3,
    },
});