import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import Antdesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const WorkGroupFile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 20, marginLeft: 13, flexDirection: "row", justifyContent: "space-between" }}>
                    <Antdesign icon name="left" size={21} style={{ alignSelf: "center", marginTop: 5, color: Colors.blue }} onPress={() => navigation.navigate('workgroupchat')} />
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
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupchat')}>Chats</Text>
                        </TouchableHighlight>
                        <View style={styles.RoundView}>
                            <TouchableHighlight style={styles.text_outer}>
                                <Text style={styles.SelectionText}>Files</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 26 }}>
                            <Text style={styles.SelectionText2} onPress={() => navigation.navigate('workgroupmember')}>Members</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 20 }}>
                            <Text style={styles.SelectionText2}>Activities</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View> */}
                <View style={{
                    marginTop: 3,
                    marginLeft: 20,
                    marginRight: 20,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={styles.OuterSearch}>
                    <Antdesign icon name="search1" size={26} style={{ marginLeft: 20, alignSelf: "center", marginTop: 3, color: Colors.blue }} />
                    <TextInput
                        caretHidden={true}
                        style={styles.SearchInput}
                        placeholder="Search files"
                        placeholderTextColor={'grey'}
                        keyboardType="name-phone-pad"
                    />
                </View>
                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginTop: 1 }}>
                        <TouchableOpacity
                            style={styles.SquareButton1}>
                            <View >
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/file.png')} style={styles.InnerImgeStyle} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                            <Text style={styles.FolderText}>Document name.img</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.UserNameText}>User name</Text>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                <Text style={styles.dte}>8 March 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 33 }}>
                        <Icon icon name="dots-vertical" size={20} />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 14,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />

                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginTop: 1 }}>
                        <TouchableOpacity
                            style={styles.SquareButton1}>
                            <View >
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc.png')} style={styles.InnerImgeStyle} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                            <Text style={styles.FolderText}>Document name.pdf</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.UserNameText}>User name</Text>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                <Text style={styles.dte}>8 March 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 33 }}>
                        <Icon icon name="dots-vertical" size={20} />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 14,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />

                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginTop: 1 }}>
                        <TouchableOpacity
                            style={styles.SquareButton1}>
                            <View >
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc2.png')} style={styles.InnerImgeStyle} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                            <Text style={styles.FolderText}>Document name.doc</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.UserNameText}>User name</Text>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                <Text style={styles.dte}>8 March 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 33 }}>
                        <Icon icon name="dots-vertical" size={20} />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 14,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />

                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginTop: 1 }}>
                        <TouchableOpacity
                            style={styles.SquareButton1}>
                            <View >
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc3.png')} style={styles.InnerImgeStyle} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                            <Text style={styles.FolderText}>Document name.xls</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.UserNameText}>User name</Text>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                <Text style={styles.dte}>8 March 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 33 }}>
                        <Icon icon name="dots-vertical" size={20} />
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />

                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginTop: 1 }}>
                        <TouchableOpacity
                            style={styles.SquareButton1}>
                            <View >
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc4.png')} style={styles.InnerImgeStyle} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                            <Text style={styles.FolderText}>Document name.format</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.UserNameText}>User name</Text>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                <Text style={styles.dte}>8 March 2021</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 33 }}>
                        <Icon icon name="dots-vertical" size={20} />
                    </View>
                </View>

                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
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
        marginHorizontal: 29,
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
        height: 43,
        width: 99,
        backgroundColor: Colors.blue,
        borderRadius: 13,
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
        width: "96%",
        backgroundColor: "#F8F8FA"
    },
    SearchInput: {
        fontSize: 15, alignSelf: "center",
        height: 60, width: 150, paddingTop: 16,
        fontWeight: "600", paddingHorizontal: 13,
        fontFamily: FontFamily.semibold,
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
        fontSize: 15
    },
    UserNameText: {
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
        fontSize: 13
    },
    dte: {
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
        fontSize: 13
    },
});
export default WorkGroupFile;