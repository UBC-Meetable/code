import {
  Card, Layout, Modal, Text,
} from "@ui-kitten/components";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Title = ({ title }: HeaderProps) => <Text style={modalStyles.legalTitle}>{title}</Text>;

type ErrorsModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string;
    errors: string[];
};

type HeaderProps = {
    title: string;
}
const Header = ({ title = "" }: HeaderProps) => (
  <Text category="h6" style={modalStyles.header}>
    {title}
  </Text>
);

type FooterProps = {
    onPress: () => void;
}
const Footer = ({ onPress }: FooterProps) => (
  <Layout style={{ height: 20 }}>
    <Button
      title="Dismiss"
      onPress={onPress}
    />
  </Layout>
);

const ErrorModal = ({
  open, setOpen, title = "", errors,
}: ErrorsModalProps) => (
  <Modal
    visible={open}
    backdropStyle={modalStyles.backdrop}
    style={modalStyles.error_innerModal}
    onBackdropPress={() => {
      setOpen(false);
    }}
  >
    <Card
      disabled
      style={modalStyles.container}
      footer={() => <Footer onPress={() => setOpen(false)} />}
      header={() => <Header title={title} />}
    >
      <ScrollView style={modalStyles.scroll}>
        <Title title="Please check the following errors" />
        {errors.map((item, key) => (
          <Text style={{ color: "red" }} key={key}>
            {" "}
            **
            {item}
            {" "}
          </Text>
        ))}

      </ScrollView>
    </Card>
  </Modal>
);
export { ErrorModal as default };

const modalStyles = StyleSheet.create({
  scroll: {
    height: "90%",
    marginBottom: 10,
  },
  innerModal: {
    width: "90%",
    height: "60%",
  },

  error_innerModal: {
    width: "90%",
    height: "40%",
  },

  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    fontFamily: "Poppins_500Medium",
  },

  backdrop: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  header: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    padding: 10,
  },
  legalTitle: {
    fontFamily: "Poppins_600SemiBold",
    textAlign: "left",
    marginVertical: 5,
  },
  legalBody: {
    fontFamily: "Poppins_500Medium",
  },
});
