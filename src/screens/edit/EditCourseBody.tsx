import React, { ReactNode, useEffect, useState } from "react";
import { Text, Layout, Input } from "@ui-kitten/components";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import editCourseStyles from "./editCourseStyles";
import TextField from "../../components/ui/TextField";
import PrimaryButton from "../../components/ui/PrimaryButton";
import { SearchSelectItem, SimpleCourseGroup, UBCCourse } from "../../types";
import getAllSubjects from "../../calls/getAllSubjects";
import useSubjectList from "../../hooks/useSubjectList";
import SearchableDropdown from "../../components/edit_courses/SearchableDropdown";
import getSubjectSections from "../../calls/getSubjectSections";

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
  const { subjects: subjectList, loading: subjectsLoading } = useSubjectList();
  const [subjects, setSubjects] = useState<SearchSelectItem[]>([]);
  const [sections, setSections] = useState<SearchSelectItem[]>([]);
  const [loadingCourses, setLoadingCourses] = useState<boolean>(false);

  const handleChangeSubject = async (subject: string) => {
    setLoadingCourses(() => true);
    const fetchedSections = await getSubjectSections(subject);
    setTitle(() => subject);
    setSections(fetchedSections);
    setLoadingCourses(() => false);
  };

  const handleChangeCode = async (code: string) => {
    setCode(() => code);
  };

  useEffect(() => {
    const formattedItems: any[] = [];
    subjectList.forEach((subject) => {
      formattedItems.push(
        {
          name: subject,
        },
      );
    });
    setSubjects(() => formattedItems);
  }, [subjectsLoading]);

  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={editCourseStyles.root}>
      <Layout style={[editCourseStyles.form, editCourseStyles.noBg]}>
        <Layout style={editCourseStyles.container2}>
          <Text style={[editCourseStyles.textStyle, { left: "0%" }]}>Course</Text>
          <Layout style={editCourseStyles.codeContainer}>
            <SearchableDropdown
              title="Subject"
              onChange={handleChangeSubject}
              subjects={subjects}
              loading={subjectsLoading}
            />
            <SearchableDropdown
              title="Course Code"
              onChange={handleChangeCode}
              subjects={sections}
              loading={loadingCourses}
            />
          </Layout>

        </Layout>
      </Layout>
      <PrimaryButton
        style={styles.behind}
        onPress={addCourse}
        status="primary"
      >
        Add Course
      </PrimaryButton>
      <Layout style={[editCourseStyles.noBg, editCourseStyles.middleContainer, { width: "110%" }, styles.behind]}>

        <Text style={[editCourseStyles.textStyle]}>Your Courses</Text>
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

const styles = StyleSheet.create({
  behind: {
    zIndex: -1,
  },
  shadow: {
    shadowColor: "#F0D9C8",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

export default EditCourseBody;
