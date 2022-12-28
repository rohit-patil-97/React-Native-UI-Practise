import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Antdesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Post2 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-evenly" }}>
                < Antdesign Icon name="left" size={23} color="#554AF0" style={{ marginTop: 10, }} onPress={() =>
                    navigation.navigate('post1')
                } />
                <Text style={styles.HeaderTitle}>Create Post</Text>
                <Text style={styles.HeaderTitle2}>Create</Text>
            </View>
            <View
                style={{
                    marginTop: 20,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ marginTop: 27, marginLeft: 22 }}>
                    <Text style={styles.txt1}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Text>
                    <Text style={{ color: Colors.grey, marginTop: 15, fontFamily: FontFamily.semibold, fontSize: 13 }}>6 ATTACHMENTS</Text>
                </View>

                <View style={{ flexDirection: "row", marginLeft: 22, marginTop: 8, justifyContent: "center" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/post1.png')} />
                    <View style={{ flexDirection: "column" }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/post2.png')} style={{ marginHorizontal: 20 }} />
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/post3.png')} style={{ marginHorizontal: 20, marginTop: 8 }} />
                    </View>
                </View>

                <View style={{ marginTop: 20, marginLeft: 20, flexDirection: "row", justifyContent: "space-between", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={styles.roundButton1}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 8 }}>
                            <MaterialCommunityIcons icon name='account-group-outline' size={25} style={{ color: Colors.grey, }} />
                            <Text style={styles.txt2}>EVERYONE</Text>
                            <Antdesign icon name='down' size={20} style={{ color: Colors.grey, marginTop: 3 }} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.roundButton2}>
                        <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginVertical: 8 }}>
                            <EvilIcons icon name='clock' size={25} style={{ color: Colors.dark, marginTop: 3 }} />
                            <Text style={styles.txt2}>NOW</Text>
                            <Antdesign icon name='down' size={20} style={{ color: Colors.grey, marginTop: 3 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />
                <View style={{ flexDirection: "row", marginLeft: 4, justifyContent: "flex-start", marginTop: 10 }}>
                    <Antdesign icon name='picture' size={28} style={{ color: Colors.grey, marginLeft: 18 }} />
                    <Feather icon name="paperclip" size={28} style={{ color: Colors.grey, marginHorizontal: 25 }} />
                    <MaterialCommunityIcons icon name='chart-box-outline' size={29} style={{ color: Colors.grey, }} />
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, marginRight: 18 }}>
                        <Feather icon name='settings' size={26} style={{ color: Colors.grey, marginHorizontal: 25 }} />
                        <Antdesign icon name='down' size={26} style={{ color: Colors.grey }} />
                    </View>

                </View>






            </ScrollView>
            <View style={{ backgroundColor: "#D1D5DB", flexDirection: "row", justifyContent: "space-between", marginTop: 18, marginBottom: 1 }}>
                <SimpleLineIcons icon name='emotsmile' size={30} style={{ marginLeft: 20, marginTop: 8, color: "#50555C" }} />
                <MaterialIcons icon name='keyboard-voice' size={35} style={{ marginRight: 17, marginTop: 8 }} />
            </View>
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
        fontSize: 17,
        fontFamily: FontFamily.semibold,
        color: Colors.dark, marginTop: 10,
        marginHorizontal: 70


    },
    HeaderTitle2: {
        fontSize: 17,
        fontFamily: FontFamily.semibold,
        color: Colors.blue, marginTop: 10,


    },
    txt1: {
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        color: Colors.dark,
        fontSize: 17,
    },
    txtAttach: {
        fontSize: 10,
        color: Colors.red,
        fontFamily: FontFamily.semibold,
    },
    roundButton1: {
        width: 170,
        height: 42,
        borderRadius: 12,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: "#E2E3E4"
    },
    roundButton2: {
        width: 120,
        height: 42,
        borderRadius: 12,
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: "#E2E3E4",
        marginRight: 70, marginHorizontal: 7
    },
    txt2: {
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.dark,
        fontSize: 16,
        alignSelf: "center",


    },







});







export default Post2;
