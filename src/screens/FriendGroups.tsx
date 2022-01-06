import { StackNavigationProp} from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import {
  StyleSheet, 
} from "react-native";
import {
  RootStackParamList,
} from "../types";

import { Text, View } from 'react-native';
import { CourseGroup} from "../types";
import fetchUserCourses from "../calls/fetchUserCourses";
import useAuthenticatedUser from "../hooks/useAuthenticatedUser";



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
    return (
      <View style={styles.layout}>
        {courses.map(({ messages }) => {
          const items = messages?.items
          return (
            <>
              {items?.map(({ author, body }) => <Text style ={styles.button}>{`${author.firstName} says ${body}`}</Text>)}
            </>
          )
        })}
      </View>
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
    fontSize: 32,
    marginBottom: 16,
  },
  button: {
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    marginBottom: 6,
    backgroundColor: "#add8e6",
    borderColor: "#000",
  },
});



export default FriendGroups;