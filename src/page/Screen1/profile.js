import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, ImageBackground } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const ProfileInfo = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderTitle}>Profile</Text>
                <View style={{ flexDirection: "row", marginRight: 20 }}>
                    <SimpleLineIcons name="settings" size={23} style={{ color: Colors.blue, marginRight: 10, marginTop: 7, marginHorizontal: 15 }} onPress={() => navigation.navigate('setting')} />
                </View>
            </View>
            <View
                style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginLeft: 20, }}>
                        <View style={{ borderColor: "#EEEDFE", borderWidth: 2, borderRadius: 60, padding: 3 }}>
                            <ImageBackground source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/newprofileimg.png')}
                                style={{ height: 60, width: 60 }} >
                                <View style={{ position: "absolute", bottom: 0, right: 0, borderRadius: 40 / 2, backgroundColor: "#15AA2C", height: 11, width: 11, }}></View>
                            </ImageBackground>
                        </View>

                        <View style={{ flexDirection: "column", flex: 1, marginLeft: 15, alignSelf: "center" }}>
                            <Text style={styles.TxtRob} onPress={() => navigation.navigate('editprofile')}>Robert Fox</Text>
                            <Text style={styles.TxtIos}>iOS Developer</Text>
                        </View>
                    </View>

                    <View style={styles.OuterSearch}>
                        <TextInput
                            caretHidden={true}
                            style={styles.WriteText}
                            placeholder="Yo guys!"
                            keyboardType="name-phone-pad"
                            placeholderTextColor="#04021D"
                        />
                        <MaterialIcons name="mode-edit" size={22} style={{ marginRight: 25 }} onPress={() => navigation.navigate('editprofile')} />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>My Posts</Text>
                        <Icon name={"right"} size={20} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>My Files</Text>
                        <Icon name={"right"} size={20} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 14,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, marginLeft: 20 }}>
                        <Text style={styles.TxtPost}>My Work Profile</Text>
                        <Icon name={"right"} size={20} style={{ marginRight: 25 }} />
                    </View>
                    <View style={{
                        marginTop: 14,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ marginTop: 35, marginLeft: 20 }}>
                        <Text style={styles.AwardText}>AWARDS & TASKS</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.BottomButton1}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: 110, }}>

                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/half.png')} style={{ marginLeft: 10, marginTop: 10 }} />
                            <View style={{ flexDirection: "column", paddingTop: 14, marginHorizontal: 15, width: 110 }}>
                                <Text style={styles.TxtPosts}>Posts</Text>
                                <Text style={styles.TxtAward}>Get award for posts</Text>
                            </View>

                            <View style={{}}>
                                <TouchableOpacity
                                    style={styles.InnerBottomButton}>
                                    <View style={{ flexDirection: "row", flex: 1 }}>
                                        <Text style={styles.inner_txt1}>CREATE</Text>
                                        <Icon name="plus" size={20} style={{ marginLeft: 10, marginRight: 2, marginTop: 6, color: Colors.white }} />
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </TouchableOpacity>

                    <View style={{ marginTop: 20, flexDirection: "row", }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/half2.png')} style={{ marginLeft: 26, tintColor: "grey" }} />
                        <Text style={styles.TxtUpload}>Upload photo</Text>
                    </View>
                </View>
                {/* <View style={{
                    marginTop: 2,
                    marginLeft: 20,
                    marginRight: 20,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} /> */}
            </ScrollView>

            {/* <View
                style={{
                    marginTop: 30,
                    marginLeft: 2,
                    marginRight: 2,
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} /> */}

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
        fontSize: 25,
        color: Colors.dark,
        fontFamily: FontFamily.semibold
    },
    InnerImgeStyle: {
        height: 60,
        width: 60,
    },
    TxtRob: {
        marginTop: 6,
        fontSize: 18,
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.semibold
    },
    TxtIos: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 12,
    },
    OuterSearch: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 17, marginStart: 17,
        borderRadius: 15,
        height: 55,
        width: "90%", marginLeft: 25, marginRight: 25,
        backgroundColor: "#F8F8FA", justifyContent: "space-between", alignSelf: "center"
    },
    WriteText:
    {
        fontWeight: "500",
        color: Colors.black,
        fontFamily: FontFamily.dark,
        fontSize: 17,
        width: 90, height: 90,
        marginLeft: 20,
    },
    TxtPost: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16
    },
    AwardText: {
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13
    },
    BottomButton1: {
        height: 70,
        width: "90%",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#F8F8FA",
        alignSelf: "center"
    },
    BottomImg: {
        marginTop: 5,
        height: 45,
        width: 45,
        marginLeft: 18
    },
    BottomText: {
        marginTop: 15,
        color: Colors.dark,
        fontWeight: "600",
        alignItems: "flex-start",
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15,
    },
    Bottomimg2: {
        marginRight: 20,
        marginTop: 20
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
    TxtPosts: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15
    },
    TxtAward: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 12, height: 20, width: 170
    },
    InnerBottomButton: {
        height: 33,
        width: 100,
        backgroundColor: Colors.blue,
        marginRight: 10,
        marginTop: 18,
        borderRadius: 11,
    },
    inner_txt1: {
        color: Colors.white,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        marginLeft: 12,
        marginTop: 7,
        fontSize: 13
    },
    TxtUpload: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        marginHorizontal: 20, alignSelf: "center"
    }



});
export default ProfileInfo;