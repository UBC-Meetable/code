import { StackNavigationProp } from "@react-navigation/stack";
import {
  Button,
  Layout,
  TopNavigationAction,
  Text,
  Card,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, useFonts } from "@expo-google-fonts/poppins";
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
        Poppins_700Bold,
        Poppins_400Regular
    })

    if(!fontLoaded) {
        return <AppLoading />;
    }

    return(
            <Layout style={styles.background}>
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
                <Layout style={styles.row}>
                </Layout>
                <Layout style={styles.row}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20}} category='h2'>
                        Description
                    </Text>
                </Layout>
                <Layout style={styles.row}>
                    <Card style={styles.card}>
                        <Text style={{fontFamily: 'Poppins_400Regular', fontSize: 14}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie sed elementum pretium purus pharetra scelerisque sit. Et varius lectus id netus.
                        </Text>
                    </Card>
                </Layout>
                <Layout style={styles.row}>
                </Layout>
                <Layout style={styles.row}>
                    
                </Layout>
            </Layout>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF8E6',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        borderRadius: 20,
    },
})