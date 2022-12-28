import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import McommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';







const Post = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <Icon name="left" size={23} color="#554AF0" style={{ marginTop: 10, marginLeft: "5%" }} onPress={() =>
                    navigation.navigate('feed')
                } />
                <Text style={styles.HeaderTitle}>Post</Text>
                <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={30} style={{ color: Colors.blue, marginRight: 25, marginTop: 5 }} onPress={() => ('')} />
            </View>
            <View
                style={{
                    marginTop: 14,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />

            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>


                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 8 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/courtney.png')} style={{ height: 50, width: 50 }} onPress={() => navigation.navigate('post')} />
                        <View style={{ flexDirection: "column" }}>
                            <Text style={styles.txt1} onPress={() =>
                                navigation.navigate('post')
                            }>Courtney Henry</Text>
                            <Text style={styles.txt2}>iOS Developer</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 17, marginRight: 14 }}>
                        <Text style={styles.dte}>24 March 2021</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "column", justifyContent: "space-between" }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/image1.png')} style={{ marginTop: 10, resizeMode: "cover", width: "100%", height: 400 }} />

                    <View style={{ marginTop: 18 }}>
                        <Text style={styles.txt_contain}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.Exercitation veniam...</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 14 }}>

                    <View style={{ flexDirection: "row", }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/heart.png')} style={{ height: 35, width: 33, marginTop: 2 }} /><Text style={styles.bottom_txt1}>112</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <FeatherIcon icon name="message-circle" size={32} color="" style={{ height: 32, width: 36, marginTop: 1, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>26</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <FeatherIcon icon name="send" size={30} color="" style={{ height: 30, width: 35, marginTop: 3, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>2</Text>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, marginRight: 15 }}>
                        <McommunityIcon icon name="bookmark-minus-outline" size={37} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#F8F8FA", height: 4, width: 400, paddingTop: 9, marginTop: 11 }} />


                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                    <View style={{ marginLeft: 18 }}>
                        <Text Style={styles.txt_cmt}>3 COMMENTS</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ paddingHorizontal: 7 }}>
                            <Text style={styles.txt_inter}>MOST INTERESTING</Text>
                        </View>
                        <View style={{ marginRight: 2 }}>
                            <Icon name="down" size={20} style={{ height: 32, width: 36, marginTop: 1, color: Colors.blue }} onPress={() => ('')} />
                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "center", flex: 1, marginTop: 20, marginHorizontal: 15 }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 55, width: 55, }} />
                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 10 }}>
                        <Text style={styles.txt_jane}>Jane Cooper</Text>
                        <Text style={styles.txt_lorem}>Lorem ipsum dolor sit amet, donec{'\n'}fringilla quam eu faci lisis mollis.</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.dte2}>24 March 2021</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <McommunityIcon icon name="cards-heart-outline" size={30} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.heart_txt}>12</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginHorizontal: 15 }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 55, width: 55 }} />
                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 13 }}>
                        <Text style={styles.txt_jane}>Jane Cooper</Text>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/coconut.png')} style={{ height: 29, width: 29, }} />
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 3 }}>
                            <Text style={styles.dte2}>24 March 2021</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <McommunityIcon icon name="cards-heart-outline" size={30} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginHorizontal: 15 }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips2.png')} style={{ height: 55, width: 55 }} />
                    <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "flex-start", flex: 1, paddingHorizontal: 13 }}>
                        <Text style={styles.txt_jane}>Wade Warren</Text>
                        <Text style={styles.txt_lorem}>Lorem ipsum dolor sit amet,consecetur adipiscing elit.</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.dte2}>24 March 2021</Text>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/heart.png')} style={{ height: 25, width: 25, }} /><Text style={styles.heart1}>1</Text>

                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginTop: 26,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',


                    }} />



            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "#F8F8FA", height: 65, width: "99%" }}>
                <FeatherIcon icon name="paperclip" size={32} style={{ color: Colors.grey, marginLeft: 30, marginTop: 12 }} onPress={() => ('')} />
                <View style={{ marginHorizontal: 6, flex: 1, marginTop: 2 }}>
                    <TextInput
                        caretHidden={true}
                        style={styles.input}
                        placeholder="Write a comment..."
                        keyboardType="default"
                        activeUnderlineColor='white'
                        underlineColor='white'
                        placeholderTextColor="#686777"
                    />
                </View>
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
        color: Colors.black,
        fontFamily: FontFamily.bold,
        fontSize: 20,
        fontWeight: "600",
        marginTop: 8,

    },
    txt1: {
        paddingLeft: 10,
        marginTop: 3,
        fontFamily: FontFamily.bold,
        color: Colors.dark,
        fontSize: 17,
        fontWeight: "600",
    },
    txt2: {
        paddingLeft: 10,
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
        fontWeight: "500",
        fontSize: 12, lineHeight: 18
    },
    dte: {
        // paddingHorizontal: 69,
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13, alignSelf: "flex-end"
    },

    txt_contain: {
        fontFamily: FontFamily.semibold,
        color: Colors.black,
        fontSize: 15,
        paddingHorizontal: 15,
        fontWeight: "400",
        lineHeight: 25

    },
    bottom_txt1: {
        marginHorizontal: 10,
        color: Colors.red,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        fontWeight: "500",
        alignSelf: "center",
        marginVertical: 8
    },
    bottom_txt2: {

        paddingHorizontal: 10,
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        fontWeight: "500",
        paddingTop: 2,
        marginVertical: 5
    },
    heart_txt: {

        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: 5
    },
    txt_cmt: {
        color: Colors.grey,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        // color: "red"
    },
    txt_inter: {
        color: Colors.blue,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 14

    },
    txt_jane: {
        fontWeight: "400",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        marginTop: 2

    },
    txt_lorem: {
        fontWeight: "400",
        color: Colors.black,
        fontFamily: FontFamily.semibold,
        fontSize: 14,
    },
    dte2: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13,
        marginTop: 6

    },
    txt_lastrht: {
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.dark,
        fontSize: 16,
        marginTop: 2,
        marginRight: 2

    },
    heart1: {

        color: Colors.red,
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 1, paddingHorizontal: 3

    },
    input: {
        fontWeight: "400",
        backgroundColor: "white",
        fontFamily: FontFamily.regular,
        width: "98%",
        marginTop: 5,
        height: 40,
        fontSize: 16,
        borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    OuterInput: {
        alignItems: "flex-start",
        backgroundColor: Colors.white,
        width: 310, height: 40,
        marginTop: 10, borderRadius: 18,
    }

});
export default Post;
