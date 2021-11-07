import { Layout } from "@ui-kitten/components";
import React from "react";
import {
  GestureResponderEvent, StyleSheet, Text, TouchableOpacity,
} from "react-native";
import { ChatMessage, FriendGroup } from "../../API";
import Colors from "../../constants/Colors";
import { groupBubbleStyles } from "../Chat/CourseGroupBubble";
import MessagePreview from "../Chat/MessagePreview";
import PictureStack from "../PictureStack";

type FriendGroupBubbleProps = {
    friendGroup: FriendGroup;
    messages: ChatMessage[];
    onPress?: (event?: GestureResponderEvent) => void
}

const FriendGroupBubble = ({ onPress, friendGroup, messages }: FriendGroupBubbleProps) => {
  const users = friendGroup.users!.items!.map((item) => item!.user!);

  const lastInitialOrEmptyString = (lastName?: string | null) => {
    if (!lastName) return "";
    return lastName.substr(0, 1);
  };
  const renderGroupMemberNames = () => {
    const userNames = users.map((user) => `${user.firstName} ${lastInitialOrEmptyString(user.lastName)}`.trim());
    return userNames.join(", ");
  };

  return (
    <TouchableOpacity style={[groupBubbleStyles.bubble, styles.bubble]} onPress={onPress}>
      <Layout style={groupBubbleStyles.topContainer}>
        <Layout style={groupBubbleStyles.textContainer}>
          <Text style={groupBubbleStyles.bubbleText}>
            {friendGroup.title || renderGroupMemberNames()}
          </Text>
        </Layout>
      </Layout>

      <Layout style={groupBubbleStyles.bottomContainer}>
        <Layout style={groupBubbleStyles.bottomTextContainer}>
          <MessagePreview messages={messages} />
        </Layout>
        <Layout style={groupBubbleStyles.bottomPhotoContainer}>
          <Layout style={[groupBubbleStyles.bubbleSection, groupBubbleStyles.nameSection]}>
            <PictureStack users={users} />
          </Layout>
        </Layout>

      </Layout>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubble: {
    backgroundColor: Colors.theme.creme,
  },
});

export default FriendGroupBubble;
