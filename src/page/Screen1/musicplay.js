import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, ImageBackground, Progress } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import LinearGradient from 'react-native-linear-gradient';

const MusicPlay = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ marginTop: 20, marginLeft: 20, flexDirection: "row", }}>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/back.png')} />
                <View style={{ alignSelf: "center", marginHorizontal: 69, flexDirection: "row" }} >
                    <Text style={{ fontSize: 18, color: Colors.dark, fontFamily: FontFamily.semibold, }} >Favorite</Text>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/down.png')} style={{ alignSelf: "center", marginHorizontal: 4 }} />
                </View>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/headcircle.png')} style={{ alignSelf: "center", marginHorizontal: 15 }} />
            </View>

            <LinearGradient start={{ x: 0.1, y: 1 }} end={{ x: 0.11, y: 0.1 }} colors={['transparent', '#88A2FF', '#88A2FF']} style={styles.linearGradient}>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/car.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                <View style={{ marginTop: 20, alignItems: "center" }}>
                    <Text style={styles.TxtOcean} onPress={() => navigation.navigate('lyrics')}>ocean view</Text>
                    <Text style={styles.TxtEasy} onPress={() => navigation.navigate('elearning')}>Easy Life</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, marginLeft: 20, justifyContent: "space-between", marginRight: 20 }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/image1.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/image2.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/playbutton.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/image3.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/image4.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginLeft: 20, marginRight: 20, bottom: 5 }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/Chat.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Music/PlayList.png')} style={{ alignSelf: "center", marginTop: 20 }} />
                </View>
            </LinearGradient>
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
    linearGradient:
    {
        height: 450,
        width: 360,
        borderRadius: 11,

    },
    TxtOcean:
    {
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 22,
        textTransform: "capitalize",
    },
    TxtEasy:
    {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.dark
    }
});
export default MusicPlay;