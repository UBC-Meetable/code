import React, { ReactNode, useState } from "react";
import { Text, Layout, Input } from "@ui-kitten/components";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import TextField from "../../components/ui/TextField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { SimpleCourseGroup } from "../../types";
import Colors from "../../constants/Colors";

type EditCourseBodyProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  addCourse: () => void;
  renderCourses: (courses: SimpleCourseGroup[], isNew?: boolean) => ReactNode;
  handleSave: () => Promise<void>;
  currCode: string;
  currTitle: string;
  newCourses: SimpleCourseGroup[];
  courses: SimpleCourseGroup[];
  isNew?: boolean;
};

const EditCourseBody = ({
  setCode, setTitle, currCode, currTitle, addCourse, renderCourses, newCourses, courses,
  handleSave, isNew = false,
}:EditCourseBodyProps) => {
  const titleRef = React.useRef<Input>(null);
  const codeRef = React.useRef<Input>(null);
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.root}>
      <Layout style={[styles.form, styles.noBg]}>
        <Layout style={styles.container2}>
          <Text style={[styles.textStyle, { left: "0%" }]}>Course</Text>
          <Layout style={styles.codeContainer}>
            <TextField
              style={[styles.courseCodeInput, styles.courseStyle]}
              placeholder="COMM"
              value={currTitle}
              onChangeText={setTitle}
              onSubmitEditing={() => codeRef.current?.focus()}
              ref={titleRef}
              returnKeyType="next"
            />
            <TextField
              ref={codeRef}
              style={[styles.courseCodeInput, styles.codeStyle]}
              placeholder="101"
              value={currCode}
              onSubmitEditing={() => addCourse()}
              returnKeyType="done"
              onChangeText={(newCode) => {
                setCode(newCode.trim());
              }}
            />
          </Layout>
        </Layout>
      </Layout>

      <PrimaryButton onPress={addCourse} status="primary">Add Course</PrimaryButton>
      <Layout style={[styles.noBg, styles.middleContainer, { width: "110%" }]}>
        <Text style={styles.textStyle}>Your Courses</Text>
        <ScrollView contentContainerStyle={styles.selectionsContainer}>
          {renderCourses(courses)}
          {renderCourses(newCourses, true)}
        </ScrollView>
      </Layout>
      {isNew
        ? (
          <PrimaryButton
            loading={loading}
            status="info"
            onPress={() => {
              setLoading(() => true);
              handleSave().then(() => setLoading(() => false));
            }}
          >
            {newCourses.length > 0 ? "Save and Continue" : "Continue Later"}
          </PrimaryButton>
        )
        : (
          <PrimaryButton
            status="info"
            loading={loading}
            onPress={() => {
              setLoading(() => true);
              handleSave().then(() => setLoading(() => false));
            }}
          >
            Save Changes
          </PrimaryButton>
        )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  middleContainer: {
    flex: 1,
    flexGrow: 1,
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
  selectionsContainer: {
    flexDirection: "column",
    flex: 1,
    width: "80.75%",
    marginLeft: 10,
    left: "7.5%",
  },
  textStyle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
    left: "10%",
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

export default EditCourseBody;
