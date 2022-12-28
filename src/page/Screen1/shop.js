import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, TouchableHighlight, Image } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card, TextInput } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';


const Shop = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderTitle}>Shop</Text>
                <View style={{ flexDirection: "row", marginRight: 20 }}>
                    <View style={{ position: "relative" }}>
                        <Icon name="bookmark-minus-outline" size={37} style={{ height: 35, width: 35, color: Colors.blue, marginTop: 2 }} onPress={() => ('')} />
                        <View style={{ position: "absolute", top: 0, left: 0, borderRadius: 40 / 2, backgroundColor: "red", height: 10, width: 10, marginHorizontal: 23, marginVertical: 4 }}>
                        </View>
                    </View>
                    <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={30} style={{ color: Colors.blue, marginRight: 10, marginTop: 5, marginHorizontal: 15 }} onPress={() => ('')} />
                </View>
            </View>
            <View
                style={{
                    marginTop: 13,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.OuterSearch}>
                        <AntIcon icon name="search1" size={27} style={{ color: Colors.blue, marginLeft: 20 }} />
                        <TextInput
                            caretHidden={true}
                            style={styles.SearchInput}
                            placeholder="Search"
                            keyboardType="name-phone-pad"
                            underlineColor="#F8F8FA"
                        />
                    </View>

                    <View style={styles.outerview}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.RoundView}>
                                <TouchableHighlight style={styles.text_outer}>
                                    <Text style={styles.SelectionText}>Shops</Text>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight style={{ marginVertical: 8, paddingHorizontal: 15 }}>
                                <Text style={styles.SelectionText2}>Editor's Picks</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ marginVertical: 8, paddingHorizontal: 15 }}>
                                <Text style={styles.SelectionText2}>Collections</Text>
                            </TouchableHighlight>
                            <TouchableHighlight style={{ marginVertical: 8, paddingHorizontal: 15 }}>
                                <Text style={styles.SelectionText2}>Guide</Text>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>

                    <View style={{ flexDirection: "row", alignSelf: "center", marginRight: 10, }}>
                        <View style={{ marginTop: 5, marginHorizontal: 20, flexDirection: "column", justifyContent: "space-between", width: 165 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/Img.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText} onPress={() => navigation.navigate('shopping')}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller1}>60$</Text>
                                <Text style={styles.Doller2}>72$</Text>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 2, marginRight: 5, }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image2.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 3, alignSelf: "center", marginRight: 10, }}>
                        <View style={{ marginTop: 5, marginHorizontal: 22, flexDirection: "column", justifyContent: "space-between", width: 165 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image3.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 2, marginRight: 5 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image4.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 3, alignSelf: "center", marginRight: 10, }}>
                        <View style={{ marginTop: 5, marginHorizontal: 22, flexDirection: "column", justifyContent: "space-between", width: 165 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/Img.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller1}>60$</Text>
                                <Text style={styles.Doller2}>72$</Text>
                            </View>
                        </View>

                        <View style={{ paddingVertical: 2, marginRight: 5 }}>
                            <View>
                                <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/image2.png')} />
                            </View>
                            <View style={styles.AfterCardText}>
                                <Text style={styles.CardText}>PUT YOUR PRODUCT{'\n'}NAME HERE OR GO!</Text>
                                <Icon name="bookmark-minus-outline" size={32} style={{ color: Colors.black, marginTop: 2 }} onPress={() => ('')} />
                            </View>
                            <View style={styles.AfterCardRup}>
                                <Text style={styles.Doller3}>60$</Text>
                            </View>

                        </View>
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
        fontWeight: "600",
        fontSize: 25,
        color: Colors.dark,
        fontFamily: FontFamily.semibold
    },
    OuterSearch: {
        flexDirection: "row",
        alignItems: "center", alignSelf: "center",
        marginTop: 17,
        marginStart: 19, marginRight: 19,
        borderRadius: 15,
        height: 55,
        width: "96%",
        backgroundColor: "#F8F8FA"
    },
    SearchInput: {
        fontSize: 17,
        height: 20, width: "30%",
        fontWeight: "600",
        fontFamily: FontFamily.regular,
        backgroundColor: "transparent",
        color: Colors.grey
    },
    outerview: {
        paddingVertical: 18,
        paddingHorizontal: 15,
    },
    text_outer: {
        marginHorizontal: 9,
    },
    SelectionText2: {
        color: Colors.grey,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 14
    },
    SelectionText: {
        color: Colors.white,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 14,
        alignSelf: "center",
        paddingTop: 7
    },
    RoundView: {
        height: 39,
        width: 80,
        backgroundColor: Colors.blue,
        borderRadius: 13,
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
    ImageStyle: {
        height: 25,
        width: 25,
        marginRight: 10,
        marginTop: 4
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



});
export default Shop;

