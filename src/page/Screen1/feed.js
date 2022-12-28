import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView } from 'react-native';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';


const Feed = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    return (

        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderText}>Feed</Text>
                <View style={{ flexDirection: "row", marginRight: 20 }}>
                    <View style={{ position: "relative" }}>
                        <FeatherIcon icon name="bell" size={30} color="#554AF0" style={{ paddingHorizontal: 20, marginTop: 5 }} onPress={() => ('')} />
                        <View style={{ position: "absolute", top: 0, right: 0, borderRadius: 40 / 2, backgroundColor: "red", height: 10, width: 10, marginHorizontal: 24, marginVertical: 4 }}>
                        </View>
                    </View>
                    <Icon name="plus" size={34} color="#554AF0" style={{}} onPress={() => navigation.navigate('post1')} />
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
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.img_container}>
                        <View style={{ flexDirection: "column" }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/Avatars.png')} style={styles.img} />
                            <Text style={styles.a1}>What’s New?</Text>
                        </View>

                        <View style={{ paddingHorizontal: 9 }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/jane.png')} style={styles.img} />
                            <Text style={styles.a2}>Jane Cooper</Text>
                        </View>

                        <View style={{}}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/leslie.png')} style={styles.img} />
                            <Text style={styles.a2}>Leslie Alexan...</Text>
                        </View>

                        <View style={{ paddingHorizontal: 3 }}>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/brooklyn.png')} style={styles.img} />
                            <Text style={styles.a2}>Brooklyn Sim...</Text>
                        </View>
                        <View>
                            <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/brooklyn.png')} style={styles.img} />
                            <Text style={styles.a2}>Brooklyn Sim...</Text>
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        marginTop: 13,
                        marginLeft: 10,
                        marginRight: 10,
                        borderBottomColor: '#E2E3E4',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }} />
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
                <View style={{ flexDirection: "column", justifyContent: "space-between", }} >
                    <View >
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/image1.png')} style={{ marginTop: 10, resizeMode: "cover", width: "100%", height: 400 }} />
                    </View>
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
                        <Icon name="bookmark-minus-outline" size={37} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                    </View>
                </View>

                <View style={{ backgroundColor: "#F8F8FA", height: 19, width: "100%", paddingTop: 9, marginTop: 11 }} />

                <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", marginLeft: 15, marginTop: 8 }}>
                        <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/floyd.png')} style={{ height: 50, width: 50 }} onPress={() => navigation.navigate('post')} />
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
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen2/image2.png')} style={{ marginTop: 10, resizeMode: "cover", width: "100%", height: 400 }} />
                    <View style={{ marginTop: 16 }}>
                        <Text style={styles.txt_contain}>
                            Amet minim mollit non deserunt ullamco est
                            sit aliqua dolor do amet sint. Velit officia consequat duis
                            enim velit mollit. Exercitation veniam...</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "column", flex: 1, marginTop: 20 }}>
                    <Text style={styles.bottom_text}>Amet minim mollit non deserunt?</Text>

                    <View style={{ flexDirection: "column" }}>
                        <View style={{ flex: 1, backgroundColor: "#F8F8FA", height: 90, width: "95%", marginTop: 19, marginLeft: 15, borderRadius: 20, flexDirection: "row" }}>
                            <View style={styles.radio1}>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                            </View>
                            {/* <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/Screen2/elips.png')} style={{ height: 30, width: 30, marginTop: 30, marginStart: 9 }} /> */}
                            <Text style={styles.radius_txt}>Amet minim mollit non deserunt{'\n'}ullamco est sit aliqua dolor do{'\n'}amet sint.</Text>
                            <Text style={styles.persentage}>30%</Text>
                        </View>

                        <View style={{ flex: 1, backgroundColor: "#EEEDFE", height: 70, width: "95%", marginTop: 19, marginLeft: 15, borderRadius: 20, flexDirection: "row" }}>
                            <View style={styles.radio1}>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                />
                            </View>
                            {/* <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/Screen2/fill.png')} style={{ height: 30, width: 30, marginTop: 21, marginStart: 11 }} /> */}
                            <Text style={styles.placehold}>Placeholder</Text>
                            <Text style={styles.percentage2}>70%</Text>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 18 }}>

                    <View style={{ flexDirection: "row", }}>
                        <Icon name="cards-heart-outline" size={37} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>112</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <FeatherIcon icon name="message-circle" size={32} color="" style={{ height: 32, width: 36, marginTop: 1, color: Colors.dark }} onPress={() => ('')} /><Text style={styles.bottom_txt2}>26</Text>
                    </View>

                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <FeatherIcon icon name="send" size={30} color="" style={{ height: 30, width: 35, marginTop: 3, color: Colors.dark }} onPress={() => ('')} />
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1, marginRight: 15 }}>
                        <Icon name="bookmark-minus-outline" size={37} style={{ height: 35, width: 35, color: Colors.dark }} onPress={() => ('')} />
                    </View>
                </View>
                <View style={{ backgroundColor: "#F8F8FA", height: 19, width: "100%", marginTop: 16 }} />

                <View style={{ backgroundColor: Colors.white, height: 100, width: "100%", paddingTop: 25 }}>
                    <Text style={styles.posted}>2 POSTS IN THE FEED</Text>
                </View>

            </ScrollView>
            <View
                style={{
                    marginLeft: 2,
                    marginRight: 2,
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />



        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: "100%",
        maxWidth: "100%",
        backgroundColor: Colors.white,
    },
    HeaderText: {
        fontWeight: "600",
        fontSize: 25,
        color: Colors.dark,
        fontFamily: FontFamily.bold
    },
    img_container: {
        flexDirection: "row",
        marginLeft: 19,
        marginRight: 19,
        justifyContent: "space-between",
        marginTop: 15,

    },
    img: {
        position: "relative",
        height: 60,
        width: 60,
        marginHorizontal: 8
    },
    a1: {
        fontSize: 13,
        marginTop: 10,
        color: Colors.blue,
        fontWeight: "500",
        fontFamily: FontFamily.semibold
    },
    a2: {
        fontSize: 13,
        marginTop: 10,
        fontWeight: "500",
        color: Colors.black,
        fontFamily: FontFamily.semibold
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
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13, alignSelf: "flex-end"
    },
    dte2: {
        paddingHorizontal: 99,
        fontWeight: "500",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 13
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
    bottom_text: {
        color: Colors.dark,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        fontSize: 20,
        marginLeft: 14,
    },
    radius_txt: {
        alignSelf: "center",
        paddingHorizontal: 10,
        fontFamily: FontFamily.semibold,
        color: Colors.dark,
        fontWeight: "400",
        lineHeight: 26,
        fontSize: 15
    },
    persentage: {
        marginTop: 35,
        fontWeight: "400",
        color: Colors.grey,
        fontFamily: FontFamily.semibold,
        fontSize: 17, marginHorizontal: 350
    },
    placehold: {
        alignSelf: "center",
        paddingHorizontal: 14,
        color: Colors.dark,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        fontSize: 15
    },
    percentage2: {
        alignSelf: "center",
        color: Colors.blue,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        fontSize: 16,
        marginHorizontal: 350,
        marginTop: 6
    },
    radio1: {
        alignSelf: "center",
    },
    posted: {
        alignSelf: "center",
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.bold,
        marginTop: 15,
        fontSize: 13
    },
    last_txt1: {
        marginTop: 10,
        color: Colors.dark,
        fontWeight: "600",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 13,
    },
    last_txt2: {
        marginTop: 10,
        color: Colors.grey,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 13,
    },
});
export default Feed;
