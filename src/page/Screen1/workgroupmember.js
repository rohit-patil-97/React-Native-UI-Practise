import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const WorkGroupMembers = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 20, marginLeft: 13, flexDirection: "row", justifyContent: "space-between" }}>
                    <Antdesign icon name="left" size={21} style={{ alignSelf: "center", marginTop: 5, color: Colors.blue }} onPress={() => navigation.navigate('workgroupfile')} />
                    <View style={{ alignSelf: "center", flexDirection: "column" }} >
                        <Text style={{ fontSize: 18, color: Colors.dark, fontFamily: FontFamily.semibold, alignSelf: "center", height: 25 }}>Workgroup name</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/lock.png')} style={{ alignSelf: "center" }} />
                            <Text style={{ color: Colors.grey, fontFamily: FontFamily.regular, fontSize: 12, paddingHorizontal: 2, paddingTop: 4 }}>23 members</Text>
                        </View>
                    </View>
                    <Ionicons icon name="ios-ellipsis-horizontal-circle" size={28} style={{ marginRight: 20, alignSelf: "center", color: Colors.blue, marginTop: 4 }} onPress={() => navigation.navigate('elearning')} />
                </View>
                {/* <View style={styles.outerview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 35 }}>
                            <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupchat')}>Chats</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 45 }}>
                            <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupfile')}>Files</Text>
                        </TouchableHighlight>
                        <View style={styles.RoundView}>
                            <TouchableHighlight style={styles.text_outer}>
                                <Text style={styles.SelectionText}>Members</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 35 }}>
                            <Text style={styles.SelectionText2}>Activities</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View> */}
                <View style={{
                    marginTop: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={styles.OuterSearch}>
                    <Antdesign icon name="search1" size={26} style={{ marginLeft: 20, alignSelf: "center", marginTop: 3, color: Colors.blue }} />
                    <TextInput
                        caretHidden={true}
                        style={styles.SearchInput}
                        placeholder="Search members"
                        placeholderTextColor={'grey'}
                        keyboardType="name-phone-pad"
                    />
                </View>
                <View style={{ marginTop: 15, marginLeft: 13, flexDirection: "row" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/un.png')} style={{ alignSelf: "center" }} />
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.TxtUser}>User Name</Text>
                        <Text style={styles.TxtPlaceholder}>placeholder</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 3,
                    marginLeft: 70,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={{ marginTop: 15, marginLeft: 13, flexDirection: "row" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/un.png')} style={{ alignSelf: "center" }} />
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.TxtUser}>User Name</Text>
                        <Text style={styles.TxtPlaceholder}>placeholder</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 3,
                    marginLeft: 70,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={{ marginTop: 15, marginLeft: 13, flexDirection: "row" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/un.png')} style={{ alignSelf: "center" }} />
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.TxtUser}>User Name</Text>
                        <Text style={styles.TxtPlaceholder}>placeholder</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 3,
                    marginLeft: 70,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={{ marginTop: 15, marginLeft: 13, flexDirection: "row" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/un.png')} style={{ alignSelf: "center" }} />
                    <View style={{ paddingHorizontal: 20, }}>
                        <Text style={styles.TxtUser}>User Name</Text>
                        <Text style={styles.TxtPlaceholder}>placeholder</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: 5,
                    marginLeft: 70,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />






            </ScrollView>
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
    outerview: {
        paddingVertical: 14,
        paddingHorizontal: 15,
    },
    text_outer: {
        marginHorizontal: 9,

    },
    SelectionText2: {
        color: Colors.grey,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 14
    },
    SelectionText: {
        color: Colors.white,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        alignSelf: "center",
        paddingTop: 10, marginRight: 2
    },
    RoundView: {
        height: 40,
        width: 119,
        backgroundColor: Colors.blue,
        borderRadius: 13,
        marginTop: 4
    },
    txt_jane: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        marginTop: 2,
        marginHorizontal: 20

    },
    txt_lorem: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        fontSize: 14,
    },
    Number: {
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.regular
    },
    OuterSearch: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17,
        marginStart: 16,
        borderRadius: 15,
        height: 55,
        width: 330,
        backgroundColor: "#F8F8FA"
    },
    SearchInput: {
        fontSize: 15, alignSelf: "center",
        height: 60, width: 150, paddingTop: 16,
        fontWeight: "600", paddingHorizontal: 10,
        fontFamily: FontFamily.regular,
        color: Colors.grey
    },
    SquareButton1: {
        marginTop: 20,
        marginHorizontal: 13,
        height: 55,
        width: 55,
        backgroundColor: "#F8F8FA",
        borderRadius: 10
    },
    InnerImgeStyle: {
        alignSelf: "center",
        marginVertical: 15
    },
    FolderText: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,

    },
    UserNameText: {
        fontWeight: "500",
        fontFamily: FontFamily.dark,
        color: Colors.grey,
        fontSize: 13
    },
    dte: {
        fontWeight: "500",
        fontFamily: FontFamily.dark,
        color: Colors.grey,
        fontSize: 13
    },
    TxtUser: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 17, marginTop: 6, height: 24
    },
    TxtPlaceholder: {
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 12

    },
    OuterSearch: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17,
        marginStart: 16,
        borderRadius: 15,
        height: 55,
        width: "96%",
        backgroundColor: "#F8F8FA"
    },
    SearchInput: {
        fontSize: 15, alignSelf: "center",
        height: 60, width: 250, paddingTop: 16,
        fontWeight: "600", paddingHorizontal: 13,
        fontFamily: FontFamily.semibold,
        color: Colors.grey
    },
});
export default WorkGroupMembers;