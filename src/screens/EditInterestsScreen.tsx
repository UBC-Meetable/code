import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Text } from "@ui-kitten/components";
import * as React from "react";
import {
  StyleSheet, View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import GradientButton from "../components/ui/GradientButton";
import Colors from "../constants/Colors";
import { ProfileStackParamList } from "../types";

interface LabelProps {
  title: string
}
const Label = ({ title }: LabelProps) => <Text style={styles.ModalField}>{title}</Text>;

const EditInterestsScreen = ({ navigation }:{ navigation: StackNavigationProp<ProfileStackParamList, "EditInterests">;}) => {
  return (
    <SafeAreaView style={styles.root}>
      <Layout style={styles.container}>
        <ScrollView contentContainerStyle={styles.selectionsContainer} />
        <Text style={styles.title}>
          Edit Interests
        </Text>
        <Text style={styles.subtitle}>
          Interest Category
        </Text>
        <View
          style={styles.itemContainer}
        >
          <View
            style={styles.textDiv}
          >
            <Text>
              Anime 📺
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Gaming 🎮
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Formula 1 🏎️
            </Text>
          </View>

        </View>
        <View
          style={styles.itemContainer}
        >
          <View
            style={styles.textDiv}
          >
            <Text>
              Anime 📺
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Gaming 🎮
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Formula 1 🏎️
            </Text>
          </View>

        </View>
        <View style={{ height: 50 }} />

        <Text style={styles.subtitle}>
          Interest Category
        </Text>
        <View
          style={styles.itemContainer}
        >
          <View
            style={styles.textDiv}
          >
            <Text>
              Anime 📺
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Gaming 🎮
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Formula 1 🏎️
            </Text>
          </View>
        </View>
        <View
          style={styles.itemContainer}
        >
          <View
            style={styles.textDiv}
          >
            <Text>
              Anime 📺
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Gaming 🎮
            </Text>
          </View>
          <View
            style={styles.textDiv}
          >
            <Text>
              Formula 1 🏎️
            </Text>
          </View>
        </View>

        <GradientButton
          status="info"
          style={styles.editButton}
          // TODO: Change this to Edit Interests Page
          onPress={() => {
            navigation.pop();
          }}
        >
          Close
        </GradientButton>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    display: "flex",
    height: "100%",
    backgroundColor: Colors.theme.lightCreme,
  },
  container: {
    width: "100%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
  selectionsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "75%",
    backgroundColor: Colors.theme.lightCreme,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  name: {
    fontFamily: "Quicksand_600SemiBold",
    color: "#000000",
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  gradient: {
    height: 50,
    margin: 0,
    padding: 0,
    overflow: "visible",
    borderWidth: 1,
  },
  editButton: {
    marginVertical: 12,
    width: "90%",
    height: 60,
  },
  email: { fontSize: 14 },
  image: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modal: {
    padding: 24,
    backgroundColor: Colors.theme.lightCreme,
    height: "100%",
  },
  title: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 24,
    fontWeight: "900",
    color: "#000000",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  edit: {
    marginTop: 20,
  },
  bio: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    color: "black",
    textAlign: "center",
  },
  ModalField: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    color: "black",
    marginLeft: 10,
    fontSize: 20,
  },
  textDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEAB4",
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  itemContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex",
  },
  photoContainer: {
    backgroundColor: "#0000",
    width: "100%",
    margin: 10,
    alignItems: "center",
  },
  inputStyle: {
    backgroundColor: "#ffff",
    marginVertical: 5,
    borderRadius: 5,
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default EditInterestsScreen;
