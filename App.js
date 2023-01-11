import React, {Component} from "react";
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homepage from "./components/homepage/homepage.js";
import SignUp from "./components/signUp/signUp";
import SignUpPhone from "./components/signUp/signUpPhone";
import SignUpEmail from "./components/signUp/signUpEmail";
import SignUpQID from "./components/signUp/signUpQID";
import SignUpConfirmation from "./components/signUp/signUpConfirmation";
import PostsPage from "./components/Pages/postsPage";
import SearchPage from "./components/Pages/searchPage";
import NotificationsPage from "./components/Pages/notificationsPage";
import ChatsPage from "./components/Pages/Chat/chatsPage";
import AddPostPage from "./components/Pages/addpostPage";
import ChatRoom from "./components/Pages/Chat/chatRoom";
import FoundPage from "./components/Pages/foundPage";
import LostPage from "./components/Pages/lostPage";
import PersonProfile from "./components/Pages/PersonProfile";
import AccountPage from "./components/Pages/AccountPage";
import SettingPage from "./components/Pages/SettingPage";
import CommentPage from "./components/Pages/CommentPage";

const Stack = createNativeStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen">
                    <Stack.Screen name="Homepage" component={Homepage}/>
                    <Stack.Screen name="HomeScreen" component={HomeScreen}/>

                    {/* Sign Up Section */}
                    <Stack.Screen name="SignUp" component={SignUp}/>
                    <Stack.Screen name="SignUpQID" component={SignUpQID}/>
                    <Stack.Screen name="SignUpPhone" component={SignUpPhone}/>
                    <Stack.Screen name="SignUpEmail" component={SignUpEmail}/>
                    <Stack.Screen name="SignUpConfirmation" component={SignUpConfirmation}/>

                    {/* Posts Page */}
                    <Stack.Screen name="PostsPage" component={PostsPage}/>

                    {/* Search Page */}
                    <Stack.Screen name="SearchPage" component={SearchPage}/>

                    {/* Notifications Page */}
                    <Stack.Screen name="NotificationsPage" component={NotificationsPage}/>

                    {/* Chats Page */}
                    <Stack.Screen name="ChatsPage" component={ChatsPage}/>

                    {/* Add Post Page */}
                    <Stack.Screen name="AddPostPage" component={AddPostPage}/>

                    {/* ChatRoom Page */}
                    <Stack.Screen name="ChatRoom" component={ChatRoom}/>

                    {/* Found Page */}
                    <Stack.Screen name="FoundPage" component={FoundPage}/>

                    {/* Lost Page */}
                    <Stack.Screen name="LostPage" component={LostPage}/>

                    {/* Person Profile */}
                    <Stack.Screen name="PersonProfile" component={PersonProfile}/>

                    {/* Account Page */}
                    <Stack.Screen name="AccountPage" component={AccountPage}/>

                    {/* Setting Page */}
                    <Stack.Screen name="SettingPage" component={SettingPage}/>

                    {/* Comment Page */}
                    <Stack.Screen name="CommentPage" component={CommentPage}/>

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

function HomeScreen({navigation, route}) {
    let pages =
        [
            'Homepage',
            'SignUp',
            'SignUpQID',
            'SignUpPhone',
            'SignUpEmail',
            'SignUpConfirmation',
            'PostsPage',
            'SearchPage',
            'NotificationsPage',
            'ChatsPage',
            'AddPostPage',
            'ChatRoom',
            'FoundPage',
            'LostPage',
            'PersonProfile',
            'AccountPage',
            'SettingPage'
        ];

    let signPages =
        [
            'SignUp',
            'SignUpQID',
            'SignUpPhone',
            'SignUpEmail',
            'SignUpConfirmation',
        ];

    let bottomPages =
        [
            'PostsPage',
            'SearchPage',
            'NotificationsPage',
            'ChatsPage',
            'ChatRoom',
            'AddPostPage',
        ];

    let others =
        [
            'FoundPage',
            'LostPage',
            'PersonProfile',
            'AccountPage',
            'SettingPage',
            'CommentPage',
        ];

    let sign = [];
    for (let i = 0; i < signPages.length; i++) {
        sign.push(<Button
            title={"Go to " + signPages[i]}
            onPress={() => navigation.navigate(signPages[i])}
        />);
    }

    let bottom = [];
    for (let i = 0; i < bottomPages.length; i++) {
        bottom.push(<Button
            title={"Go to " + bottomPages[i]}
            onPress={() => navigation.navigate(bottomPages[i])}
        />);
    }

    let other = [];
    for (let i = 0; i < others.length; i++) {
        other.push(<Button
            title={"Go to " + others[i]}
            onPress={() => navigation.navigate(others[i])}
        />);
    }

    return (
        <View style={styles.container}>
            <ScrollView style={{width: '75%',}}>
                <View style={{marginBottom: 20,}}>
                    <Text style={styles.text}>HomePage</Text>
                    <View style={styles.btnsContainer}>
                        <Button
                            title={"Go to " + 'Homepage'}
                            onPress={() => navigation.navigate('Homepage')}
                        />
                    </View>
                </View><View style={{marginBottom: 20,}}>
                    <Text style={styles.text}>SignPages</Text>
                    <View style={styles.btnsContainer}>
                        {sign}
                    </View>
                </View>
                <View style={{marginBottom: 20,}}>
                    <Text style={styles.text}>BottomPages</Text>
                    <View style={styles.btnsContainer}>
                        {bottom}
                    </View>
                </View>
                <View style={{marginBottom: 20,}}>
                    <Text style={styles.text}>Others</Text>
                    <View style={styles.btnsContainer}>
                        {other}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    btnsContainer: {
        borderColor: 'grey',
        borderWidth: 2,

        padding: 20,
    },
    text: {
        color: 'grey',

        marginLeft: 5
    }
});
