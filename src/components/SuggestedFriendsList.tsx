import { Layout, Spinner, Button } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import {
  View, ScrollView, Text, StyleSheet, Modal,
} from "react-native";
import fetchSuggestedFriends from "../calls/fetchSuggestedFriends";
import Colors from "../constants/Colors";
import useUserProfile from "../hooks/useUserProfile";
import UserProfile from "./profile/UserProfile";
import SuggestedFriend from "./SuggestedFriend";
import GradientButton from "./ui/GradientButton";

type SuggestedFriendsListProps = {};

const SuggestedFriendsList = (props:SuggestedFriendsListProps) => {
  const { loading, profilePicture, id } = useUserProfile();
  // eslint-disable-next-line no-undef
  const [suggestedFriends, setSuggestedFriends] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [friend, setFriend] = useState({});
  if (loading) return <Spinner />;

  useEffect(() => {
    if (id) {
      fetchSuggestedFriends({ id }).then((friends) => setSuggestedFriends(friends || []));
    }
  }, []);

  if (suggestedFriends.length === 0) {
    return null;
  }

  return (
    <>
      <View style={styles.row}>
        <Text style={styles.titleText}>Suggested Friends</Text>
        <ScrollView
          horizontal
          style={[styles.scrollView, styles.suggestedFriendsContainer]}
        >
          {suggestedFriends.map((suggestedFriend: any) => (
            <Button key={suggestedFriend.id} appearance="ghost" onPress={() => { setFriend(suggestedFriend); setVisible(true); }}>
              <SuggestedFriend {...suggestedFriend} />
            </Button>
          ))}
        </ScrollView>
      </View>
      <Modal
        animationType="slide"
        presentationStyle="formSheet"
        visible={visible}
      >
        <View style={{ backgroundColor: Colors.theme.creme, flex: 1, padding: 20 }}>
          <UserProfile user={friend} style={{ paddingTop: 50 }} />
          <GradientButton
            onPress={() => setVisible(false)}
            style={{
              marginVertical: 50,
              borderRadius: 30,
            }}
          >
            Close
          </GradientButton>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 10,
  },
  eventsContainer: {
    backgroundColor: "transparent",
  },
  suggestedFriendsContainer: {
    marginRight: -20,
    paddingLeft: 5,
    flexDirection: "row",
    marginBottom: 15,
  },
  courseGroupContainer: {
    flex: 1,
    flexBasis: "50%",
    backgroundColor: "transparent",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  titleText: {
    fontSize: 20,
    marginBottom: 10,
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
  },
  topRightButtonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    marginRight: 25,
  },
  titleContainer: {
    backgroundColor: "transparent",
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    position: "relative",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  profilePicture: {
    marginRight: 20,
    marginBottom: 20,
    alignSelf: "center",
  },
  buttonGroup: {
    justifyContent: "center",
    backgroundColor: Colors.theme.transparent,
  },
  scrollView: {
    marginRight: 0,
  },
});

export default SuggestedFriendsList;
