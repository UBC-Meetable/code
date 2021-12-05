import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bubble: {
    minHeight: 40,
    width: "75%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#F0D9C8",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    marginTop: 2,
    marginBottom: 10,
    marginRight: 20,
  },
  message: {
    marginLeft: 5,
    fontFamily: "Poppins_400Regular",
  },
  messageContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#0000",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imageContainer: {
    flexGrow: 1,
    flexBasis: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000",
  },
  avatarButton: {
    alignSelf: "center",
    borderRadius: 100,
    marginRight: 10,
  },
  pending: {
    backgroundColor: "#d9eff7",
  },
});

export default styles;
