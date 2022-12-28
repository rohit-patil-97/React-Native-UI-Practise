import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const WorkGroupChat = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 20, marginLeft: 13, flexDirection: "row", justifyContent: "space-between" }}>
                    <Antdesign icon name="left" size={21} style={{ alignSelf: "center", marginTop: 5, color: Colors.blue }} />
                    <View style={{ alignSelf: "center", flexDirection: "column" }} >
                        <Text style={{ fontSize: 18, color: Colors.dark, fontFamily: FontFamily.semibold, alignSelf: "center", height: 25 }}>Workgroup name</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/lock.png')} style={{ alignSelf: "center" }} />
                            <Text style={{ color: Colors.grey, fontFamily: FontFamily.regular, fontSize: 12, paddingHorizontal: 2, paddingTop: 4 }}>23 members</Text>
                        </View>
                    </View>
                    <Ionicons icon name="ios-ellipsis-horizontal-circle" size={28} style={{ marginRight: 20, alignSelf: "center", color: Colors.blue, marginTop: 4 }} />
                </View>
                {/* <View style={styles.outerview}>
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
                </View> */}
                <View style={{
                    marginTop: 2,
                    marginLeft: 20,
                    marginRight: 20,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View >
                    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, marginTop: 20, marginHorizontal: 10 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 15 }}>
                            <Text style={styles.txt_jane}>Jane Cooper</Text>
                            <Text style={styles.txt_lorem}>Amet minim mollit non{'\n'}deserunt ullamco est sit ...</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 7 }}>
                            <Text style={styles.Number}>19.11</Text>
                            <TouchableOpacity style={{ height: 30, width: 30, backgroundColor: Colors.blue, borderRadius: 20 }}>
                                <Text style={{ color: Colors.white, alignSelf: "center", marginTop: 5, fontFamily: FontFamily.regular }}>1</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, marginTop: 20, marginHorizontal: 10 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips2.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 15 }}>
                            <Text style={styles.txt_jane}>Leslie Alexander</Text>
                            <Text style={styles.txt_lorem}>Amet minim mollit non{'\n'}deserunt?</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 7, flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/tickmark.png')} style={{ tintColor: Colors.blue, marginRight: 3 }} />
                            <Text style={styles.Number}>18.24</Text>

                        </View>
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />
                </View>



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
        paddingVertical: 20,
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
        height: 42,
        width: 90,
        backgroundColor: Colors.blue,
        borderRadius: 13,
    },
    txt_jane: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        marginTop: 2

    },
    txt_lorem: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        fontSize: 14,
        lineHeight: 19
    },
    Number: {
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.regular
    },





});
export default WorkGroupChat;