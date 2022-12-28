import React from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Image, Alert, screenHeight } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomDrawer from 'react-native-bottom-drawer-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';

const TAB_BAR_HEIGHT = 1;
const DOWN_DISPLAY = screenHeight * 1;






const File = ({ navigation }) => {
    // renderContent = () => {
    //     return (
    //         <View>
    //             <View style={{ flexDirection: "row", }}>
    //                 <TouchableOpacity
    //                     style={styles.SquareButton1}>
    //                     <View >
    //                         <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/Shop/doc2.png')} style={styles.InnerImgeStyle} />
    //                     </View>
    //                 </TouchableOpacity>
    //                 <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
    //                     <Text style={styles.FolderText}>Document name.doc</Text>
    //                     <View style={{ flexDirection: "row" }}>
    //                         <Text style={styles.UserNameText}>User name</Text>
    //                         <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
    //                         <Text style={styles.dte}>8 March 2021</Text>
    //                     </View>
    //                 </View>
    //                 <View style={{ justifyContent: "flex-end", marginHorizontal: 85, marginVertical: 19 }}>
    //                     <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/Shop/menu.png')} style={{}} />
    //                 </View>
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 14,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    //                 <Text style={styles.TxtFile}>File information</Text>
    //                 <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/popup/infosqaure.png')} style={{ marginRight: 15, marginTop: 2 }} />
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 5,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    //                 <Text style={styles.TxtFile}>Rename</Text>
    //                 <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/popup/edit.png')} style={{ marginRight: 15, marginTop: 2 }} />
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 5,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    //                 <Text style={styles.TxtFile}>Move to</Text>
    //                 <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/popup/folder.png')} style={{ marginRight: 15, marginTop: 2 }} />
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 5,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    //                 <Text style={styles.TxtFile}>Permissions</Text>
    //                 <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/popup/3user.png')} style={{ marginRight: 15, marginTop: 2 }} />
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 5,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />
    //             <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
    //                 <Text style={styles.TxtRemove}>Remove to Trace</Text>
    //                 <Image source={require('/Users/system9/Documents/trainning/test/src/Asset/Image/popup/delete.png')} style={{ marginRight: 15, marginTop: 2 }} />
    //             </View>
    //             <View
    //                 style={{
    //                     marginTop: 5,
    //                     marginLeft: 10,
    //                     marginRight: 10,
    //                     borderBottomColor: '#E2E3E4',
    //                     borderBottomWidth: StyleSheet.hairlineWidth,
    //                 }} />

    //         </View>


    //     )
    // }

    // render() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
            <View style={{ flexDirection: "row", marginTop: 25, marginLeft: 20, justifyContent: "space-between" }}>
                <Text style={styles.HeaderTitle}>Files</Text>
                <View style={{ flexDirection: "row", marginRight: 20 }}>
                    <Ionicons icon name="ios-ellipsis-horizontal-circle-outline" size={28} style={{ color: Colors.blue, marginRight: 10, marginTop: 6, marginHorizontal: 15 }} onPress={() => navigation.navigate('fileinfo')} />
                </View>
            </View>
            <View
                style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: '#E2E3E4',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{ flex: 1 }}>
                    <View style={styles.OuterView}>
                        <Text style={styles.InnerText} >FOLDERS</Text>
                    </View>

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/folder.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText} onPress={() => navigation.navigate('fileinfo')}>Folder Name</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 15,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/folder.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText} onPress={() => navigation.navigate('fileinfo')}>Folder Name</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>


                    <View
                        style={{
                            marginTop: 15,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/folder.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText} onPress={() => navigation.navigate('fileinfo')}>Folder Name</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>


                    <View
                        style={{
                            marginTop: 16,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />



                    <View style={styles.OuterView}>
                        <Text style={styles.InnerText2}  >FILES</Text>
                    </View>

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row", marginTop: 1 }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/file.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText}>Document name.img</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 12,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText}>Document name.pdf</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 11,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc2.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText}>Document name.doc</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 11,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc3.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText}>Document name.xls</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 9, marginLeft: 5, marginRight: 5, }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 14,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />

                    <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={styles.SquareButton1}>
                                <View >
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/doc4.png')} style={styles.InnerImgeStyle} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: "column", justifyContent: "center", marginTop: 19 }}>
                                <Text style={styles.FolderText}>Document name.format</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={styles.UserNameText}>User name</Text>
                                    <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Shop/dot.png')} style={{ marginTop: 8, marginLeft: 5, marginRight: 5 }} />
                                    <Text style={styles.dte}>8 March 2021</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginRight: 20, marginTop: 33 }}>
                            <Icon icon name="dots-vertical" size={20} />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 11,
                            marginLeft: 10,
                            marginRight: 10,
                            borderBottomColor: '#E2E3E4',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }} />




                    {/* <BottomDrawer
                            containerHeight={300}
                            offset={TAB_BAR_HEIGHT} backgroundColor="white"
                            startUp={false} roundedEdges={true}
                            downDisplay={DOWN_DISPLAY}
                        >
                            {this.renderContent()}
                        </BottomDrawer> */}
                </View>
            </ScrollView>

            <View
                style={{
                    marginTop: 20,
                    marginLeft: 5,
                    marginRight: 5,
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }} />
        </SafeAreaView>

    )
}




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
    OuterView: {
        marginTop: 16,
        marginHorizontal: 14
    },
    InnerText: {
        fontSize: 13,
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.dark
    },
    InnerText2: {
        fontSize: 13,
        fontWeight: "600",
        color: Colors.grey,
        fontFamily: FontFamily.dark
    },
    SquareButton1: {
        marginTop: 20,
        marginHorizontal: 13,
        height: 55,
        width: 55,
        backgroundColor: "#F8F8FA",
        borderRadius: 10
    },
    InnerImgeStyle: {
        alignSelf: "center",
        marginVertical: 15
    },
    FolderText: {
        fontWeight: "500",
        color: Colors.dark,
        fontFamily: FontFamily.semibold,
        fontSize: 15
    },
    UserNameText: {
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
        fontSize: 13
    },
    dte: {
        fontWeight: "500",
        fontFamily: FontFamily.semibold,
        color: Colors.grey,
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
        marginTop: 9,
        color: Colors.grey,
        fontWeight: "400",
        fontFamily: FontFamily.semibold,
        marginLeft: 1,
        fontSize: 13,
    },
    TxtFile: {

        marginLeft: 15,
        fontFamily: FontFamily.semibold,
        color: Colors.black
    },
    TxtRemove: {
        marginLeft: 15,
        fontFamily: FontFamily.semibold,
        color: Colors.red
    }
});
export default File;

