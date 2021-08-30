import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const editCourseStyles = StyleSheet.create({
  middleContainer: {
    flex: 1,
    flexGrow: 1,
  },
  bottomContainer: {
    flex: 0,
    flexBasis: 50,
    alignItems: "center",
    marginBottom: 25,
  },
  addCourseContainer: {
    flex: 0,
    flexBasis: 50,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  noBg: {
    backgroundColor: "#0000",
  },
  root: {
    backgroundColor: Colors.theme.lightCreme,
    height: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    alignItems: "center",
    width: "90%",
  },
  addCoursebutton: {
    backgroundColor: "#FBBA82",
  },
  button: {
    marginBottom: 30,
    width: "100%",
    borderRadius: 15,
    borderWidth: 0,
    minHeight: 50,
    flex: 1,
    backgroundColor: "#7ED1EF",
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    color: "#fff",
    textAlign: "center",
  },
  selectionsContainer: {
    flexDirection: "column",
    flex: 1,
    width: "80.75%",
    marginLeft: 10,
    left: "7.5%",
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    marginVertical: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.22,
    elevation: 3,
  },
  newCourseContainer: {
    backgroundColor: "#FFEEDE",
  },
  newCourseText: {
    color: "#FBBA82",
  },
  courseTextContainer: {
    flex: 1,
    borderRadius: 10,
    padding: 20,
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    left: "10%",
  },
  deleteContainer: {
    flexBasis: 60,
    borderRadius: 10,
  },
  courseTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
  },
  deleteButtonText: {
    fontSize: 20,
    color: "#FBBA82",
  },
  headerStyle: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
    marginRight: 165,
  },
  codeContainer: {
    flexDirection: "row",
    backgroundColor: "#0000",
  },
  courseStyle: {
    flex: 0.5,
  },
  codeStyle: {
    flex: 0.5,
  },
  courseCodeInput: {
    borderRadius: 15,
    margin: 5,
    backgroundColor: "#ffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  container2: {
    width: "100%",
    margin: 5,
    backgroundColor: Colors.theme.lightCreme,
    justifyContent: "center",
  },
});

export default editCourseStyles;
