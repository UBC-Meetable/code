import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Layout,
  TopNavigationAction,
  Text,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Poppins_600SemiBold, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import { StyleSheet } from "react-native";
import Chat from "../components/Chat/Chat";
import Colors from "../constants/Colors";
import { GearIcon } from "../navigation/ProfileStackNavigator";
//import { GroupType, RootStackParamList } from "../types";

const ReturnIcon = () => (
    <Icon name="ios-chevron-back"/>
  );

const EventScreen = () => {
    let [fontLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_700Bold
    })

    if(!fontLoaded) {
        return <AppLoading />;
    }

    return(
        <React.Fragment>
            <Layout style={styles.row}>
                <TopNavigationAction icon={ReturnIcon}/>
            </Layout>
            <Layout style={styles.row}>
                <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 32}} category='h1'>
                    Quiz 1
                </Text>
            </Layout>
            <Layout style={styles.row}>
                <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20}} category='h2'>
                    Study Session
                </Text>
            </Layout>
            <Layout>

            </Layout>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})