import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, onChangeText, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import Icon from 'react-native-vector-icons/AntDesign';

const Signup3 = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginLeft: 15 }}>
        <Icon name="left" size={20} color="#554AF0" style={{
          marginTop: 2, alignContent: "flex-start", flex: 1,
        }} onPress={() =>
          navigation.navigate('Screen1')
        } />
        <Text style={styles.HeaderTitile}>Sign up</Text>
      </View>
      <View
        style={{
          marginTop: 7,
          marginLeft: 5,
          marginRight: 5,
          borderBottomColor: '#E2E3E4',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "column" }}>
          <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : "height"}
            style={{ flex: 1 }} keyboardVerticalOffset={140}>
            <View style={{ flex: 0 }}>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.txt1}>Mobile Number</Text>
              </View>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ marginTop: 1 }}>
                <Text style={styles.txt2}>You will receive an SMS code for verification.</Text>
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  caretHidden={true}
                  style={styles.pass}
                  placeholder="Mobile Phone"
                  maxLength={10}
                  keyboardType="phone-pad"
                  activeUnderlineColor='white'
                  underlineColor='white'

                />

              </View>
            </ScrollView>
            <View style={{ flex: 0 }}>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('signup2')
                  }
                  style={styles.roundButton1}>
                  <View style={{ alignItems: 'center', padding: 15, marginRight: 5 }}>
                    <Text style={styles.inner_txt1}>Continue</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </SafeAreaView >
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
  HeaderTitile: {
    color: "#04021D", fontWeight: "500", fontSize: 20, fontFamily: FontFamily.semibold, flex: 1, alignContent: "center", marginRight: 80
  },
  txt1:
  {
    marginTop: "5%",
    fontSize: 25,
    fontWeight: "600",
    marginLeft: "6%",
    fontFamily: FontFamily.semibold,
    color: Colors.dark
  },
  txt2:
  {
    marginLeft: "6%",
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "400", lineHeight: 15
  },
  txt3:
  {
    color: "blue",
    marginLeft: "6%",
    fontSize: 17,
  },
  pass:
  {
    flex: 1,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontSize: 16,
    paddingLeft: 18,
    alignItems: "center",
    fontWeight: "500",
    paddingTop: 14
  },
  roundButton1:
  {
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginRight: "6%",
    color: Colors.blue,
    borderRadius: 10,
    margin: "5%",
    backgroundColor: Colors.blue,
    marginBottom: 30
  },
  inner_txt1:
  {
    color: Colors.white,
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 23,
    marginBottom: 10,
    fontFamily: FontFamily.regular,
    fontWeight: "500",
  },
  sms_txt:
  {
    color: "blue",
    alignItems: "center",
    fontSize: 17,
  },
  image_style:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 20
  },
  input:
  {
    height: 45,
    width: "90%",
    margin: 29,
    borderWidth: 1,
    borderRadius: 7,
    margin: "7%",
    marginLeft: "5%",
  },
  SectionStyle:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: "88%",
    borderWidth: 1,
    borderColor: "#E2E3E4",
    borderRadius: 13,
    marginLeft: "6%",
    margin: 20, marginTop: 25
  },
  Image1Style:
  {
    padding: 10,
    margin: 1,
    height: 25,
    width: 30,
    resizeMode: 'contain',
    alignItems: 'center',
    marginRight: 14
  },
})
export default Signup3;
