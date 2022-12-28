import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import WorkGroupFileScreen from './workgroupfile';
import WorkGroupChatScreen from './workgroupchat';
import WorkGroupMemberScreen from './workgroupmember';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native-gesture-handler';

function TopTabBar({ navigation }) {

    return (
        <View style={styles.outerview}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.RoundView}>
                    <TouchableHighlight style={styles.text_outer}>
                        <Text style={styles.SelectionText} onPress={() => navigation.navigate('workgroupchat')}>Chats</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 25 }}>
                    <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupfile')
                    }>Files</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 9 }}>
                    <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupmember')}>Members</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 27 }}>
                    <Text style={styles.SelectionText2}>Activities</Text>
                </TouchableHighlight>
            </ScrollView>
        </View>
    );
}
const Tab = createMaterialTopTabNavigator();
export default function TopTabNavigation() {
    return (
        <Tab.Navigator tabBar={(props) => <TopTabBar  {...props} />}>
            <Tab.Screen name="workgroupchat" component={WorkGroupChatScreen} options={{ headerShown: false }} />
            <Tab.Screen name="workgroupfile" component={WorkGroupFileScreen} />
            <Tab.Screen name="workgroupmember" component={WorkGroupMemberScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    outerview:
    {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    SelectionText2:
    {
        color: Colors.grey,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 14
    },
    SelectionText:
    {
        color: Colors.white,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        alignSelf: "center",
        paddingTop: 10, marginRight: 2
    },
    RoundView:
    {
        height: 42,
        width: 90,
        backgroundColor: Colors.blue,
        borderRadius: 13,
    },
});