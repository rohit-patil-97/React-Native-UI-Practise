import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image, ScrollView, TouchableOpacity, ImageBackground, device, LoadingView, ActivityIndicator } from 'react-native';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { OrientationLocker, PORTRAIT, LANDSCAPE } from "react-native-orientation-locker";
import Orientation from 'react-native-orientation-locker';


Orientation.lockToPortrait(); //To set layout screen in portrait mode
// Orientation.lockToLandscape(); //To set layout screen in landscape mode
Orientation.unlockAllOrientations(); //to remove all orientation 

const Post3 = ({ navigation }) => {

    const devices = useCameraDevices()
    const device = devices.back

    useEffect(() => {
        getPermission();

    })

    const getPermission = async () => {
        const newCameraPermission = await Camera.requestCameraPermission()
        const newMicrophonePermission = await Camera.requestMicrophonePermission()
    }
    console.log(" device ", device);

    if (device == null) return <ActivityIndicator />

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#1B1D25" translucent={false} />
            <View style={styles.inner_container}>
                <View >
                    <Camera
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={true}
                    />
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 20, marginStart: 21 }}>
                    <Icon name="setting" size={32}
                        style={{ height: 46, width: 46, color: "white", }} />
                    <Ionicons name="ios-flash-off" size={32}
                        style={{ height: 46, width: 46, color: "white", }} />
                    <Icon name="close" size={32}
                        style={{ height: 46, width: 46, color: "white", }} onPress={() => navigation.navigate('post1')} />
                </View>
                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginLeft: 20, alignItems: "flex-end", }}>
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/square.png')} style={{ height: 40, width: 40, marginVertical: 22 }} />
                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Post/round.png')} style={{}} />
                    <FontAwesome name="refresh" size={32}
                        style={{ color: "white", marginRight: 20, paddingVertical: 24 }} />
                </View>
            </View>
            <View style={styles.imageTypeSelectionContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableHighlight style={styles.imageTypeSelecton}>
                        <Text style={styles.selectionText}>LIVE</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.imageTypeSelecton}>
                        <Text style={styles.selectionText}>CLIP</Text>
                    </TouchableHighlight>
                    <View style={styles.roundbutton}>
                        <TouchableHighlight style={styles.imageTypeSelecton}>
                            <Text style={styles.selectionTexthighlight}>STORY</Text>
                        </TouchableHighlight>
                    </View>
                    <TouchableHighlight style={styles.imageTypeSelecton}>
                        <Text style={styles.selectionText}>HANDS-FREE</Text>
                    </TouchableHighlight>

                </ScrollView>
            </View>
        </SafeAreaView >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1B1D25",

    },
    inner_container: {
        flex: 1,


    },

    imageTypeSelecton: {
        marginHorizontal: 11,
        paddingHorizontal: 9,

    },
    selectionText: {
        fontFamily: FontFamily.semibold,
        color: "#686777",
        fontWeight: "600",
        fontSize: 14,
        marginTop: 5,
    },

    selectionTexthighlight: {
        fontFamily: FontFamily.semibold,
        color: Colors.white,
        fontWeight: "500",
        fontSize: 14, alignSelf: "center",
        paddingTop: 8, width: 50, paddingLeft: 2
    },
    roundbutton: {
        height: 35,
        width: 76,
        backgroundColor: "#686777",
        borderRadius: 24,

    },
    imageTypeSelectionContainer: {
        paddingVertical: 30,

    }
});
export default Post3;
