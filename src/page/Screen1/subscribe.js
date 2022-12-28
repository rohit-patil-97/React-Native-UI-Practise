import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
const Subscribe = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View>
                        <Icon name="close" size={28} style={{ alignSelf: "flex-end", marginRight: 18, marginTop: 20, color: Colors.blue }} />
                    </View>
                    <View
                        style={{
                            marginTop: 25,
                            marginLeft: 5,
                            marginRight: 5,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />
                    <View style={{ marginTop: 10 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/SUBSCRIBE.png')} style={{ alignSelf: "center" }} />
                    </View>
                    <View style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={styles.TxtClean}>Clean use without{'\n'}advertising</Text>
                        <Text style={styles.TxtAmet}>Amet minim mollit non deserunt ullamco est sit aliqua{'\n'}dolor do amet sint.Velit officia consequat duis enim velit{'\n'}mollit.</Text>
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 18, marginRight: 18, alignSelf: "center", marginBottom: 10 }}>
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#F6B900', '#E09400']} style={styles.linearGradient}>

                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.TxtSubscribe}>Subscribe now</Text>
                                <Text style={styles.TxtDoller}>$5.99 PER MONTH</Text>
                            </View>
                        </LinearGradient>

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
    linearGradient: {
        height: 55,
        width: 350,
        borderRadius: 11
    },
    TxtSubscribe: {
        fontWeight: "500",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        marginTop: 16,
        marginLeft: 30

    },
    TxtDoller: {
        fontWeight: "500",
        color: Colors.white,
        fontFamily: FontFamily.semibold,
        fontSize: 11,
        marginTop: 21,
        marginRight: 30
    },
    TxtClean: {
        color: Colors.dark,
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        fontSize: 24
    },
    TxtAmet: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 12,
        lineHeight: 21,
        marginTop: 10
    }

});
export default Subscribe;