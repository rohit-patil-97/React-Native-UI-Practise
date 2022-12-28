import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Image, TouchableOpacity } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import Icon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import McommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';



const Shopping = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
                <Icon name="left" size={23} color="#554AF0" style={{ marginTop: 10, marginLeft: "5%" }} onPress={() =>
                    navigation.navigate('shop')
                } />
                <Text style={styles.HeaderTitle}>Nike</Text>
                <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={30} style={{ color: Colors.blue, marginRight: 25, marginTop: 5 }} onPress={() => ('')} />
            </View>
            <View
                style={{
                    marginTop: 16,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flex: 1 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/shop.png')} />
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/shop.png')} style={{ marginHorizontal: 14 }} />
                        </View>
                    </ScrollView>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={styles.OuterText}>
                        <Text style={styles.AvalText}>AVAILABLE</Text>
                        <View style={{ alignItems: "flex-end", flex: 1, marginRight: 20 }}>
                            <FeatherIcon icon name="send" size={29} color="" style={{ height: 30, width: 35, marginTop: 2, color: Colors.black }} onPress={() => ('')} />
                        </View>
                        <View style={{ marginRight: 25 }}>
                            <McommunityIcon icon name="bookmark-minus-outline" size={35} style={{ height: 35, width: 35, color: Colors.black }} onPress={() => ('')} />
                        </View>
                    </View>

                    <View style={styles.OuterContain}>
                        <Text style={styles.txt1}>Nike ZoomX Vaporfly Next</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={styles.txt2}>$89.99</Text>
                            <Text style={styles.txt3}>$89.99</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: "center", marginTop: 13 }}>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('')
                            }
                            style={styles.roundButton1}>
                            <Text style={styles.inner_txt1}>View on Website</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: 18,
                        marginLeft: 25,
                        marginRight: 25,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth
                    }} />

                    <View style={styles.OuterMostContainer}>
                        <Text style={styles.Contain1}>DESCRIPTION</Text>
                        <Text style={styles.Contain2}>Continue the next evolution of speed with{'\n'}a racing shoe made to you help chase{'\n'}new goals and records.The Nike ZoomX{'\n'}Vaporfly Next% 2 builds on the model{'\n'}racers everywhere love. It helps improve{'\n'}comfort and breathability with a{'\n'}redesigned upper. From a 10K to a{'\n'}marathon, the 2 still has the responsive{'\n'}cushioning and secure support to push{'\n'}you towards your personal best.</Text>
                        <View style={styles.OuterMostContainer2}>
                            <Text style={styles.Contain3}>Colour Shown:</Text>
                            <Text style={styles.Contain4}>Aurora Green/Chlorine</Text>
                        </View>
                        <Text style={styles.Contain5}>Blue/Pale Ivory/Black</Text>
                        <View style={{ flexDirection: "row", marginTop: 13 }}>
                            <Text style={styles.Contain3}>Style:</Text>
                            <Text style={styles.Contain4}>CU4111-300</Text>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#F8F8FA", height: 4, width: "99%", paddingTop: 9, marginTop: 12 }} />

                    <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 16 }}>
                        <View style={{ marginLeft: 18 }}>
                            <Text Style={styles.txt_cmt}>3 REVIEWS</Text>
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


                    <View style={{ backgroundColor: "#F8F8FA", height: 4, width: "99%", paddingTop: 9, marginTop: 16 }} />

                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 14 }}>
                        {/* <Text Style={styles.MoreTxt}>More from this shop </Text> */}
                        <Text style={styles.SeeTxt}>SEE ALL</Text>
                        <Icon name="right" size={18} style={{ color: Colors.blue, marginRight: 20, marginTop: 1 }} />
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center", flex: 1, }}>
                        <View style={{ marginTop: 5, marginHorizontal: 13, flexDirection: "column", justifyContent: "space-between", width: 165 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/Img.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <McommunityIcon icon name="bookmark-minus-outline" size={33} style={{ height: 35, width: 35, color: Colors.black }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller1}>60$</Text>
                                <Text style={styles.Doller2}>72$</Text>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 2, marginRight: 10 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image2.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <McommunityIcon icon name="bookmark-minus-outline" size={33} style={{ height: 35, width: 35, color: Colors.black }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "center" }}>
                        <View style={{ marginTop: 5, marginHorizontal: 13, flexDirection: "column", justifyContent: "space-between", width: 165 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image2.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <McommunityIcon icon name="bookmark-minus-outline" size={33} style={{ height: 35, width: 35, color: Colors.black }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>

                            </View>
                        </View>

                        <View style={{ paddingVertical: 2, marginRight: 10 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/Img.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <McommunityIcon icon name="bookmark-minus-outline" size={33} style={{ height: 35, width: 35, color: Colors.black }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller1}>60$</Text>
                                <Text style={styles.Doller2}>72$</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ backgroundColor: "#F8F8FA", height: 4, width: "99%", paddingTop: 9, marginTop: 16 }} />
                </View>
            </ScrollView>

            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15, marginBottom: 10 }}>
                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/bottoncar.png')} style={styles.BottomImg} />
                <Text style={styles.BottomText} onPress={() => navigation.navigate('userdetail')}>Nike</Text>
                <Icon name="right" size={20} style={{ color: Colors.black, marginRight: 20, alignSelf: "center" }} />
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
    heart1: {

        color: Colors.red,
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        fontWeight: "600",
        marginTop: 1, paddingHorizontal: 3

    },
    OuterText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        marginStart: 18
    },
    AvalText: {
        fontWeight: "600",
        color: Colors.green,
        fontSize: 15,
        fontFamily: FontFamily.bold,
        marginTop: 2
    },
    OuterContain: {
        marginTop: 13,
        marginStart: 18
    },
    txt1: {
        fontWeight: "600",
        fontFamily: FontFamily.bold,
        color: Colors.black,
        fontSize: 18
    },
    txt2: {
        fontWeight: "600",
        color: Colors.blue,
        fontFamily: FontFamily.semibold,
        fontSize: 18
    },
    txt3: {
        fontWeight: "500",
        fontSize: 12,
        fontFamily: FontFamily.semibold,
        color: Colors.black,
        textDecorationLine: "line-through",
        marginTop: 5,
        alignItems: "flex-end",
        flex: 1,
        paddingHorizontal: 5
    },
    roundButton1:
    {
        width: "89%",
        height: 55,
        borderRadius: 10,
        marginLeft: 3,
        marginRight: 3,
        backgroundColor: Colors.blue,

    },
    inner_txt1:
    {
        color: Colors.white,
        fontSize: 17,
        width: 150,
        fontFamily: FontFamily.semibold,
        fontWeight: "500",
        alignSelf: "center",
        marginVertical: 15,
        paddingLeft: 6
    },
    OuterMostContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 17,

    },
    Contain1: {
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.bold,
        marginLeft: 18,
        fontSize: 14
    },
    Contain2: {
        fontWeight: "400",
        color: Colors.black,
        marginLeft: 18,
        fontFamily: FontFamily.semibold,
        fontSize: 16, lineHeight: 27
    },
    OuterMostContainer2: {
        flexDirection: "row",
        marginTop: 13,

    },
    Contain3: {
        fontWeight: "400",
        color: Colors.black,
        marginLeft: 18,
        fontFamily: FontFamily.bold,
        fontSize: 15
    },
    Contain4: {
        fontWeight: "400",
        color: Colors.black,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
    },
    Contain5: {
        fontWeight: "400",
        color: Colors.black,
        fontFamily: FontFamily.semibold,
        fontSize: 15,
        marginLeft: 18
    },
    txt_coment: {
        color: Colors.grey,
        fontWeight: "600",
        fontFamily: FontFamily.bold
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
        color: Colors.dark,
        fontFamily: FontFamily.regular,
        fontSize: 14,
    },
    dte2: {
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.dark,
        fontSize: 12,
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
    heart_txt: {

        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        fontWeight: "500",
        paddingVertical: 5
    },
    AfterCardText: {
        marginTop: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 5
    },
    CardText: {
        fontSize: 11,
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,

    },
    AfterCardRup: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    Doller1: {
        fontWeight: "600",
        color: Colors.blue,
        fontSize: 16,
        marginLeft: 5
    },
    Doller2: {
        fontWeight: "500",
        color: Colors.black,
        fontSize: 12,
        marginRight: 106,
        marginTop: 3,
        textDecorationLine: 'line-through'
    },
    Doller3: {
        fontWeight: "600",
        color: Colors.black,
        fontSize: 16,
        marginLeft: 5
    },
    ImageStyle: {
        height: 25,
        width: 25,
        marginRight: 10,
        marginTop: 4
    },
    BottomImg: {
        marginTop: 5,
        height: 45,
        width: 45,
        marginLeft: 18
    },
    BottomText: {
        marginTop: 15,
        color: Colors.dark,
        fontWeight: "600",
        alignItems: "flex-start",
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 15
    },
    Bottomimg2: {
        marginRight: 20,
        marginTop: 20
    },
    MoreTxt: {
        fontWeight: "600",
        color: "red",
        fontSize: 26,
        fontFamily: FontFamily.dark,
        marginLeft: 20

    },
    SeeTxt: {
        color: Colors.blue,
        fontSize: 14,
        fontWeight: "600",
        paddingHorizontal: 10,
        fontFamily: FontFamily.semibold,

    }









});
export default Shopping;

