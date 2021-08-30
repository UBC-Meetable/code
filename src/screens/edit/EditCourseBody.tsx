import React, { ReactNode } from "react";
import { Text, Layout, Input } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import editCourseStyles from "./editCourseStyles";
import TextField from "../../components/ui/TextField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { SimpleCourseGroup } from "../../types";

type EditCourseBodyProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  addCourse: () => void;
  renderCourses: (courses: SimpleCourseGroup[], isNew?: boolean,) => ReactNode;
  handleSave: () => void;
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
  return (
    <SafeAreaView style={editCourseStyles.root}>
      <Layout style={[editCourseStyles.form, editCourseStyles.noBg]}>
        <Layout style={editCourseStyles.container2}>
          <Text style={[editCourseStyles.textStyle, { left: "0%" }]}>Course</Text>
          <Layout style={editCourseStyles.codeContainer}>
            <TextField
              style={[editCourseStyles.courseCodeInput, editCourseStyles.courseStyle]}
              placeholder="COMM"
              value={currTitle}
              onChangeText={(newTitle) => {
                setTitle(newTitle);
              }}
              onSubmitEditing={() => codeRef.current?.focus()}
              ref={titleRef}
              returnKeyType="next"
            />
            <TextField
              ref={codeRef}
              style={[editCourseStyles.courseCodeInput, editCourseStyles.codeStyle]}
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

      <PrimaryButton onPress={addCourse} style={{ backgroundColor: "#FBBA82" }}>Add Course</PrimaryButton>

      <Layout style={[editCourseStyles.noBg, editCourseStyles.middleContainer, { width: "110%" }]}>
        <Text style={editCourseStyles.textStyle}>Your Courses</Text>
        <ScrollView contentContainerStyle={editCourseStyles.selectionsContainer}>
          {renderCourses(courses)}
          {renderCourses(newCourses, true)}
        </ScrollView>
      </Layout>
      {isNew
        ? <PrimaryButton>{newCourses.length > 0 ? "Save and Continue" : "Continue Later"}</PrimaryButton>
        : <PrimaryButton onPress={handleSave}>Save Changes</PrimaryButton>}
    </SafeAreaView>
  );
};

export default EditCourseBody;
