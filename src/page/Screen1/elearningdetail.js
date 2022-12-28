import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, ImageBackground, Progress, TouchableHighlight } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import Antdesign from 'react-native-vector-icons/AntDesign';

const ElearningDetails = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={{ flexGrow: 1 }}>

                <ImageBackground
                    style={styles.background}
                    source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/card2.png')}
                >

                    <View style={styles.wrapper}>
                        <View style={styles.header}>
                            <Antdesign icon name="left" size={23} style={{ color: Colors.white, marginLeft: 4 }} onPress={() => navigation.navigate('elearning')} />
                            <Text style={styles.title}>Course Details</Text>
                            <Antdesign icon name="staro" size={28} style={{ color: Colors.white, marginRight: 7 }} />
                        </View>
                    </View>

                </ImageBackground>
                <View style={styles.outerview}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.RoundView}>
                            <TouchableHighlight style={styles.text_outer}>
                                <Text style={styles.SelectionText}>Details</Text>
                            </TouchableHighlight>
                        </View>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 38 }}>
                            <Text style={styles.SelectionText2}>Lessons</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={{ marginVertical: 12, paddingHorizontal: 23 }}>
                            <Text style={styles.SelectionText2}>Reviews (127)</Text>
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
                <View style={styles.outerview}>
                    <Text style={styles.TxtAbout}>About this course</Text>
                    <Text style={styles.TxtLearn}>Learning to model is crucial for anyone trying to{'\n'}master Blender. As the foundation of everything{'\n'}in 3D graphics, modeling is a necessary hurdle{'\n'}that every student will need to leap.</Text>
                    <Text style={styles.TxtOn}>On this course teaches the fundamentals of</Text>
                    <Text style={styles.TxtModel}>modeling. But instead of doing a car or a</Text>
                </View>

            </ScrollView>
            <TouchableOpacity
                style={styles.BottomButton1}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", width: 110 }}>
                    <View style={{ flexDirection: "column", paddingTop: 14, marginHorizontal: 15, width: 110 }}>
                        <Text style={styles.TxtPosts}>Buy this course</Text>
                        <Text style={styles.TxtAward}>3D Modeling in Blender for beginners</Text>
                    </View>
                    <View style={{ marginHorizontal: 90 }}>
                        <TouchableOpacity
                            style={styles.InnerBottomButton}>
                            <View>
                                <Text style={styles.inner_txt1}>149,99 USD</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>



    );
};

const styles = StyleSheet.create({
    background: {
        width: 394,
        height: 399,
        borderRadius: 20
    },
    safeArea: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        padding: 10,
    },
    header: {
        paddingTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 20,
        fontFamily: FontFamily.semibold,
        color: Colors.white,
        fontWeight: "600"
    },
    outerview: {
        paddingVertical: 25,
        paddingHorizontal: 14,
    },
    RoundView: {
        height: 42,
        width: 110,
        backgroundColor: Colors.dark,
        borderRadius: 13, marginHorizontal: 2
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
        paddingTop: 10, marginRight: 2
    },
    TxtAbout: {
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        color: Colors.dark,
        fontSize: 20
    },
    TxtLearn: {
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        color: Colors.black,
        fontSize: 15, lineHeight: 26
    },
    TxtOn: {
        marginTop: 10,
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        color: Colors.black,
        fontSize: 14, height: 20, lineHeight: 26
    },
    TxtModel: {
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        color: Colors.black,
        fontSize: 14, opacity: 0.3, lineHeight: 29
        // textShadowOffset: { width: 9, height: 7 },
    },
    RoundView2: {
        height: 68,
        width: 330,
        marginLeft: 12,
        marginRight: 12,
        alignSelf: "center",
        backgroundColor: 'pink',
        borderRadius: 12, flex: 1
    },
    Txtbuy: {
        fontWeight: "600",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        marginTop: 14, marginLeft: 12, height: 20, width: 130, backgroundColor: "black"
    },
    Txt3D: {
        fontWeight: "500",
        color: "#CCC9FB",
        fontFamily: FontFamily.regular,
        fontSize: 11,
        marginLeft: 12, backgroundColor: "black", width: 210, height: 20,
    },
    LastView: {
        backgroundColor: Colors.blue,
        height: 40, width: 90,
        borderRadius: 13,
    },
    TxtPosts: {
        fontWeight: "500",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        fontSize: 16, width: 150,
    },
    TxtAward: {
        fontWeight: "600",
        color: "#CCC9FB",
        fontFamily: FontFamily.semibold,
        fontSize: 11, width: 210, lineHeight: 14
    },
    BottomButton1: {
        height: 70,
        width: 350,
        marginLeft: 20,
        marginTop: 10,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: "black", alignSelf: "center",
        marginBottom: 20
    },
    InnerBottomButton: {
        height: 33,
        width: 100,
        backgroundColor: Colors.blue,
        marginRight: 10,
        marginTop: 19,
        borderRadius: 11
    },
    inner_txt1: {
        color: Colors.white,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        alignSelf: "center",
        marginTop: 7,
        fontSize: 13
    },

});


export default ElearningDetails;