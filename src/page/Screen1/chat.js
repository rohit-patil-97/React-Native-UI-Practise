import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { rotationHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Chat = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderTitle}>Chat</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 2 }}>
                    <AntDesign name="search1" size={27} style={{ color: Colors.blue, paddingHorizontal: 18 }} />
                    <AntDesign name="plus" size={27} style={{ color: Colors.blue, marginRight: 20 }} onPress={() => navigation.navigate('workgroupchat')} />
                </View>
            </View>
            <View
                style={{
                    marginTop: 13,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{}}>
                    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, marginTop: 20, marginHorizontal: 10 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
                            <Text style={styles.txt_jane} onPress={() => navigation.navigate('directchat')}>Jane Cooper</Text>
                            <Text style={styles.txt_lorem} onPress={() => navigation.navigate('')}>Amet minim mollit non{'\n'}deserunt ullamco est sit ...</Text>
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
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
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

                    <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, marginTop: 20, marginHorizontal: 10 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/avatar.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-evenly", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
                            <Text style={styles.txt_jane}>Brooklyn Simon</Text>
                            <Text style={styles.txt_Amet}>Amet minim mollit non?</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 7 }}>
                            <Text style={styles.Number}>12.56</Text>
                            <TouchableOpacity style={{ height: 30, width: 40, backgroundColor: Colors.blue, borderRadius: 20 }}>
                                <Text style={{ color: Colors.white, alignSelf: "center", marginTop: 5, fontFamily: FontFamily.regular }}>12</Text>
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
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/chatpic.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
                            <Text style={styles.txt_jane}>Dianne Russell</Text>
                            <Text style={styles.txt_lorem2}>Amet minim mollit non deserunt {'\n'}ullamco est sit ...</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 7, flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/tickmark2.png')} style={{ tintColor: Colors.blue, marginRight: 3 }} />
                            <Text style={styles.Number}>10.11</Text>

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
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/chatpic2.png')} style={{ height: 58, width: 58, }} />
                        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
                            <Text style={styles.txt_jane}>Wade Warren</Text>
                            <Text style={styles.txt_lorem}>Amet minim mollit non{'\n'}deserunt?</Text>
                        </View>
                        <View style={{ marginTop: 5, marginRight: 7, flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/tickmark.png')} style={{ tintColor: Colors.blue, marginRight: 3 }} />
                            <Text style={styles.Number}>9.24</Text>

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
            <View style={{
                marginLeft: 2,
                marginRight: 2,
                borderBottomColor: 'grey',
                borderBottomWidth: StyleSheet.hairlineWidth
            }} />
        </SafeAreaView>

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
    },
    Number: {
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.regular
    },
    txt_Amet: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        fontSize: 14,
    },
    txt_lorem2: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        fontSize: 14,
        width: 230,
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







});
export default Chat;