import { Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { User } from "../API";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ProfilePictureSize } from "../types";
import ProfilePicture from "./ProfilePicture";

type PictureStackProps = {
    users: User[];
};

const PictureStack = ({ users }:PictureStackProps) => {
  const user = useAuthenticatedUser();
  const otherUsers = users.filter((currUser) => currUser.id !== user.attributes.sub);
  const pictureIds = otherUsers.map((currUser) => currUser?.profilePicture || "");
  return (
    <Layout style={styles.pics}>
      {
        pictureIds?.map((id, index) => {
          if (index >= 4) return <Layout />;
          return (
            <Layout
              style={{ position: "absolute", right: 0 + index * 23, backgroundColor: "#0000" }}
              key={id}
            >
              <ProfilePicture
                size={ProfilePictureSize.BUBBLE}
                imageKey={id!}
              />
            </Layout>
          );
        })
      }
    </Layout>
  );
};

const styles = StyleSheet.create({
  pics: {
    flex: 1,
    backgroundColor: "#0000",
    flexDirection: "row",
    position: "relative",
    justifyContent: "flex-end",
    height: "100%",
  },
});

export default PictureStack;
