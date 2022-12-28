import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const UserDetail = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <Icon name="left" size={23} color="#554AF0" style={{ marginTop: 10, marginLeft: "5%" }} onPress={() =>
                    navigation.navigate('directchat')
                } />
                <Text style={styles.HeaderTitle}>User Details</Text>
                <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={28} style={{ color: Colors.blue, marginRight: 25, marginTop: 7 }} onPress={() => ('')} />
            </View>
            <View
                style={{
                    marginTop: 8,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.OuterView}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 100, width: 100, marginHorizontal: 20 }} />
                        <View style={{ flexDirection: "column", marginTop: 9 }}>
                            <Text style={styles.Jane} onPress={() => navigation.navigate('article')}>Jane Cooper</Text>
                            <Text style={styles.ProMan}>Project Manager</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 20, marginRight: 20, alignSelf: "center" }}>
                        <TouchableOpacity style={styles.input1} >
                            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 13, }}>
                                <Text style={styles.InnerText1}>Give a call</Text>
                                <Ionicons name="call-outline" size={21} style={{ marginHorizontal: 7, color: Colors.white }} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.input2} >
                            <Text style={styles.InnerText2}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: 19,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />


                    <View style={{ marginTop: 25, marginLeft: 20 }}>
                        <Text style={styles.Status}>STATUS</Text>
                        <Text style={styles.TxtGuys}>Hey guys!{'\n'}I'm on vacation 🌴, I'll answer you all later</Text>
                    </View>

                    <View style={{
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.Status}>USER DETAILS</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}>
                        <Ionicons name="call-outline" size={26} style={{ color: Colors.blue }} />
                        <Text style={styles.No}>+380 96 517 08 18</Text>
                        <Icon name="right" size={23} style={{ marginTop: 2 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, marginTop: 17 }}>
                        <Icon name="down-square-o" size={26} style={{ height: 29, width: 29, color: Colors.blue, }} />
                        <Text style={styles.No}>j.cooper@gmail.com</Text>
                        <Icon name="right" size={23} style={{ marginTop: 2 }} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20, marginTop: 24 }}>
                        <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={30} style={{ color: Colors.blue, }} onPress={() => ('')} />
                        <Text style={styles.No2}>More information</Text>
                        <Icon name="right" size={23} style={{ marginTop: 2 }} />
                    </View>
                </View>
            </ScrollView>


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
        color: Colors.black,
        fontFamily: FontFamily.semibold,
        fontSize: 20,
        alignSelf: "center",
        marginTop: 6
    },
    OuterView: {
        marginTop: 30,
        paddingVertical: 25,
        alignSelf: "center",
    },
    Jane: {
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.bold,
        fontSize: 19,
        marginHorizontal: 10, height: 28
    },
    ProMan: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 11,
        alignSelf: "center",
    },
    input1: {
        height: 50,
        width: 190,
        borderRadius: 10,
        backgroundColor: Colors.blue,
    },
    InnerText1: {
        fontWeight: "500",
        color: Colors.white,
        fontFamily: FontFamily.regular,
        fontSize: 15
    },
    input2: {
        height: 50,
        width: 150,
        borderRadius: 10,
        backgroundColor: "#F8F8FA",
        marginHorizontal: 5
    },
    InnerText2: {
        fontWeight: "500",
        color: Colors.blue,
        fontFamily: FontFamily.semibold,
        alignSelf: "center",
        marginTop: 13,
        fontSize: 15
    },
    Status: {
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
        fontSize: 12,
    },
    TxtGuys: {
        marginTop: 5,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        color: Colors.black,
        fontSize: 14
    },
    No: {
        flex: 1,
        marginHorizontal: 20,
        alignSelf: "center",
        fontSize: 16,
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        marginTop: 2,
    },
    No2: {
        flex: 1,
        marginHorizontal: 20,
        alignSelf: "center",
        fontSize: 16,
        color: Colors.blue,
        fontFamily: FontFamily.regular,
        marginTop: 2
    }

});
export default UserDetail;