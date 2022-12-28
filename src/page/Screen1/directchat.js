import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';


const DirectChat = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <AntDesign name="left" size={22} style={{ color: Colors.blue, marginTop: 4 }} onPress={() => navigation.navigate('chat')} />
                <View style={{ flexDirection: "column", alignItems: "center", marginTop: 5 }}>
                    <Text style={styles.HeaderTitle1}>Jane Cooper</Text>
                    <Text style={styles.HeaderTitle2}>online</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('userdetail')}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 40, width: 40, marginRight: 15 }} />
                </TouchableOpacity>

            </View>
            <View
                style={{
                    marginTop: 12,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.OuterContainer}>
                        <TouchableOpacity
                            style={styles.Round1}>
                            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                                <Text style={styles.lorem1} onPress={() => navigation.navigate('workgroupchat')}>Lorem ipsum dolor</Text>
                                <Text style={styles.dte1}>18:24</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Round2}>
                            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                                <Text style={styles.lorem2}>Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit.{'\n'}Donec fringilla quam eu faci{'\n'}lisis mollis.</Text>
                                <Text style={styles.dte1}>18:24</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 25, alignSelf: "center" }}>
                        <TouchableOpacity
                            style={styles.Round3}>
                            <Text style={styles.Today}>Today</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OuterContainer2}>
                        <TouchableOpacity
                            style={styles.Round4}>
                            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                                <Text style={styles.lorem3}>Lorem ipsum dolor</Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                                    <Text style={styles.dte3}>18:24</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/tickmark.png')} style={{ marginTop: 10, marginRight: 10 }} />

                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Round5}>
                            <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                                <Text style={styles.lorem3}>Lorem ipsum dolor sit amet,{'\n'}consectetur adipiscing elit.{'\n'}Donec fringilla quam eu faci{'\n'}lisis mollis.</Text>
                                <View style={{ flexDirection: "row", }}>
                                    <Text style={styles.dte2}>18:24</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/tickmark.png')} style={{ marginTop: 2 }} />

                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 12, alignSelf: "flex-end", }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/scrolldown.png')} style={{ height: 60, width: 60 }} />
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

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#F8F8FA", height: 85, width: "100%" }}>
                <FeatherIcon icon name="paperclip" size={32} style={{ color: Colors.grey, marginLeft: 20, marginTop: 16 }} onPress={() => ('')} />
                <View style={{ marginHorizontal: 17, flex: 1, marginTop: 2 }}>
                    <TextInput
                        caretHidden={true}
                        style={styles.input}
                        placeholder="Wow, Let’s type something!"
                        keyboardType="default"
                        activeUnderlineColor='white'
                        underlineColor='white'
                        placeholderTextColor="#686777"
                    />
                </View>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/frame.png')} style={{ height: 40, width: 40, marginRight: 15, marginTop: 14 }} />
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
    HeaderTitle1: {
        fontSize: 17,
        fontFamily: FontFamily.semibold,
        color: Colors.black,
        lineHeight: 20
    },
    HeaderTitle2: {
        fontFamily: FontFamily.semibold,
        color: Colors.blue, lineHeight: 18
    },
    OuterContainer: {
        marginTop: 28,
        marginLeft: 20,
    },
    Round1: {
        height: 72,
        width: 175,
        backgroundColor: "#F8F8FA",
        borderRadius: 18,
        borderBottomLeftRadius: 0
    },
    lorem1: {
        fontWeight: "400",
        color: Colors.black,
        fontFamily: FontFamily.regular,
        fontSize: 16,
        alignSelf: "center",
        marginTop: 6
    },
    dte1: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.regular,
        alignSelf: "flex-end",
        marginRight: 15,
        fontSize: 13
    },
    Round2: {
        marginTop: 5,
        height: 135,
        width: 255,
        backgroundColor: "#F8F8FA",
        borderRadius: 18,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 0,
    },
    lorem2: {
        fontWeight: "400",
        color: Colors.black,
        fontFamily: FontFamily.regular,
        fontSize: 16,
        alignSelf: "center",
        marginLeft: 8,
        marginTop: 6
    },
    Round3: {
        height: 30,
        width: 80,
        backgroundColor: "#F8F8FA",
        borderRadius: 19,
    },
    Today: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        alignSelf: "center",
        marginTop: 5,
        fontSize: 14
    },
    OuterContainer2: {
        marginTop: 25,
        marginLeft: 20,
        alignSelf: "flex-end"
    },
    Round4: {
        height: 72,
        width: 175,
        backgroundColor: Colors.blue,
        borderRadius: 14,
        borderBottomRightRadius: 5,
        alignSelf: "flex-end",
        marginRight: 10
    },
    Round5: {
        marginTop: 5,
        height: 135,
        width: 255,
        backgroundColor: Colors.blue,
        borderRadius: 14,
        borderBottomRightRadius: 5,
        marginRight: 10,
    },
    lorem3: {
        fontWeight: "400",
        color: Colors.white,
        fontFamily: FontFamily.regular,
        fontSize: 16,
        alignSelf: "center",
        marginTop: 6
    },
    dte2: {
        fontWeight: "500",
        color: '#9992F6',
        fontFamily: FontFamily.regular,
        marginRight: 15,
        marginHorizontal: 175,
        fontSize: 13
    },
    dte3: {
        fontWeight: "500",
        color: '#9992F6',
        fontFamily: FontFamily.regular,
        marginRight: 18,
        // marginHorizontal: 10,
        marginTop: 7,
        fontSize: 13
    },
    input: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        width: 260,
        marginTop: 5,
        height: 40,
        fontSize: 15,
        marginLeft: 5
    },
    OuterInput: {
        alignItems: "flex-start",
        backgroundColor: Colors.white,
        width: 260, height: 40,
        marginTop: 10, borderRadius: 18
    },
    input: {
        fontWeight: "400",
        backgroundColor: "white",
        fontFamily: FontFamily.semibold, color: Colors.black,
        width: "99%",
        marginTop: 10,
        height: 40,
        fontSize: 16,
        borderRadius: 20,
        borderTopLeftRadius: 20, paddingVertical: 5, paddingLeft: 8,
        borderTopRightRadius: 20
    },







});
export default DirectChat;