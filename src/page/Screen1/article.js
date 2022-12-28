import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, ActivityIndicator } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';



const Article = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <AntDesign name="left" size={22} style={{ color: Colors.blue, marginTop: 4 }} onPress={() => navigation.navigate('userdetail')} />
                <View style={{ flexDirection: "column", alignItems: "center", marginTop: 5 }}>
                    <Text style={styles.HeaderTitle1}>Article Name</Text>
                    <Text style={styles.HeaderTitle2}>Jane Cooper</Text>
                </View>
                <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={28} style={{ color: Colors.blue, marginRight: 25, marginTop: 4 }} onPress={() => ('')} />

            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 8 }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 50, width: 50 }} onPress={() => navigation.navigate('post')} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.txt1} onPress={() =>
                                    navigation.navigate('post')
                                }>Jane Cooper</Text>
                                <Text style={styles.txt2}>Project Manager</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 17, marginRight: 14 }}>
                            <Text style={styles.dte}>24 March 2021</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 18, marginLeft: 15 }}>
                        <Text style={styles.TxtVisual}>Visual Design in UX{'\n'}Discipline</Text>
                    </View>

                    <View>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/ArticleIMG.png')} style={{ marginTop: 10, alignSelf: "center" }} />
                        <Text style={styles.TxtSource}>Source</Text>
                    </View>

                    <View style={{ marginTop: 20, marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.TxtContain}>What we see is more impactful than what{'\n'}we listen to or hear. It is known to all and{'\n'}is now one of the most widespread{'\n'}applications in all fields. Right from{'\n'}education to the business, the visual{'\n'}approach to reach potential customers is{'\n'}increasing at a great pace.{'\n'}Visual design is the first thing that aims{'\n'}to improve the product’s usability and{'\n'}aesthetics of the site and application. A{'\n'}successful visual enhances the content{'\n'}and essence of the portal rather than{'\n'}overpowering it. Enhancing the user{'\n'}experience is one of the key functions of{'\n'}visual design.{'\n'}The MicroCreatives infographic depicted{'\n'}that around 61% of the marketers believe{'\n'}visuals are an integral part of any {'\n'}successful marketing campaign. Visuals{'\n'} are the key to an enhanced base of loyal{'\n'}customers, and using effective graphics{'\n'}can help the visitors follow the{'\n'}information seamlessly.</Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.TxtVisual}> What is Visual Design? — A Brief{'\n'} Introduction.</Text>
                    </View>

                    <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
                        <Text style={styles.TxtContain}>Visual Design is one of the most{'\n'}important factors to consider while{'\n'}designing the online portal. It is related to{'\n'}aesthetic appeal that makes the website{'\n'}look friendly and more usable than{'\n'}others. Using infographics, images,{'\n'}charts, tables, icons, and various visual{'\n'}elements, the display is enhanced,{'\n'}increasing trust.{'\n'}The key elements for better user{'\n'}experience visual design are as follows:</Text>
                    </View>




                    <View style={{ backgroundColor: "#F8F8FA", height: 5, width: "99%", marginTop: 20 }} />
                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 8 }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 50, width: 50 }} onPress={() => navigation.navigate('post')} />
                            <View style={{ flexDirection: "column" }}>
                                <Text style={styles.txt1} onPress={() =>
                                    navigation.navigate('post')
                                }>Related Articles</Text>
                                <Text style={styles.txt2}>Jane Cooper</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 17, marginRight: 14 }}>
                            <AntDesign name="right" size={20} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#F8F8FA", height: 15, width: "99%", marginTop: 10 }} />



                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 28, width: 28, marginTop: 15, marginLeft: 15 }} />
                        <Text style={styles.TxtJane}>Jane Cooper • 2 hr ago</Text>
                    </View>

                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.Txttips} onPress={() => navigation.navigate('subscribe')}>10 Tips for Better Loading Time in UX</Text>
                    </View>
                    <View>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/loading.png')} style={{ marginTop: 15, marginLeft: 15, alignSelf: "center" }} />
                        <Text style={styles.TxtContain2} >As a UX designer, developing a seamless{'\n'}website would require you to work on its{'\n'}accessibility, user interface, navigability,{'\n'}design, and much more. Up till now, we’ve{'\n'}covered some beginner UX design tips for{'\n'}contrast, web forms, and mobile. One key{'\n'}aspect that remains is the loading time{'\n'}of the website, which most beginners{'\n'}neglect. Web loading time refers to the{'\n'}time your site takes to open up on the{'\n'}screen.</Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 18 }}>

                        <View style={{ flexDirection: "row", }}>
                            <Icon name="cards-heart-outline" size={33} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>112</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <FeatherIcon icon name="message-circle" size={31} color="" style={{ height: 32, width: 36, marginTop: 1, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>26</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <FeatherIcon icon name="send" size={31} color="" style={{ height: 30, width: 35, marginTop: 3, color: Colors.dark }} onPress={() => ('')} />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, marginRight: 15 }}>
                            <Icon name="bookmark-minus-outline" size={35} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#F8F8FA", height: 20, width: "99%", marginTop: 13 }} />





                    <View style={{ flexDirection: "row" }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/elips.png')} style={{ height: 28, width: 28, marginTop: 15, marginLeft: 15 }} />
                        <Text style={styles.TxtJane}>Jane Cooper • 2 hr ago</Text>
                    </View>

                    <View style={{ marginTop: 8, marginLeft: 15 }}>
                        <Text style={styles.Txttips}>10 Tips for Better Loading Time in UX</Text>
                    </View>
                    <View>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/loading2.png')} style={{ marginTop: 15, alignSelf: "center" }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.TxtContain2}>As a UX designer, developing a seamless{'\n'}website would require you to work on its{'\n'}accessibility, user interface, navigability,{'\n'}design, and much more. Up till now, we’ve{'\n'}covered some beginner UX design tips for{'\n'}contrast, web forms, and mobile. One key{'\n'}aspect that remains is the loading time{'\n'}of the website, which most beginners{'\n'}neglect. Web loading time refers to the{'\n'}time your site takes to open up on the{'\n'}screen.</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 18 }}>

                        <View style={{ flexDirection: "row", }}>
                            <Icon name="cards-heart-outline" size={33} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>112</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <FeatherIcon icon name="message-circle" size={31} color="" style={{ height: 32, width: 36, marginTop: 1, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>26</Text>
                        </View>

                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                            <FeatherIcon icon name="send" size={31} color="" style={{ height: 30, width: 35, marginTop: 3, color: Colors.dark }} onPress={() => ('')} />
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, marginRight: 15 }}>
                            <Icon name="bookmark-minus-outline" size={35} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#F8F8FA", height: 20, width: "99%", marginTop: 10 }} />
                </View>
            </ScrollView>
            <View style={{ marginBottom: 20, paddingTop: 30, alignSelf: 'center' }}>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen/Loader.png')} style={{ height: 29, width: 29 }} />
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
    HeaderTitle1: {
        fontSize: 18,
        fontFamily: FontFamily.semibold,
        color: Colors.black,
        lineHeight: 20
    },
    HeaderTitle2: {
        fontFamily: FontFamily.semibold,
        color: Colors.grey, lineHeight: 18,
        fontSize: 13
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
        fontSize: 12, lineHeight: 14
    },

    txt3: {
        paddingLeft: 10,
        fontFamily: FontFamily.dark,
        color: Colors.grey,
        fontWeight: "500",
        fontSize: 13, lineHeight: 12
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
    dte: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13, alignSelf: "flex-end"
    },

    TxtVisual: {
        fontSize: 20,
        color: Colors.dark,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
    },
    TxtSource: {
        fontWeight: "500",
        textDecorationLine: "underline",
        alignSelf: "center",
        color: Colors.blue,
        marginTop: 2,
    },
    TxtContain: {
        color: "#36354A",
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        fontSize: 16,
        lineHeight: 27
    },
    TxtVisual: {
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 20
    },
    Txttips: {
        fontWeight: "600",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 18,
    },
    TxtJane: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        alignSelf: "center",
        marginTop: 15,
        fontSize: 13,
        marginLeft: 6
    },
    TxtContain2: {
        color: "#36354A",
        fontWeight: "400",
        fontFamily: FontFamily.regular,
        fontSize: 16,
        lineHeight: 27,
        marginLeft: 20

    },
    bottom_txt1: {
        marginHorizontal: 12,
        color: Colors.black,
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        fontWeight: "500",
        alignSelf: "center"
    },
    bottom_txt2: {

        paddingHorizontal: 12,
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        fontWeight: "500",
        paddingTop: 8
    },


});
export default Article;