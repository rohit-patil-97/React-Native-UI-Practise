import React from 'react';
import { View, Text, StyleSheet, TextInput, onChangeText, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import Icon from 'react-native-vector-icons/AntDesign';



const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />

      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, marginBottom: 0, }}>
        <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "column" }}>
          <Icon name="left" size={20} color="#554AF0" style={{ marginTop: 10, marginLeft: "5%" }} onPress={() =>
            navigation.navigate('Screen1')
          } />
          <View style={{ marginTop: 50 }}>
            <Text style={styles.txt1}>Let’s sign you in.</Text>
          </View>
          <View style={{ marginTop: 7 }}>
            <Text style={styles.txt2}>Wellcome back{'\n'}to your Workspace!</Text>
          </View>
          <View style={{ justifyContent: "space-between", flexDirection: "column", marginTop: 30 }}>
            <View style={styles.SectionStyle}>
              <TextInput
                caretHidden={true}
                style={styles.input2}
                placeholder="Phone, email or username"
                keyboardType="default"
                placeholderTextColor="#686777"
              />
            </View>
            <View style={styles.SectionStyle2}>
              <TextInput
                caretHidden={true}
                style={styles.input2}
                placeholder="Password"
                keyboardType="name-phone-pad"
                maxLength={6}
                secureTextEntry={true}
                placeholderTextColor="#686777"
              />
              <Image source={require('/Users/system9/Documents/trainning/NewProj/src/Asset/Image/Screen1/Show.png')} style={styles.Image1Style} />
            </View>
          </View>
          <View style={{ marginTop: "1%" }}>
            <Text style={styles.frgot}>Forgot your password?</Text>
          </View>
          <View style={{ marginTop: 110, flexDirection: "row", marginLeft: "8%", alignSelf: "center" }}>
            <Text style={styles.account}>Don't have an account?   </Text>
            <Text style={styles.line}>|</Text>
            <Text style={styles.register} >     Register</Text>
          </View>
          <View style={{ marginBottom: 20, marginLeft: "6%", marginRight: "6%", marginTop: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('feed')
              }
              style={styles.roundButton1}>
              <View style={{ alignItems: 'center', padding: 15, marginRight: 5 }}>
                <Text style={styles.inner_txt1} >Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundColor: "white"
  },
  txt1:
  {
    color: Colors.black,
    fontSize: 33,
    fontWeight: "600",
    marginStart: "6%",
    fontFamily: FontFamily.semibold,
    lineHeight: 35
  },
  txt2:
  {
    fontSize: 33,
    marginStart: "6%",
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    lineHeight: 42

  },
  image1_style:
  {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  input:
  {
    height: 55,
    width: 340,
    borderWidth: 1,
    borderColor: "#E2E3E4",
    borderRadius: 11,
    fontWeight: "500",
    alignItems: "center",
    fontSize: 16,
    paddingLeft: 18,
    paddingTop: 9
  },
  input2:
  {
    flex: 1,
    fontWeight: "500",
    alignItems: "center",
    fontSize: 16,
    paddingLeft: 18, height: 55,
    width: 310, paddingTop: 9
  },
  frgot:
  {
    fontSize: 15,
    marginLeft: "7%",
    fontFamily: FontFamily.semibold,
    color: Colors.blue,
    fontWeight: "600"
  },
  line:
  {
    color: "#E2E3E4"
  },
  register:
  {
    marginRight: 60,
    fontFamily: FontFamily.semibold,
    color: Colors.blue,
    fontSize: 15,
    fontWeight: "600"
  },
  roundButton1:
  {
    width: "100%",
    height: 55,
    borderRadius: 10,
    backgroundColor: "#F8F8FA",
  },
  inner_txt1:
  {
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 35,
    marginBottom: 10,
    fontFamily: FontFamily.regular,
    color: "#D2D2D7",
    fontWeight: "500"
  },
  account:
  {
    fontSize: 15,
    width: 200,
    marginLeft: "8%",
    fontFamily: FontFamily.regular,
    color: Colors.black,
    fontWeight: "400"
  },
  SectionStyle:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: "87%",
    borderWidth: 1,
    borderColor: "#E2E3E4",
    borderRadius: 11,
    marginLeft: "6%",
  },
  SectionStyle2:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: "87%",
    borderWidth: 1,
    borderColor: "#E2E3E4",
    borderRadius: 11,
    marginLeft: "6%",
    marginTop: 25
  },
  Image1Style: {
    padding: 10,
    marginTop: 4,
    height: 30,
    width: 32,
    resizeMode: 'contain',
    alignItems: 'center',
    marginRight: 14
  },
});
export default Signin;
