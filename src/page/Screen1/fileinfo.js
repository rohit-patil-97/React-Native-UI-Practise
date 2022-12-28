import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, ImageBackground } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

const FileInfo = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        style={styles.linearGradient}>
                    </LinearGradient> */}

                    <ImageBackground source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/rectangle.png')} style={{ height: 200, width: 360, alignSelf: "center" }}>
                        <Icon icon name="close" size={25} style={{ marginTop: 90 }} onPress={() => navigation.navigate('feed')} />
                    </ImageBackground>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 30, marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.Document}>Document name</Text>
                        <Icon name="star" size={25} style={styles.ImageStyle} />
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 14, marginLeft: 20, justifyContent: "space-between", }}>
                        <Text style={styles.TxtType} >Type</Text>
                        <Text style={styles.TxtPdf}>PDF</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ flexDirection: "row", marginTop: 14, marginLeft: 20, justifyContent: "space-between" }}>
                        <Text style={styles.TxtType} >Size</Text>
                        <Text style={styles.TxtSize}>2.3 Mb</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 12,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 35 }}>
                        <View style={{ marginTop: 14, marginLeft: 20, }}>
                            <Text style={styles.TxtType} >Owner</Text>

                        </View>
                        <View style={{ flex: 1, alignSelf: "center", marginTop: 16, }}>
                            <Text style={styles.TxtCame}>Cameron</Text>
                            <Text style={styles.TxtWill}>Williamson</Text>
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

                    <View style={{ flexDirection: "row", marginTop: 14, marginLeft: 20, justifyContent: "space-between" }}>
                        <Text style={styles.TxtType} >Created</Text>
                        <Text style={styles.TxtDte}>8 March 2021</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ flexDirection: "row", marginTop: 14, marginLeft: 20, justifyContent: "space-between" }}>
                        <Text style={styles.TxtType} >Modified</Text>
                        <Text style={styles.TxtDte2}>8 March 2021</Text>
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14, marginLeft: 20 }}>
                        <Text style={styles.TxtType} >Version</Text>
                        <Text style={styles.Count}>1</Text>
                        <Icon icon name="right" size={20} style={{ marginRight: 25 }} />
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 14, marginLeft: 20 }}>
                        <Text style={styles.TxtType} >Permission</Text>
                        <Text style={styles.Restri}>Restricted</Text>
                        <Icon icon name="right" size={20} style={{ marginRight: 25 }} />
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />


                    <View>
                        <Text style={styles.BottomText}>WHO HAS ACCESS</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 18, justifyContent: "space-between" }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/people.png')} />
                        <Text style={styles.TxtMembers}>23 Members</Text>
                        <Icon icon name="right" size={20} style={{ marginRight: 25 }} />
                    </View>

                    <View
                        style={{
                            marginBottom: 30,
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
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
    Document: {
        fontWeight: "600",
        color: Colors.black,
        fontFamily: FontFamily.bold,
        fontSize: 23
    },
    ImageStyle: {
        marginTop: 9,
        color: Colors.blue,
        marginTop: 6,
        marginRight: 4
    },
    TxtType: {
        fontWeight: "400",
        color: Colors.grey,
        fontSize: 16,
        fontFamily: FontFamily.semibold,
    },
    TxtPdf: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        textAlign: "center", flex: 1, marginRight: 65,
        fontFamily: FontFamily.semibold
    },
    TxtSize: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        textAlign: "center", flex: 1, marginRight: 35,
        fontFamily: FontFamily.semibold,
    },
    TxtCame: {
        fontWeight: "500",
        color: Colors.blue,
        fontSize: 15,
        textAlign: "center",
        fontFamily: FontFamily.semibold,
    },
    TxtWill: {
        fontWeight: "500",
        color: Colors.blue,
        fontSize: 15,
        textAlign: "center", lineHeight: 16, paddingStart: 10, flex: 1,
        fontFamily: FontFamily.semibold,
    },
    TxtDte: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        textAlign: "center", flex: 1, marginRight: 16,
        fontFamily: FontFamily.semibold,
    },
    TxtDte2: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        textAlign: "center", flex: 1, marginRight: 20,
        fontFamily: FontFamily.semibold
    },
    Count: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        marginRight: 62,
        fontFamily: FontFamily.semibold
    },
    Restri: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        marginRight: 17,
        fontFamily: FontFamily.semibold

    },
    BottomText: {
        fontWeight: "600",
        color: Colors.grey,
        fontSize: 13,
        fontFamily: FontFamily.semibold,
        marginTop: 25, marginLeft: 20
    },
    TxtMembers: {
        fontWeight: "500",
        color: Colors.dark,
        fontSize: 16,
        marginRight: 25, alignSelf: "center",
        fontFamily: FontFamily.semibold,
    }


});
export default FileInfo;