import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../types";
import { Text, StyleSheet } from "react-native";




const SuggestedFriends = ()=> {
    const GetSuggestedFriends = ()=> {
        return(           
            <Text>
                Hello this is the list of suggested friends:
            </Text>
        )
    }
    return(<GetSuggestedFriends />)
}

export default SuggestedFriends;