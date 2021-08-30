import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  IndexPath,
  Input, Layout,
  Select,
  SelectItem, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import {
  Dimensions, KeyboardAvoidingView, StyleSheet,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { UserState } from "../../../API";
import updateUserProfile from "../../../calls/updateUserCourses";
import Colors from "../../../constants/Colors";
import useAuthenticatedUser from "../../../hooks/useAuthenticatedUser";
import { SignUpParamList } from "../../../types";
import BubbleBackground from "../../../assets/images/tutorial-bubble.svg";
import KeyboardSwipeLayout from "../ui/KeyboardSwipeLayout";

const window = Dimensions.get("window");

const UniScreen = ({ navigation }: { navigation: StackNavigationProp<SignUpParamList, "UniScreen"> }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const [major, setMajor] = useState("");
  const [year, setYear] = useState("");
  const universities = ["The University of British Columbia", "The University of Toronto", "Simon Fraser University", "Queen's University"];
  const university = universities[selectedIndex.row];
  const user = useAuthenticatedUser();
  const units = useSafeAreaInsets();
  const onSubmit = async () => {
    const yearInt = parseInt(year, 10);
    const res = await updateUserProfile({
      id: user.attributes.sub, major, university, userState: UserState.UNI_SELECTED, year: yearInt,
    });

    if (res.data) {
      navigation.navigate("NewProfileScreen");
    }
    // TODO Error handling
  };

  return (
    <KeyboardSwipeLayout>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={100}
        style={[styles.root, { paddingTop: units.top }]}
      >
        <BubbleBackground
          width={window.width}
          height={window.height}
          style={{ position: "absolute" }}
        />

        <Layout style={stylesTwo.container}>
          <Text style={styles.textStyle}>
            What university are you currently attending?
          </Text>
          <Select
            selectedIndex={selectedIndex}
            onSelect={(i) => setSelectedIndex(i as React.SetStateAction<IndexPath>)}
            style={styles.dropDownStyle}
            value={university}
          >
            {universities.map((uni) => <SelectItem title={uni} key={uni} />)}
          </Select>
        </Layout>

        <Layout style={stylesTwo.container}>
          <Text style={styles.textStyle}>What is your major?</Text>
          <Input
            placeholder="Business"
            value={major}
            onChangeText={(myMajor) => setMajor(myMajor)}
            style={styles.inputStyle}
          />
        </Layout>

        <Layout style={stylesTwo.container}>
          <Text style={styles.textStyle}>What academic year are you in?</Text>
          <Input
            placeholder="1"
            keyboardType="number-pad"
            value={year}
            onChangeText={(myYear) => setYear(myYear)}
            style={styles.inputStyle}
          />
        </Layout>
        <Button
          style={major ? styles.button : styles.disabledButton}
          onPress={() => {
            onSubmit();
          }}
          disabled={!major || !year}
        >
          {(evaProps: any) => (
            <Text
              {...evaProps}
              style={{ ...evaProps.style, ...styles.buttonText }}
            >
              Next
            </Text>
          )}

        </Button>
      </KeyboardAvoidingView>

    </KeyboardSwipeLayout>

  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
  button: {
    marginBottom: 20,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
    backgroundColor: "#02A3F4",
  },
  disabledButton: {
    marginBottom: 20,
    width: "75%",
    borderRadius: 100,
    borderWidth: 0,
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
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  courseContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: "100%",
  },
  dropDownStyle: {
    borderRadius: 100,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontFamily: "Poppins_400Regular",
  },
  inputStyle: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    backgroundColor: "#ffff",
  },
  yearStyle: {
    width: 20,
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    marginHorizontal: 20,
    marginVertical: 10,
    marginLeft: 30,
    marginRight: 30,
  },
});

const stylesTwo = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 80,
  },
});

export default UniScreen;
