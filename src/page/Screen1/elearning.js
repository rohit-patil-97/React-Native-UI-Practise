import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, ImageBackground, Progress, TouchableHighlight, Animated } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import LinearGradient from 'react-native-linear-gradient';
import { elastic } from "react-native/Libraries/Animated/Easing";
import { TextInput } from "react-native-paper";
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

const Elearning = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#04021D" translucent={false} />
            <ScrollView>
                <View style={{ backgroundColor: Colors.dark, height: 169, width: "100%", borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}>
                    <Text style={styles.TxtSunday}>SUNDAY 30 MAY</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }}>
                        <Text style={styles.TxtMor}>Morning, Jane</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ marginRight: 20, height: 45, width: 45 }} />
                    </View>
                    <View style={styles.OuterSearch}>
                        <TextInput
                            caretHidden={true}
                            style={styles.SearchInput}
                            placeholder="Search your best course..."
                            placeholderTextColor={"#D2D2D7"}
                            keyboardType="name-phone-pad"
                            underlineColor="#F8F8FA" />
                        <Antdesign name="search1" size={25} style={{ color: Colors.blue, marginTop: 1, marginRight: 15 }} />
                    </View>
                </View>

                <View style={styles.outerview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.RoundView}>
                            <TouchableHighlight style={styles.text_outer}>
                                <Text style={styles.SelectionText} onPress={() => navigation.navigate('elearningdetail')}>All courses</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 27 }}>
                            <Text style={styles.SelectionText2}>Design</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 9 }}>
                            <Text style={styles.SelectionText2}>Developing</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 9 }}>
                            <Text style={styles.SelectionText2}>Managment</Text>
                        </TouchableHighlight>
                    </ScrollView>
                </View>
                <View style={{
                    marginTop: 1,
                    marginLeft: 10,
                    marginRight: 10,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth
                }} />
                <View style={{ marginTop: 12, marginLeft: 15, flexDirection: "row", justifyContent: "space-between", marginRight: 15 }}>
                    <Text style={styles.TxtPop} >Popular courses</Text>
                    <TouchableHighlight
                        style={styles.OuterHightlight}>
                        <Text style={styles.TxtSee}>SEE ALL</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.ImageStyle}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Card.png')} />
                </View>

            </ScrollView>
            <View style={{
                marginTop: 15,
                marginLeft: 25,
                marginRight: 25,
                borderBottomColor: '#E2E3E4',
                borderBottomWidth: StyleSheet.hairlineWidth
            }} />

            <View style={{ flexDirection: "row", marginBottom: 5, marginTop: 5, justifyContent: "space-between", marginLeft: 32, marginRight: 35 }}>
                <View style={{ flexDirection: "column" }}>
                    <MaterialIcons icon name="home-filled" size={32} style={{ marginTop: 9, marginHorizontal: 9, color: Colors.blue }} />
                    <Text style={styles.last_txt1} onPress={() => navigation.navigate('feed')}>Home</Text>
                </View>
                <View>
                    <Feather icon name="folder-minus" size={27} style={{ height: 28, width: 28, color: Colors.grey, marginTop: 10, marginHorizontal: 25 }} />
                    <Text style={styles.last_txt2}>My Courses</Text>
                </View>
                <View>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 30, width: 30, marginTop: 10, marginHorizontal: 2 }} />
                    <Text style={styles.last_txt2} onPress={() => navigation.navigate('profile')}>Profile</Text>
                </View>
            </View>
        </SafeAreaView >
    );
};
const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: Colors.white
    },
    TxtSunday: {
        color: "#D2D2D7",
        marginTop: 30,
        marginLeft: 15,
        fontFamily: FontFamily.semibold,
        fontSize: 12
    },
    TxtMor: {
        fontWeight: "600",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        fontSize: 25,
        marginLeft: 15
    },
    OuterSearch: {
        flexDirection: "row",
        alignItems: "center", justifyContent: "space-between",
        marginTop: 10,
        marginStart: 15,
        borderRadius: 10,
        height: 49,
        width: "95%",
        backgroundColor: "#F8F8FA"
    },
    SearchInput: {
        fontSize: 16,
        height: 20, width: 230,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        backgroundColor: "transparent",
        color: Colors.grey,
    },
    outerview: {
        paddingVertical: 29,
        paddingHorizontal: 15,
    },
    text_outer: {
        marginHorizontal: 9,
    },
    SelectionText2: {
        color: Colors.grey,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 14
    },
    SelectionText: {
        color: Colors.white,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        alignSelf: "center",
        paddingTop: 12, marginRight: 2
    },
    RoundView: {
        height: 44,
        width: 120,
        backgroundColor: Colors.dark,
        borderRadius: 13,
    },
    TxtPop: {
        color: Colors.black,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 21
    },
    OuterHightlight: {
        height: 30, width: 70,
        borderColor: Colors.blue,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 5, marginRight: 10
    },
    TxtSee: {
        alignSelf: "center",
        marginTop: 4,
        color: Colors.blue,
        fontFamily: FontFamily.semibold,
    },
    ImageStyle: {
        marginTop: 20,
        marginLeft: 15, marginRight: 15,
        alignSelf: "center"
    },
    last_txt1: {
        marginTop: 9,
        color: Colors.dark,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        fontSize: 13, marginHorizontal: 7
    },
    last_txt2: {
        marginTop: 13,
        color: Colors.grey,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        marginLeft: 2,
        fontSize: 12, marginHorizontal: 8,
    },



});
export default Elearning;