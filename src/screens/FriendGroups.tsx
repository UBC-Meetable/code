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
    return (
      <View style={styles.layout}>
        <ScrollView style = {styles.scrolling}> 
        {courses.map(({ messages }) => {
          const items = messages?.items
          return (
            <>
              {items?.map(({ author, body }) => 
              
                <Text style ={styles.bubble}>{`${author.firstName} says ${body}`}</Text>)}
            </>
          )
        })}
        </ScrollView>
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
    marginTop: 120,
    fontSize: 32,
    marginBottom: 16,
  },
  scrolling: {
    marginTop : 10,
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
    minHeight: 20,
    height: 60,
    display: "flex",
    margin: 5,
    padding: 5,
    borderColor: "white",
    borderRadius: 24,
    backgroundColor: "#E6F4F9",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    position: "relative",
    flexGrow: 1,
  },
});



export default FriendGroups;