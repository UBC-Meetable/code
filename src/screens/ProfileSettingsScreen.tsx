import Auth from "@aws-amplify/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button, Layout, Text,
} from "@ui-kitten/components";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import UserContext from "../context/UserContext";
import { RootStackParamList } from "../types";

const ProfileSettingsScreen = ({ navigation }:{ navigation: StackNavigationProp<RootStackParamList, "ProfileSettings">; }) => {
  const { setUser } = useContext(UserContext);
  const handleLogout = async () => {
    Auth.signOut();
    setUser(undefined);
    navigation.reset({
      index: 0,
      routes: [{ name: "Tabs" }],
    });
  };

  return (
    <SafeAreaView style={styles.root}>
      <Layout style={stylesTwo.container} />
      <ScrollView contentContainerStyle={styles.selectionsContainer} />
      <Button
        style={styles.button}
        onPress={handleLogout}
      >
        {(evaProps: any) => (
          <Text
            {...evaProps}
            style={{ ...evaProps.style, ...styles.buttonText }}
          >
            Log Out
          </Text>
        )}
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
  addCoursebutton: {
    marginTop: 20,
    marginBottom: 30,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#FBBA82",
    height: 50,
  },
  button: {
    marginTop: 10,
    marginBottom: 30,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#7ED1EF",
    height: 50,
  },
  buttonText: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    textAlign: "center",
    flex: 1,
  },
  blacktext: {
    color: "#000",
  },
  topcontainer: {
    flex: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomcontainer: {
    flex: 0,
    display: "flex",
    flexBasis: 150,
    flexDirection: "column",
    alignItems: "center",
  },
  bodyContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: 30,
  },
  selectionsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "75%",
    backgroundColor: Colors.theme.lightCreme,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.theme.lightCreme,
    width: "100%",
  },
  inputStyle: {
    borderRadius: 100,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    marginLeft: 30,
    marginRight: 30,
  },
  courseTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    marginHorizontal: 20,
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 80,
  },
  deleteButtonText: {
    fontSize: 20,
    color: "#FAE1CB",
    marginLeft: 80,
  },
  headerStyle: {
    textAlign: "left",
    fontSize: 25,
    fontWeight: "600",
    marginRight: 165,
  },
});

const stylesTwo = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: Colors.theme.lightCreme,
  },
});

export default ProfileSettingsScreen;
