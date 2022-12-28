import { StyleSheet } from "react-native";
import { FontFamily } from "../../util/CommonStyle/CustomFont";
import { Colors } from "../../util/CommonStyle/CustomColor";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    maxHeight: "100%",
    maxWidth: "100%",
    backgroundColor: "white"
  },
  img1: {

    height: 39,
    width: 47,
    marginLeft: 26,
    color: Colors.blue

  },
  txt_outer1: {

    marginRight: 24,



  },
  txt1: {

    fontSize: 35,
    fontWeight: "600",
    marginStart: "7%",
    fontFamily: FontFamily.dark,
    color: Colors.dark

  },
  txt2: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "400"

  },

  txt3: {
    fontSize: 16,
    marginStart: "7%",
    fontFamily: FontFamily.regular,
    color: Colors.grey,
    fontWeight: "400"


  },


  roundButton1: {

    width: "47%",
    height: 55,
    backgroundColor: Colors.blue,
    borderRadius: 10,


  },
  inner_txt1: {

    fontSize: 16,
    height: 150,
    width: 125,
    paddingLeft: 31,
    marginTop: 1,
    fontFamily: FontFamily.regular,
    color: Colors.white,
    fontWeight: "400",



  },
  roundButton2: {

    width: "47%",
    height: 55,
    borderRadius: 10,
    backgroundColor: "#F8F8FA"
  },
  inner_txt2: {

    fontSize: 16,
    height: 150,
    width: 125,
    paddingLeft: 31,
    marginTop: 1,
    fontFamily: FontFamily.regular,
    color: Colors.blue,
    fontWeight: "400",



  },
});
export default styles;