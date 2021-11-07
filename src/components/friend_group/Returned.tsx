import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import {
  StyleSheet,
} from "react-native";
import Sorting from "../../assets/icons/sorting.svg";
import Colors from "../../constants/Colors";

const Returned = () => (
  <Layout style={styles.root}>
    <Layout style={[styles.outer, styles.child]}>
      <Text style={[styles.title, styles.text]}>Hang Tight!</Text>

    </Layout>
    <Layout style={[styles.mid, styles.child]}>
      <Text style={[styles.subtitle, styles.bodyText]}>
        We are analyzing your responses and will put you in a friend group
        shortly.
      </Text>
      <Sorting
        width={50}
        style={{ marginVertical: 20 }}
      />
      <Text style={[styles.subtitle, styles.bodyText]}>
        In the meantime, please join your Course Groups, and finish building your profile!
      </Text>
    </Layout>

  </Layout>
);

const styles = StyleSheet.create(
  {
    root: {
      backgroundColor: Colors.theme.lightCreme,
      width: "70%",
      maxWidth: 300,
      minWidth: 200,
      borderRadius: 30,
      maxHeight: 450,
      minHeight: 300,
      display: "flex",
    },
    outer: {
      marginVertical: 30,
      flexBasis: 60,
      justifyContent: "center",
      alignItems: "center",
    },
    mid: {
      flexBasis: 100,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    child: {
      backgroundColor: "#0000",
    },
    title: {
      fontSize: 20,
    },
    subtitle: {
      fontSize: 12,
      textAlign: "center",
      width: "80%",
    },
    text: {
      fontFamily: "Poppins_600SemiBold",
    },
    iconContainer: {
      flexDirection: "column",
      alignItems: "center",
    },
    bodyText: {
      fontFamily: "Poppins_500Medium",
    },
  },
);

export default Returned;
