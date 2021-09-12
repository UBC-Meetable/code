import React, { ReactNode, useState } from "react";
import {
  Text, Layout, Input, ApplicationProvider,
} from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import * as eva from "@eva-design/eva";
import editCourseStyles from "./editCourseStyles";
import TextField from "../../components/ui/TextField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { SimpleCourseGroup } from "../../types";
import customOrangeTheme from "./customOrangeTheme.json";

type EditCourseBodyProps = {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  addCourse: () => void;
  renderCourses: (courses: SimpleCourseGroup[], isNew?: boolean,) => ReactNode;
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

      <PrimaryButton onPress={addCourse} status="primary">Add Course</PrimaryButton>
      <Layout style={[editCourseStyles.noBg, editCourseStyles.middleContainer, { width: "110%" }]}>
        <Text style={editCourseStyles.textStyle}>Your Courses</Text>
        <ScrollView contentContainerStyle={editCourseStyles.selectionsContainer}>
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

export default EditCourseBody;
