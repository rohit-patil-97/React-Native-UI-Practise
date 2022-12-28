import React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { FontFamily } from '../../util/CommonStyle/CustomFont';
import { Colors } from '../../util/CommonStyle/CustomColor';
import Icon from 'react-native-vector-icons/AntDesign';

const CELL_COUNT = 4;
const Signup2 = ({ navigation }) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="white" translucent={false} />
      <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 30, marginLeft: 15 }}>
        <Icon name="left" size={20} color="#554AF0" style={{ marginTop: 2, alignContent: "flex-start", flex: 1 }} onPress={() =>
          navigation.navigate('sign up')
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
            style={{ flex: 1 }} keyboardVerticalOffset={130}>
            <View style={{ flex: 0 }}>
              <View style={{ marginTop: 30 }}>
                <Text style={styles.txt1}>Enter the Code</Text>
              </View>
            </View>
            <ScrollView style={{ flex: 1, paddingTop: 1 }}>
              <View style={{ marginTop: 1 }}>
                <Text style={styles.txt2}>Enter the four-digit code that was sent to you at</Text>
              </View>
              <View style={{ marginTop: "1%" }}>
                <Text style={styles.txt3}>+380 96 517 18 19 </Text>
              </View>

              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
            </ScrollView>

            <View style={{}}>
              <View style={{ marginTop: 32, marginLeft: "6%" }}>
                <Text style={styles.sms_txt}>Didn't get the code?</Text>
              </View>
              <View style={{ alignItems: "center", }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('signup3')
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
  HeaderTitile: {
    color: "#04021D", fontWeight: "500", fontSize: 20, fontFamily: FontFamily.semibold, flex: 1, alignContent: "center", marginRight: 80
  },
  txt1:
  {
    fontSize: 27,
    marginLeft: "5%",
    fontFamily: FontFamily.semibold,
    color: Colors.dark
  },
  txt2:
  {
    marginLeft: "5%",
    fontSize: 14,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "400", lineHeight: 15
  },
  txt3:
  {
    color: Colors.blue,
    marginLeft: "5%",
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
  roundButton1:
  {
    width: "89%",
    height: 55,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: "5%",
    marginBottom: 30,
    backgroundColor: "#F8F8FA"
  },
  inner_txt1:
  {
    color: "#D2D2D7",
    fontSize: 17,
    height: 150,
    width: 125,
    paddingLeft: 24,
    marginBottom: 20,
    fontFamily: FontFamily.regular
  },
  sms_txt:
  {
    color: Colors.blue,
    alignItems: "center",
    fontSize: 15,
    fontFamily: FontFamily.regular,
  },
  root: { flex: 1, },
  codeFieldRoot: { margin: 50, marginLeft: "5%", marginTop: 5, marginRight: "5%", marginTop: 10 },
  cell:
  {
    width: 59,
    height: 62,
    lineHeight: 30,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    paddingTop: 14,
    borderRadius: 8,



  },
  focusCell:
  {
    borderColor: '#000',
  },
})
export default Signup2;
