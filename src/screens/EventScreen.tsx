import {
  ApplicationProvider as UiProvider,
  Button,
  Layout,
  Text,
  Card,
  Avatar,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

const EventScreen = (props : any) => {
    const navigation = props.navigation
    return(
        <View style={styles.background}>
            <Layout style={styles.rowTop}>
                <Icon name="ios-chevron-back" size={23} onPress={() => navigation.navigate("Home")}/>
            </Layout>
            <Layout style={styles.row}>
                <Text style={{fontFamily: 'Poppins_700Bold', fontSize: 32, marginLeft: '9.6%'}} category='h1'>
                    {props.route.params.eventTitle}
                </Text>
            </Layout>
            <Layout style={styles.row}>
                <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20, marginLeft: '9.6%', marginBottom: '5%'}} category='h2'>
                    Study Session
                </Text>
            </Layout>
            <Layout style={styles.row}>
            </Layout>
            <Layout style={styles.row}>
                <Text style={{fontFamily: 'Poppins_600SemiBold', fontSize: 20, marginLeft: '9.6%', marginBottom: '1%'}} category='h2'>
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
            <Layout style={styles.rowChat}>
                <Layout style={styles.joinChat}>
                    <Avatar source={require('../assets/images/noavatar.png')}/>
                    <Text style={{fontFamily: 'Poppins_500Medium', fontSize: 16}}>
                        Join Event Chat
                    </Text>
                    <Icon name="ios-chevron-forward" size={40}/>
                </Layout>
            </Layout>
            <Layout style={styles.bottom}>
                <Button style={styles.button}>
                    Join Event
                </Button>
            </Layout>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#FFF8E6',
        height: '100%',
    },
    rowTop: {
        backgroundColor: '#FFF8E6',
        marginTop: '6.24%',
        marginLeft: '8.8%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF8E6',
    },
    rowChat: {
        height: '11.3%',
        marginRight: '7%',
        marginLeft: '7%',
        marginTop: '2.88%',
        paddingRight: '6.13%',
        paddingLeft: '6.13%',
        borderRadius: 20,
    },
    card: {
        borderRadius: 20,
        marginRight: '7%',
        marginLeft: '7%',
    },
    joinChat: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    bottom: {
        backgroundColor: '#FFF8E6',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: '12%',
        paddingRight: '7%',
        paddingLeft: '7%',
    },
    button: {
        borderRadius: 20
    },
})

export default EventScreen;