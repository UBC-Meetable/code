import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { RootStackParamList } from "../types";
import { Text, StyleSheet } from "react-native";
import {API} from "aws-amplify";




const SuggestedFriends = ()=> {
    const [suggestedFriends, setSuggestedFriends] = useState([]);
    useEffect(()=> {
    const fetchFriends = async ()=>{
        console.log("We are inside the suggestedFriends Before calling API");
        const friends = await API.get("friendSuggestionapi","/friendGetting", "")
        setSuggestedFriends(friends);
        console.log("We are inside the suggestedFriends after!!");
        console.log(friends);
    }
    fetchFriends()
        .catch(console.error)
    }, []);
    const GetSuggestedFriends = ()=> {
        return(           
            <Text>
               {suggestedFriends.map((friend: any) => {   
                  <Text>
                    {console.log("---------------------")}
                    {console.log(friend)}
                    {console.log(friend.name)}
                    {friend.name},
                    {friend.education}
                  </Text>                
                })}
            </Text>
        )
    }
    return(<GetSuggestedFriends />)
}

export default SuggestedFriends;