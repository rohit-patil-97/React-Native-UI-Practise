import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import { rotationHandlerName } from "react-native-gesture-handler/lib/typescript/handlers/RotationGestureHandler";
import Icon from 'react-native-vector-icons/AntDesign';



const Editprofile = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", flex: 1, marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderEdit}>Edit Profile</Text>
                <Text style={styles.HeaderUpdate}>Update</Text>
            </View>
            <View style={{
                marginTop: 5,
                marginLeft: 10,
                marginRight: 10,
                borderBottomColor: '#E2E3E4',
                borderBottomWidth: StyleSheet.hairlineWidth
            }} />

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/editprofile.png')} style={styles.ImageStyle} />
                    </View>

                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.GenInfo}>GENERAL INFORMATION</Text>
                    </View>

                    <View style={{}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                            <Text style={styles.TxtFullNM}>Full Name</Text>
                            <Text style={styles.TxtRobert}>Robert Fox</Text>
                            <Icon name="right" size={20} style={{}} />
                        </View>
                        <View style={{
                            marginTop: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            borderBottomColor: '',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}

                        />
                        <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                            <Text style={styles.TxtFullNM}>Occupation</Text>
                            <Text style={styles.TxtiOS}>iOS Developer</Text>
                            <Icon name="right" size={20} style={{}} />
                        </View>
                    </View>

                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />








                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.GenInfo}>MANAGE BUSSINESS ACCOUNT</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                        <Text style={styles.TxtFullNM} >Email</Text>
                        <Text style={styles.TxtEmail}>email.example..</Text>
                        <Icon name="right" size={20} style={{}} />
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                        <Text style={styles.TxtFullNM} >Password</Text>
                        <Text style={styles.TxtPass}>......</Text>
                        <Icon name="right" size={20} style={{}} />
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ marginTop: 20, }}>
                        <Text style={styles.GenInfo}>CONTACT</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                        <Text style={styles.TxtFullNM}>Mobile</Text>
                        <Text style={styles.TxtMob}>+38 096 517-08-18</Text>
                        <Icon name="right" size={20} style={{}} />
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                        <Text style={styles.TxtFullNM}>Phone</Text>
                        <Text style={styles.TxtPhone}>+44 06-98-18</Text>
                        <Icon name="right" size={20} style={{}} />
                    </View>
                    <View style={{
                        marginTop: 10,
                        marginLeft: 20,
                        marginRight: 20,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />


                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginLeft: 15, marginRight: 15, }}>
                        <Text style={styles.TxtFullNM} >Email</Text>
                        <Text style={styles.TxtEmail}>email.example..</Text>
                        <Icon name="right" size={20} style={{}} />
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
            <View style={{ marginBottom: 30 }}></View>

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
    HeaderEdit: {
        fontWeight: "600",
        fontSize: 19,
        color: Colors.black,
        fontFamily: FontFamily.bold,
    },
    HeaderUpdate: {
        fontWeight: "600",
        fontSize: 17,
        color: Colors.blue,
        fontFamily: FontFamily.semibold,
        marginRight: 15
    },

    ImageStyle: {
        alignSelf: "center",
        marginTop: 25
    },
    GenInfo: {

        marginLeft: 18,
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.bold,
        fontSize: 12,
    },
    TxtFullNM: {


        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 12,
    },

    TxtRobert: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15,

    },
    TxtiOS: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15,




    },
    TxtEmail: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        textAlign: "center",
    },
    TxtPhone: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15, textAlign: "center",

    },
    TxtMob: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15, textAlign: "center",
    },
    TxtPass: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 18, textAlign: "center",

    }
});
export default Editprofile;