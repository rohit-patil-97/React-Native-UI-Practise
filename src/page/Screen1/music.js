import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { rotationHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const Music = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderTitle}>Morning, Jane</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 2 }}>
                    <AntDesign name="search1" size={25} style={{ color: Colors.blue, paddingHorizontal: 22 }} />
                    <Feather icon name="settings" size={25} style={{ color: Colors.blue, marginRight: 20 }} onPress={() => navigation.navigate('setting')} />
                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <ScrollView horizontal style={{ flexDirection: "row", marginTop: 18 }}>
                            <View style={{ flexDirection: "column", marginLeft: 19, marginHorizontal: 2 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Cover.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic} onPress={() => navigation.navigate('musicplay')}>New Music Daily</Text>
                                <Text style={styles.TxtContain}>Contains your genres</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10, marginHorizontal: 2 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Cover2.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic}>Back to the 90s</Text>
                                <Text style={styles.TxtContain}>Contains your genres</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Cover2.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic}>Back to the 90s</Text>
                                <Text style={styles.TxtContain}>Contains your genres</Text>
                            </View>
                        </ScrollView>
                        <View
                            style={{
                                marginTop: 20,
                                marginLeft: 10,
                                marginRight: 10,
                                borderBottomColor: '#E2E3E4',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }} />
                        <View style={{ marginTop: 20, marginLeft: 14, marginRight: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.TxtMade}>Made for you</Text>
                            <TouchableOpacity
                                style={styles.OuterTouchable}>
                                <Text style={styles.TxtSeeAll}>SEE ALL</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView horizontal style={{ flexDirection: "row", marginTop: 10 }}>
                            <View style={{ flexDirection: "column", marginLeft: 16, marginHorizontal: 2 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Down1.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic}>Three Days Rain</Text>
                                <Text style={styles.TxtContain}>Alternative</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10, marginHorizontal: 2 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Down2.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic}>Max Korzh</Text>
                                <Text style={styles.TxtContain}>Hip hop</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Down2.png')} style={{ marginTop: 5, }} />
                                <Text style={styles.TxtMusic}>Joji</Text>
                                <Text style={styles.TxtContain}>R&B</Text>
                            </View>
                        </ScrollView>
                        <View
                            style={{
                                marginTop: 20,
                                marginLeft: 10,
                                marginRight: 10,
                                borderBottomColor: '#E2E3E4',
                                borderBottomWidth: StyleSheet.hairlineWidth,
                            }} />
                        <View style={{ marginTop: 20, marginLeft: 14 }}>
                            <Text style={styles.TxtMade}>Recently played</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
            <View
                style={{
                    marginTop: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />

            <View style={{ flexDirection: "row", marginBottom: 9, marginTop: 15, justifyContent: "space-between", marginLeft: 32, marginRight: 35 }}>
                <View style={{ flexDirection: "column" }}>
                    <MaterialIcons name="home-filled" size={32} style={{ color: Colors.blue }} />
                    <Text style={styles.last_txt1}>Home</Text>
                </View>

                <View>
                    <AntDesign icon name="search1" size={28} style={{ color: Colors.grey, marginTop: 5, marginHorizontal: 6 }} />
                    <Text style={styles.last_txt2}>Search</Text>
                </View>

                <View style={{ marginRight: 3 }}>
                    <MaterialIcons icon name="list-alt" size={32} style={{ color: Colors.grey, marginTop: 4, marginHorizontal: 5 }} />
                    <Text style={styles.last_txt2}>My List</Text>
                </View>


            </View>
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
        fontSize: 20,
        color: Colors.dark,
        fontFamily: FontFamily.semibold
    },
    TxtMusic: {
        marginTop: 7,
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        marginLeft: 6,
        height: 24,
    },
    TxtContain: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.dark,
        fontSize: 13,
        marginLeft: 6, lineHeight: 16
    },
    TxtMade: {
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.bold,
        fontSize: 19
    },
    OuterTouchable: {
        height: 32, width: 75,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.blue,
    },
    TxtSeeAll: {
        fontWeight: "600",
        color: Colors.blue,
        fontFamily: FontFamily.semibold,
        alignSelf: "center",
        marginTop: 4
    },
    last_txt1: {
        marginTop: 13,
        color: Colors.black,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        fontSize: 12, lineHeight: 13,
    },
    last_txt2: {
        marginTop: 10,
        color: Colors.grey,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 12,
    },





});
export default Music;