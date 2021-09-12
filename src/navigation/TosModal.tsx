import {
  Card, Layout, Modal, Text,
} from "@ui-kitten/components";
import React from "react";
import { Button, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  PRIV_BODY_1, PRIV_BODY_10,
  PRIV_BODY_11, PRIV_BODY_12, PRIV_BODY_2,
  PRIV_BODY_3, PRIV_BODY_4, PRIV_BODY_5,
  PRIV_BODY_6, PRIV_BODY_7,
  PRIV_BODY_8, PRIV_BODY_9,
  PRIV_TITLE_1, PRIV_TITLE_10,
  PRIV_TITLE_11, PRIV_TITLE_12,
  PRIV_TITLE_13, PRIV_TITLE_14,
  PRIV_TITLE_15, PRIV_TITLE_16,
  PRIV_TITLE_17, PRIV_TITLE_2,
  PRIV_TITLE_3, PRIV_TITLE_4,
  PRIV_TITLE_5, PRIV_TITLE_6,
  PRIV_TITLE_7, PRIV_TITLE_8,
  PRIV_TITLE_9,
} from "./legal/privacy";
import {
  TOS_TITLE_1, TOS_BODY_1,
  TOS_TITLE_2, TOS_BODY_2,
  TOS_TITLE_3, TOS_BODY_3,
  TOS_TITLE_4, TOS_BODY_4,
  TOS_TITLE_5, TOS_BODY_5,
  TOS_TITLE_6, TOS_BODY_6,
  TOS_TITLE_7, TOS_BODY_7,
  TOS_TITLE_8, TOS_BODY_8,
  TOS_TITLE_9, TOS_BODY_9,
  TOS_TITLE_10, TOS_BODY_10,
  TOS_TITLE_11, TOS_BODY_11,
  TOS_TITLE_12, TOS_BODY_12,
  TOS_TITLE_13, TOS_BODY_13,
} from "./legal/tos";

const Title = ({ title }: HeaderProps) => <Text style={modalStyles.legalTitle}>{title}</Text>;
const Body = ({ body }: {body: string}) => (
  <Text style={modalStyles.legalBody}>
    {body}
  </Text>
);

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
type TosModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string;
};
const TosModal = ({ open, setOpen, title = "" }:TosModalProps) => (
  <Modal
    visible={open}
    backdropStyle={modalStyles.backdrop}
    style={modalStyles.innerModal}
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
        <Title title={TOS_TITLE_1} />
        <Body body={TOS_BODY_1} />
        <Title title={TOS_TITLE_2} />
        <Body body={TOS_BODY_2} />
        <Title title={TOS_TITLE_3} />
        <Body body={TOS_BODY_3} />
        <Title title={TOS_TITLE_4} />
        <Body body={TOS_BODY_4} />
        <Title title={TOS_TITLE_5} />
        <Body body={TOS_BODY_5} />
        <Title title={TOS_TITLE_6} />
        <Body body={TOS_BODY_6} />
        <Title title={TOS_TITLE_7} />
        <Body body={TOS_BODY_7} />
        <Title title={TOS_TITLE_8} />
        <Body body={TOS_BODY_8} />
        <Title title={TOS_TITLE_9} />
        <Body body={TOS_BODY_9} />
        <Title title={TOS_TITLE_10} />
        <Body body={TOS_BODY_10} />
        <Title title={TOS_TITLE_11} />
        <Body body={TOS_BODY_11} />
        <Title title={TOS_TITLE_12} />
        <Body body={TOS_BODY_12} />
        <Title title={TOS_TITLE_13} />
        <Body body={TOS_BODY_13} />
      </ScrollView>
    </Card>
  </Modal>
);

const PrivacyModal = ({ open, setOpen, title = "" }:TosModalProps) => (
  <Modal
    visible={open}
    backdropStyle={modalStyles.backdrop}
    style={modalStyles.innerModal}
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
        <Title title={PRIV_TITLE_1} />
        <Title title={PRIV_TITLE_2} />
        <Body body={PRIV_BODY_1} />
        <Title title={PRIV_TITLE_3} />
        <Title title={PRIV_TITLE_4} />
        <Body body={PRIV_BODY_2} />
        <Title title={PRIV_TITLE_5} />
        <Body body={PRIV_BODY_3} />
        <Title title={PRIV_TITLE_6} />
        <Title title={PRIV_TITLE_7} />
        <Title title={PRIV_TITLE_8} />
        <Body body={PRIV_BODY_4} />
        <Title title={PRIV_TITLE_9} />
        <Body body={PRIV_BODY_5} />
        <Title title={PRIV_TITLE_10} />
        <Body body={PRIV_BODY_6} />
        <Title title={PRIV_TITLE_11} />
        <Body body={PRIV_BODY_7} />
        <Title title={PRIV_TITLE_12} />
        <Body body={PRIV_BODY_8} />
        <Title title={PRIV_TITLE_13} />
        <Title title={PRIV_TITLE_14} />
        <Body body={PRIV_BODY_9} />
        <Title title={PRIV_TITLE_15} />
        <Body body={PRIV_BODY_10} />
        <Title title={PRIV_TITLE_16} />
        <Body body={PRIV_BODY_11} />
        <Title title={PRIV_TITLE_17} />
        <Body body={PRIV_BODY_12} />
      </ScrollView>
    </Card>
  </Modal>
);

const modalStyles = StyleSheet.create({
  scroll: {
    height: "90%",
    marginBottom: 10,
  },
  innerModal: {
    width: "90%",
    height: "60%",
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

export default TosModal;
export { PrivacyModal };
