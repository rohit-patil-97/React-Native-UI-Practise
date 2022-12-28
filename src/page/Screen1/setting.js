import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Setting = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", flex: 1, marginTop: 25, marginLeft: 20, }}>
                <Icon name="left" size={20} style={{ color: Colors.blue, marginRight: 10, marginTop: 6, marginHorizontal: 1 }} onPress={() => navigation.navigate('profile')} />
                <Text style={styles.HeaderTitle}>Settings</Text>

            </View>
            <View
                style={{
                    marginTop: 15,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 20, marginLeft: 19 }}>
                        <Text style={styles.TxtAcc}>ACCOUNT SETTINGS</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>Personal information</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rightarrow.png')} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>Notifications</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rightarrow.png')} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                    <View style={{ marginTop: 20, marginLeft: 19 }}>
                        <Text style={styles.TxtTools}>Tools</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>Siri Settings</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rightarrow.png')} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                    <View style={{ marginTop: 20, marginLeft: 19 }}>
                        <Text style={styles.TxtTools}>LEGAL</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>Terms  of Service</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rightarrow.png')} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>Rivasy Settings</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rightarrow.png')} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                    <View style={{ marginTop: 20, marginLeft: 19 }}>
                        <Text style={styles.TxtVersion}>VERSION 20.30 (201817)</Text>
                    </View>
                    <View style={{
                        marginTop: 40,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                </View>
            </ScrollView>

            {/* <View style={{ flexDirection: "row", marginBottom: 25, marginTop: 15, justifyContent: "space-between", marginLeft: 32, marginRight: 35 }}>
                <View style={{ flexDirection: "column" }}>
                    <Octicons icon name="home" size={28} style={{ marginHorizontal: 6 }} onPress={() => navigation.navigate('Screen1')} />
                    <Text style={styles.last_txt2}>Home</Text>
                </View>

                <View>
                    <Ionicons icon name="chatbubble-ellipses-outline" size={28} style={{ color: Colors.grey, marginHorizontal: 4 }} onPress={() => navigation.navigate('chat')} />
                    <Text style={styles.last_txt2}>Chat</Text>
                </View>

                <View>
                    <FeatherIcon icon name="folder-minus" size={28} style={{ color: Colors.grey, margintop: 1, marginHorizontal: 2 }} onPress={() => navigation.navigate('file')} />
                    <Text style={styles.last_txt2}>Files</Text>
                </View>

                <View>
                    <FontAwesome5 icon name="user-alt" size={28} style={{ color: Colors.blue, marginHorizontal: 5 }} onPress={() => navigation.navigate('profile')} />
                    <Text style={styles.last_txt1}>Profile</Text>
                </View>
            </View> */}

        </SafeAreaView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: Colors.white
    },
    HeaderTitle: {
        fontWeight: "600",
        fontSize: 18,
        color: Colors.black,
        fontFamily: FontFamily.bold,
        alignSelf: "center",
        marginHorizontal: 110

    },

    last_txt1: {
        marginTop: 10,
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
    TxtAcc: {
        fontWeight: "600",
        color: Colors.grey,
        fontSize: 12,
        fontFamily: FontFamily.semibold,
    },
    TxtTools: {
        fontWeight: "600",
        color: Colors.grey,
        fontSize: 13,
        fontFamily: FontFamily.semibold,
    },
    TxtPost: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16
    },
    TxtVersion: {
        fontWeight: "600",
        color: Colors.grey,
        fontSize: 10,
        fontFamily: FontFamily.bold,
        alignSelf: "center",
        marginTop: 6,
    },




});
export default Setting;