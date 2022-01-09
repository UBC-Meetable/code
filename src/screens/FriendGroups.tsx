import { StackNavigationProp, useHeaderHeight} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet, 
} from "react-native";
import {
  RootStackParamList,
} from "../types";

import { Text, View } from 'react-native';
import { CourseGroup} from "../types";
import fetchUserCourses from "../calls/fetchUserCourses";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";
import { ScrollView } from "react-native-gesture-handler";



const FriendGroups = ({
  navigation,
}: {
  navigation: StackNavigationProp<RootStackParamList, "Quiz">;
}) => {
  const Chats = () => { 
    const [courses, setCourses] = useState<CourseGroup[]>([]);
    const user = useAuthenticatedUser();
    useEffect(() => {
      const getCourseGroups = async () => {
        const res = await fetchUserCourses(user);
        console.log(res);
        setCourses(res);
      };
      getCourseGroups();
    }, []);
    const headerHeight = useHeaderHeight();
    return (
        <SafeAreaView style={{ paddingTop: headerHeight, backgroundColor: "#0000", flex: 1}}> 
        <ScrollView>
        {courses.map(({ messages }) => {
          console.log("here is all the content of the message__________")
          console.log(messages)
          const items = messages?.items
          return (
            <View style={styles.scrollView}>
              {items?.map(({ author, body, groupChatID}) => 
                  <Text style ={styles.bubble}>
                  In the {groupChatID} {`${author.firstName}`} says: {"\n"} 
                  {` ${body}`}</Text>)}
            </View>
          )
        })}
        </ScrollView>
        </SafeAreaView>
    );
  }

  return <Chats />
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 120,
    fontSize: 32,
    marginBottom: 16,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  button: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginBottom: 6,
    backgroundColor: "#add8e6",
    borderColor: "#000",
    paddingTop: 5,
    width: 200,
    height: 50,
    textAlign: "center",
    flexShrink: 1,
    flexWrap: "wrap",
    display: "flex",
  },
  bubble: {
    minHeight: 40,
    width: "75%",
    backgroundColor: "#E6F4F9",
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
    shadowColor: "#F0D9C8",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    marginTop: 2,
    marginBottom: 10,
    marginRight: 20,
  },
});



export default FriendGroups;