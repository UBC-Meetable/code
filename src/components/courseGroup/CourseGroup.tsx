import { useHeaderHeight } from "@react-navigation/stack";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { homeStyles } from "../../styles";

const window = Dimensions.get("window");

type CourseGroupProps = {};

const CourseGroup = (props: CourseGroupProps) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Layout style={[homeStyles.body, styles.root, { marginTop: headerHeight }]}>
        <ScrollView>
          <Text style={[homeStyles.titleText]}>Suggested Friends</Text>
          <Layout style={[homeStyles.eventsContainer]}>
            <Text> List of friends here </Text>
          </Layout>
          <Text style={[homeStyles.titleText, styles.paddedContainer]}>Upcoming Events</Text>
          <Layout style={[homeStyles.eventsContainer]}>
            <Text> Events Should link to event page? </Text>
          </Layout>
        </ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 0,
    display: "flex",
    width: "100%",
    flex: 1,
    backgroundColor: "transparent",
  },
  paddedContainer: {
    paddingVertical: 10,
  },
});

export default CourseGroup;
