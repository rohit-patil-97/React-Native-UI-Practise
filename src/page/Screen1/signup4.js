import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, Image, TextInput, onChangeText, StatusBar, ScrollView, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import Icon from 'react-native-vector-icons/AntDesign';

const Signup4 = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginLeft: 15 }}>
        <Icon name="left" size={20} color="#554AF0" style={{ marginTop: 2, alignContent: "flex-start", flex: 1, }} onPress={() =>
          navigation.navigate('signup3')
        } />
        <Text style={styles.HeaderTitile}>Sign up</Text>
      </View>
      <View
        style={{
          marginTop: 8,
          marginLeft: 5,
          marginRight: 5,
          borderBottomColor: '#E2E3E4',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }} />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-evenly", flexDirection: "column" }}>
          <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? "padding" : "height"}
            style={{ flex: 1 }} keyboardVerticalOffset={80}>
            <View style={{ flex: 0 }}>
              <View style={{ marginTop: 5 }}>
                <Text style={styles.txt1}>Create Username</Text>
              </View>
            </View>
            <ScrollView style={{ flex: 1 }}>
              <View style={{ marginTop: 2 }}>
                <Text style={styles.txt2}>Identify yourself or be creative!!! </Text>
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  caretHidden={true}
                  style={styles.username}
                  placeholder="Username"
                  keyboardType="email-address"
                />
                <Icon name="checksquare" size={21} color="#554AF0" style={{ color: "green", marginRight: 15, alignSelf: "center", marginTop: 2 }} />
              </View>
            </ScrollView>
            <View style={{ flex: 0 }}>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('feed')
                  }
                  style={styles.roundButton1}>
                  <View style={{ alignItems: 'center', padding: 15, marginRight: 5 }}>
                    <Text style={styles.inner_txt1}>Finish</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
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
    backgroundColor: "white"
  },
  HeaderTitile: {
    color: "#04021D", fontWeight: "500", fontSize: 20, fontFamily: FontFamily.semibold, flex: 1, alignContent: "center", marginRight: 80
  },
  txt1: {
    marginTop: "4%",
    fontSize: 26,
    fontWeight: "600",
    marginLeft: "6%",
    fontFamily: FontFamily.semibold,
    color: Colors.dark
  },
  txt2: {
    marginLeft: "6%",
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "400", lineHeight: 14
  },
  txt3: {
    color: "blue",
    marginLeft: "6%",
    fontSize: 15,

  },
  username: {
    flex: 1,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontSize: 15,
    paddingLeft: 19,
    alignItems: "center",
    fontWeight: "500",
    paddingTop: 14
  },
  roundButton1: {
    width: "88%",
    height: 55,
    marginLeft: "6%",
    marginRight: "6%",
    backgroundColor: Colors.blue,
    borderRadius: 10,
    margin: "5%",
    marginBottom: 30
  },
  inner_txt1: {
    color: Colors.white,
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 36,
    marginBottom: 10,
    fontFamily: FontFamily.regular,
    fontWeight: "500"
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 53,
    width: "88%",
    borderWidth: 1,
    borderColor: "#E2E3E4",
    borderRadius: 13,
    marginLeft: "6%",
    margin: 20
  },
  // Image1Style: {
  //   padding: 10,
  //   margin: 1,
  //   height: 80,
  //   width: 23,
  //   resizeMode: 'contain',
  //   alignItems: 'center',
  //   marginRight: 15
  // },
})
export default Signup4;
