import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const NoConnection = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ marginTop: 80, marginLeft: 20, marginRight: 20, alignSelf: "center" }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/bg.png')} style={{}} />
                    </View>
                    <View style={{ marginTop: 15, alignSelf: "center", marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.NoConn}>No Connection</Text>
                    </View>
                    <Text style={styles.TxtPlz}>Please check your internet connection</Text>
                    <Text style={styles.TxtPlz}>and try again.</Text>
                    <View style={{ marginTop: 34, marginLeft: 20, marginRight: 20, alignSelf: "center", marginBottom: 10 }}>
                        <TouchableOpacity
                            style={styles.OuterView}>
                            <Text style={styles.InnerText}>Retry</Text>
                        </TouchableOpacity>
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
    NoConn: {
        color: "#18172B",
        fontFamily: FontFamily.semibold,
        fontWeight: "600",
        fontSize: 25,
    },
    TxtPlz: {
        marginLeft: 20, marginRight: 20,
        alignSelf: "center",
        color: Colors.grey,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 13
    },
    OuterView: {
        height: 53, width: 320,
        backgroundColor: Colors.blue,
        borderRadius: 12
    },
    InnerText: {
        alignSelf: "center",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        paddingVertical: 15
    }


});
export default NoConnection;