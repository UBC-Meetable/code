/* eslint-disable camelcase */
import {
  Button,
  Card,
  Input, Layout, Modal, Spinner, Text,
} from "@ui-kitten/components";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { User } from "../../API";
import reportUser from "../../calls/reportUser";
import useAuthenticatedUser from "../../hooks/useAuthenticatedUser";
import { ProfilePictureDimensions, ProfilePictureSize } from "../../types";
import ProfilePicture from "../ProfilePicture";
import Interests from "./InterestsOld";

type ReportUserProps = {
  onPressReport: (value: string) => Promise<boolean>;
  onSuccess: () => void;
  };

const ReportUserModal = ({ onPressReport, onSuccess }: ReportUserProps) => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  // const [success, setSuccess] = useState(false);

  return (
    <ScrollView
      style={styles.root}
      scrollEnabled={false}
      keyboardDismissMode="interactive"
      bounces={false}
    >
      <Card disabled>
        <Text style={styles.reportText}>
          Why are you reporting this user?
        </Text>
        <Input
          placeholder="Write your reason here..."
          value={value}
          onChangeText={(nextValue) => setValue(nextValue)}
          multiline
          textStyle={{ minHeight: 100 }}
        />
        <Button
          accessoryLeft={() => (disabled ? <Spinner /> : <Layout />)}
          style={styles.reportButton}
          onPress={() => {
            setDisabled(true);
            onPressReport(value).then((reported) => {
              // setSuccess(reported);
              if (!reported) {
                setDisabled(false);
              } else onSuccess();
            });
          }}
          disabled={disabled}
        >
          Report User
        </Button>
      </Card>
    </ScrollView>
  );
};

const InspectProfile = ({ user }: { user: User }) => {
  const [visible, setVisible] = React.useState(false);
  const me = useAuthenticatedUser();
  const [success, setSuccess] = useState(false);

  const handleReport = async (body: string) => {
    const reported = await reportUser({
      body, reportingUserID: me.attributes.sub, reportedUserID: user.id!, title: "Report",
    });
    return reported;
  };
  return (
    <Layout style={styles.card}>
      <Layout style={styles.profileContainer}>
        <ProfilePicture
          imageKey={user.profilePicture || ""}
          size={ProfilePictureSize.PROFILE}
        />
      </Layout>
      <Layout style={styles.nameContainer}>
        <Text style={styles.name}>{`${user.firstName}`}</Text>
        <Text style={styles.name}>{`${user.lastName}`}</Text>
      </Layout>
      <Layout style={styles.mainContent}>
        <Layout style={styles.bioContainer}>
          <Text style={styles.header}>Bio</Text>
          <ScrollView style={styles.scroll}>
            <Text style={styles.bio}>{`${user.bio}`}</Text>
          </ScrollView>
        </Layout>
        <Layout style={styles.interestContainer}>
          <Text style={styles.header}>Matching Interests</Text>
          <ScrollView bounces={false} contentContainerStyle={styles.chips}>
            <Interests user={user} />
          </ScrollView>
        </Layout>
        <Layout>
          <Button style={styles.reportButton} disabled={success} onPress={() => setVisible(true)}>
            {success ? "Successfully Reported User!" : "Report User"}
          </Button>
          <Modal
            visible={visible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => setVisible(false)}
          >
            <ReportUserModal
              onSuccess={() => {
                setVisible(false);
                setSuccess(true);
              }}
              onPressReport={(body:string) => handleReport(body)}
            />
          </Modal>
        </Layout>
      </Layout>
    </Layout>
  );
};

const transformPictureDistance = -ProfilePictureDimensions.PROFILE.height / 2;

const styles = StyleSheet.create({
  scroll: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#C9E8F3",
  },
  root: {
    width: "100%",
  },
  profileContainer: {
    backgroundColor: "#0000",
    transform: [{ translateY: transformPictureDistance }],
    marginBottom: transformPictureDistance,
    alignItems: "center",
  },
  mainContent: {
    backgroundColor: "#0000",
    flex: 1,
    flexGrow: 1,
    borderColor: "green",
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "space-evenly",
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: "#0000",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 0,
  },
  bio: {
    margin: 5,
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    color: "#FBBA82",
  },
  card: {
    flex: 1,
    borderRadius: 20,
    overflow: "visible",
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
    shadowOffset: { height: 3, width: 2 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 0,
    width: "100%",
  },
  nameContainer: {
    alignItems: "center",
    flex: 0,
  },
  name: {
    marginTop: 10,
    fontSize: 24,
    fontFamily: "Poppins_500Medium",
  },
  bioContainer: {
    flexGrow: 1,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    flex: 1,
    margin: 10,
    overflow: "visible",
  },
  interestContainer: {
    margin: 10,
    flexBasis: 110,
    flexDirection: "column",
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  reportButton: {
    margin: 10,
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
  },
  reportText: {
    marginBottom: 20,
    fontSize: 25,
  },
});

export default InspectProfile;
