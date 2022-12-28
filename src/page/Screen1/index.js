import React from 'react';
import { View, Text, SafeAreaView, Button, TouchableOpacity, StatusBar, Image, ScrollView, StyleSheet } from 'react-native';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
const img = require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen1/image1.png');
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Screen1 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', marginLeft: "6%", marginRight: "6%" }}>

        {/* <View style={styles.maincontainer}> */}
        <View style={{ flex: 1, justifyContent: "space-between", flexDirection: "column", alignSelf: "center" }}>
          <View style={{ marginTop: 80, }}>
            <Image style={styles.img1} source={img} />
          </View>


          <View style={{ flex: 1, justifyContent: "flex-start", flexDirection: "column", marginTop: 89 }}>
            <View style={styles.txt_outer1}>
              <Text style={styles.txt1}>Explore new{'\n'}team collaboration{'\n'}experiance</Text>
            </View>

            <View style={{ marginTop: "7%", }}>
              <Text style={styles.txt2}>Keep your files, documents, tools{'\n'}in one place.</Text>
            </View>

            <View style={{ marginTop: "2%" }}>
              <Text style={styles.txt3}>Communicate with your team and set{'\n'}up business processes and goals{'\n'}through the mobile and web application.</Text>
            </View>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-between", paddingHorizontal: "2%", marginBottom: 15 }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('sign up')
            }
            style={styles.roundButton1}>
            <View style={{ alignItems: 'center', padding: 15, marginRight: 5 }}>
              <Text style={styles.inner_txt1}>Register</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.roundButton2}
            onPress={() =>
              navigation.navigate('signin')
            }>
            <View style={{ alignItems: 'center', padding: 15 }}>
              <Text style={styles.inner_txt2}>Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </ScrollView>

    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  // maincontainer: {
  //   // width: scale(30),
  //   // height: verticalScale(50),
  //   // padding: moderateScale(20, 0.6)
  // },
  container:
  {
    flex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundColor: "white",

  },
  img1:
  {
    height: 39,
    width: 47,

  },
  txt_outer1:
  {
    // marginRight: 24,
  },
  txt1:
  {
    fontSize: 32,
    fontWeight: "600",

    fontFamily: FontFamily.semibold,
    color: Colors.black,
    fontWeight: "600",
    lineHeight: 39,
  },
  txt2:
  {
    fontSize: 17,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "600",
    lineHeight: 28,
    textDecorationStyle: "solid",
  },
  txt3:
  {
    fontSize: 17,

    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "600",
    lineHeight: 28
  },
  roundButton1: {
    width: "50%",
    height: 58,
    backgroundColor: Colors.blue,
    borderRadius: 10,
    textDecorationStyle: "solid",
  },
  inner_txt1:
  {
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 30,
    marginTop: 1,
    fontFamily: FontFamily.semibold,
    color: Colors.white,
    fontWeight: "500",
  },
  roundButton2:
  {
    width: "48%",
    height: 58,
    borderRadius: 10,
    backgroundColor: "#F8F8FA"
  },
  inner_txt2:
  {
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 30,
    marginTop: 1,
    fontFamily: FontFamily.semibold,
    color: Colors.blue,
    fontWeight: "500",
  },
});
export default Screen1;