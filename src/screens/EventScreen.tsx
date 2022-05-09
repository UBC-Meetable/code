import {
  Layout, Text, Card, Avatar,
} from "@ui-kitten/components";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import GradientButton from "../components/ui/GradientButton";
import EventBubble from "../components/events/EventBubble";
import { Event } from "../API";

const EventScreen = (props: any) => {
  const { navigation, route } = props;
  const { event, courseName } = route.params;
  const {
    description, title, startTime, endTime,
  } = event as Event;

  return (
    <View style={styles.background}>
      <Layout style={styles.rowTop}>
        <Icon name="ios-chevron-back" size={32} onPress={() => navigation.pop()} />
      </Layout>
      <Layout style={styles.row}>
        <Text style={{ fontFamily: "Poppins_700Bold", fontSize: 32 }} category="h1">
          {title}
        </Text>
      </Layout>
      {description && (
        <Layout style={styles.row}>
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }} category="h2">
            Description
          </Text>
          <Card style={styles.card}>
            <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 14 }}>
              {description}
            </Text>
          </Card>
        </Layout>
      )}
      <Layout style={styles.row}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }} category="h2">
          Details
        </Text>
        <EventBubble
          courseName={courseName}
          title={title}
          startTime={startTime}
          endTime={endTime}
        />
      </Layout>
      <Layout style={styles.row}>
        <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 20 }} category="h2">
          Event Chat
        </Text>
        <Layout style={styles.joinChat}>
          <Avatar source={require("../assets/images/profilePic2.jpg")} />
          <Text style={{ fontFamily: "Poppins_500Medium", fontSize: 16 }}>
            Join Event Chat
          </Text>
          <Icon name="ios-chevron-forward" size={32} onPress={() => console.log("Event chat")} />
        </Layout>
      </Layout>
      <Layout style={styles.bottom}>
        <GradientButton style={{ borderRadius: 25 }}>Join Chat</GradientButton>
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "transparent",
    height: "100%",
    padding: 20,
  },
  rowTop: {
    backgroundColor: "transparent",
    marginTop: 30,
    marginLeft: -10,
  },
  row: {
    marginVertical: 10,
    // flexDirection: 'row',
    // alignItems: 'center',
    backgroundColor: "transparent",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "100%",
    borderRadius: 20,
    borderWidth: 0,
    // marginRight: '7%',
    // marginLeft: '7%',
  },
  joinChat: {
    // flex: 1,
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  bottom: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
  },
  button: {
    borderRadius: 20,
  },
});

export default EventScreen;
