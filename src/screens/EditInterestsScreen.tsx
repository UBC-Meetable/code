import { useHeaderHeight } from "@react-navigation/stack";
import {
  Input, Layout, Spinner, Text, Button,
} from "@ui-kitten/components";
import { Storage } from "aws-amplify";
import * as ImageManipulator from "expo-image-manipulator";
import * as ImagePicker from "expo-image-picker";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import * as React from "react";
import { StyleSheet, Modal, View, KeyboardAvoidingView  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ProfilePicture from "../components/ProfilePicture";
import Colors from "../constants/Colors";
import { profileStyles } from "./Auth/onboarding/NewProfileScreen";
import useUserProfile from "../hooks/useUserProfile";
import PrimaryButton from "../components/ui/PrimaryButton";
import GradientButton from "../components/ui/GradientButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlexViewCrossStyleProps } from "@ui-kitten/components/devsupport";
// import { Modalize } from 'react-native-modalize';
/** TODO: Cache user profile so we don't need to fetch so often. */

interface LabelProps {
  title: string
}
const Label = ({ title }: LabelProps) => <Text style={styles.ModalField}>{title}</Text>;

const EditInterestsScreen =
  ({ navigation }:{ navigation: StackNavigationProp<RootStackParamList, "EditInterest">;}) => {
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
      <View style={{height: 50}}>

      </View>

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
          //TODO: Change this to Edit Interests Page
          onPress={() => {
            // navigation.push("FriendOptions");
            navigation.pop();

            // alert('You\'re gonna edit your Interests!');
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
    // justifyContent: "space-between",
    // alignItems: "center",
    backgroundColor: Colors.theme.lightCreme,
  },
  container: {
    width: "100%",
    // height: "100%",
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
    // justifyContent: "space-between",
    // alignItems: "center",
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
    // position: "absolute",
    // bottom: "0%",
    // width:"100%",
  },
  email: { fontSize: 14 },
  image: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
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
    marginBottom: 20
  },
  subtitle: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 18,
    color: "#000000",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 20
  },
  edit: {
    marginTop: 20
  },
  bio: {
    width: "90%",
    paddingTop:20,
    paddingBottom:20,
    color:'black',
    textAlign:'center',
  },
  ModalField: {
    width: "90%",
    paddingTop:20,
    paddingBottom:20,
    color:'black',
    marginLeft: 10,
    fontSize: 20
    // textAlign:'center',
  },
  textDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: '#FFEAB4',
    borderRadius: 20,
    padding:10,
    margin: 10,
  },
  itemContainer: {
    width: "90%",
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    display: "flex"
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
  }
});

export default EditInterestsScreen;
