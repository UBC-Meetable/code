import React, { useEffect, useMemo } from "react";
import { List, Spinner, Text } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { CommonActions } from "@react-navigation/native";
import useEvents from "../../hooks/useEvents";
import EventBubble from "./EventBubble";
import { Event } from "../../API";
import { RootStackParamList } from "../../types";

type EventsListProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const eventMapToFlatArray = (eventMap:Map<string, Event[]>) => {
  const flatArray = [];
  const entries = Array.from(eventMap.entries());
  for (let i = 0; i < entries.length; i += 1) {
    const [key, value] = entries[i];
    flatArray.push(...value);
  }
  return flatArray;
};

const EventsList = ({ navigation }:EventsListProps) => {
  const { events, loading } = useEvents();
  const flattenedEvents = useMemo(() => eventMapToFlatArray(events), [events]);
  if (loading) return <Spinner />;

  const eventNavigation = (
    event:Event,
    courseName?:string,
  ) => {
    navigation.dispatch(
      CommonActions.navigate("Event", {
        screen: "EventScreen",
        event,
        courseName,
      }),
    );
  };

  const renderItem = ({ item }: { item: Event }) => {
    const groupTitle = `${item.courseGroup.title} ${item.courseGroup.code}`;
    return (
      <EventBubble
        onPress={() => eventNavigation(item, groupTitle)}
        startTime={item.startTime}
        endTime={item.endTime}
        title={item.title}
        courseName={groupTitle}
      />
    );
  };

  return (
    events.size > 0
      ? (
        <List
          bounces={false}
          style={[styles.card]}
          data={flattenedEvents}
          renderItem={renderItem}
        />
      ) : (
        <View style={{ padding: 10, width: "100%", marginVertical: 10 }}>
          <Text style={{
            margin: 10,
            textAlign: "center",
            color: "#404040",
          }}
          >
            No upcoming events
          </Text>
        </View>
      )
  );
};

const styles = StyleSheet.create({
  card: {
    maxHeight: 300,
    backgroundColor: "transparent",
  },
});

export default EventsList;
