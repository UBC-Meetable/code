import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Chip } from "react-native-paper";
import ProfilePicture from "../ProfilePicture";
import useCourseGroups from "../../hooks/useCourseGroups";
import Tag from "./Tag";

type UserProfileProps = {
  user: any;
  style?: ViewStyle;
}

const UserProfile = ({ user, style }: UserProfileProps) => {
  const {
    firstName, lastName, email, bio, profilePicture, interests = [],
  } = user;
  const { groups } = useCourseGroups();
  console.log(groups);

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      alignItems: "center",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      ...style,
    }}
    >
      <ProfilePicture imageKey={profilePicture} editable />
      <Text style={styles.name}>
        {`${firstName} ${lastName}`.trim()}
      </Text>
      <Text style={styles.email}>
        {email || ""}
      </Text>

      <Layout style={{
        display: "flex", backgroundColor: "white", padding: 10, width: "100%", marginVertical: 10, borderRadius: 10, alignItems: "center", justifyContent: "center",
      }}
      >
        {bio ? <Text style={{ textAlign: "center" }}>{bio}</Text> : <Text style={{ margin: 10, textAlign: "center", color: "#404040" }}>No bio entered</Text>}
      </Layout>

      <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20, margin: 10 }} category="h2">Enrolled Classes</Text>
      <Layout style={{ padding: 10, borderRadius: 20, width: "100%" }}>
        {groups.length ? groups.map(({ title, code }, index) => <Tag key={index} type="course" text={`${title} ${code}`} />)
          : <Text style={{ margin: 10, textAlign: "center", color: "#404040" }}>No courses registered</Text>}
      </Layout>

      <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20, margin: 10 }} category="h2">Interests</Text>
      <Layout style={{
        padding: 10, borderRadius: 20, width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "center",
      }}
      >
        {interests.length ? interests.map((interest: string, index: number) => <Chip key={index} style={{ margin: 5, backgroundColor: "#FEEDDE" }} textStyle={{ fontFamily: "Poppins_500Medium", fontSize: 12 }}>{interest}</Chip>)
          : <Text style={{ margin: 10, textAlign: "center", color: "#404040" }}>No interests selected</Text>}
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  email: {
    fontSize: 14,
  },
});

export default UserProfile;
