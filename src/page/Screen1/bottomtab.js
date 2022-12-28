import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import FeedScreen from './feed';
import FileScreen from './file';
import ProfileScreen from './profile';
import SettingScreen from './setting';
import ChatScreen from './chat';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import Octicons from 'react-native-vector-icons/Octicons';


function MyTabBar({ navigation }) {

    return (
        <View style={{ flexDirection: "row", marginBottom: 3, marginTop: 15, justifyContent: "space-between", marginLeft: 32, marginRight: 35, }}>

            <View style={{ flexDirection: "column" }}>
                <Octicons icon name="home" size={28} style={{ marginHorizontal: 7 }} onPress={() => navigation.navigate('Screen1')} />
                <Text style={styles.last_txt2}>Home</Text>
            </View>
            <View>
                <Ionicons icon name="ios-chatbubble-ellipses" size={28} style={{ color: "#554AF0", marginHorizontal: 4 }} onPress={() => navigation.navigate('chat')} />
                <Text style={styles.last_txt1}>Chat</Text>
            </View>
            <View>
                <FeatherIcon icon name="folder-minus" size={28} style={{ color: Colors.grey, margintop: 1, marginHorizontal: 2 }} onPress={() => navigation.navigate('file')} />
                <Text style={styles.last_txt2}>Files</Text>
            </View>
            <View>
                <FeatherIcon icon name="user" size={28} style={{ color: Colors.grey, marginHorizontal: 5 }} onPress={() => navigation.navigate('profile')} />
                <Text style={styles.last_txt2}>Profile</Text>
            </View>
        </View>
    );
}
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return (
        <Tab.Navigator tabBar={(props) => <MyTabBar  {...props} screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'file') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        })} />}>
            <Tab.Screen name="feed" component={FeedScreen} options={{ headerShown: false }} />
            <Tab.Screen name="file" component={FileScreen} options={{ headerShown: false }} />
            <Tab.Screen name='profile' component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name='setting' component={SettingScreen} options={{ headerShown: false }} />
            <Tab.Screen name='chat' component={ChatScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    last_txt1: {
        marginTop: 9,
        color: Colors.dark,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 13,
    },
    last_txt2: {
        marginTop: 9,
        color: Colors.grey,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 13,
    },

});