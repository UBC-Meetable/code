import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import * as SecureStore from "expo-secure-store";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../types";
import Auth from "../utils/Auth";

const ProfileSettingsScreen = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "ProfileSettings">;
}) => {
  const handleLogout = async () => {
    await Auth.logout();
    await SecureStore.deleteItemAsync("user");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  function setEmailPass() {
    alert("TODO: Change email and password functionality");
  }

  const viewTOS = () => {
    Alert.alert(
      "Terms of service",
      "lorem ipsum (actual TOS to go here)",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel pressed"),
          style: "cancel",
        },
        {
          text: "I agree",
          onPress: () => console.log("Agree pressed"),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Layout style={stylesTwo.container}>
        <Layout style={styles.selectionsContainer}>
          <Text onPress={() => setEmailPass()} style={styles.optionTextStyle}>
            {" "}
            Change Email & Password
          </Text>
          <Icon
            onPress={() => setEmailPass()}
            name="chevron-forward"
            size={30}
            style={{ marginRight: 100, marginTop: 5 }}
          />
        </Layout>
        <Layout style={styles.selectionsContainer}>
          <Text onPress={() => viewTOS()} style={styles.optionTextStyle}>
            {" "}
            Terms of Service
          </Text>
          <Icon
            onPress={() => viewTOS()}
            name="chevron-forward"
            size={30}
            style={{ marginRight: 68, marginTop: 5 }}
          />
        </Layout>
      </Layout>
      <Button style={styles.button} onPress={handleLogout}>
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
    backgroundColor: "#FFF8F3",
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
    marginTop: 200,
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
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "#FFF8F3",
    marginLeft: 20,
    marginRight: 20,
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF8F3",
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
  optionTextStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 10,
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
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "#FFF8F3",
  },
});

export default ProfileSettingsScreen;
