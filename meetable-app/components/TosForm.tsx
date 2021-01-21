import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import MeetableBar from "./MeetableBar";
// import Screen from "./Screen";

export default function TosForm() {
  return (
    <View>
      {/* <MeetableBar showBackButton /> */}
      <View>
        <h1 style={styles.header}>Develow Data Constitution</h1>
        <h3>Transparency:</h3>
        <Text>
          Under the Transparency principle (also referred to as “Openness”),
          Canadian Privacy Statutes require organisations to document and make
          readily available to individuals, in a form that is generally
          understandable, specific information about their policies and
          practices relating to the management of personal information.
        </Text>
        <h3>Lawful basis for processing:</h3>
        <Text>
          In general, Canadian Privacy Statutes require organisations to obtain
          consent for the collection, use and disclosure of personal
          information, subject to limited exceptions. In order for consent to be
          valid, it must be reasonable to expect that individuals would
          understand the nature, purpose and consequences of the collection, use
          or disclosure of the personal information to which they are
          consenting. An organisation shall not require consent, as a condition
          for providing a product or service, beyond that required to fulfil an
          explicitly specified and legitimate purpose. The form of consent
          (express or implied) may vary depending on the nature of the
          information and the reasonable expectations of the individual.
          Individuals may withdraw consent at any time, subject to legal or
          contractual restrictions and reasonable notice. Canadian Privacy
          Statutes contain a general obligation that personal information must
          be collected by fair and lawful means (i.e., consent must not be
          obtained through deception, coercion or misleading practices). Even
          with valid consent, organisations are subject to an overarching legal
          requirement that personal information can only be collected, used and
          disclosed for purposes that a reasonable person would consider
          appropriate in the circumstances. See the Proportionality principle
          below.
        </Text>
        <h3>Purpose limitation:</h3>
        <Text>
          Organisations are generally required to identify the purposes for
          which personal information is collected at or before the time the
          information is collected. Organisations shall also document such
          purposes in accordance with the Transparency principle, see above.
          Personal information must not be used or disclosed for purposes other
          than those for which it was collected, except with the consent of the
          individual or as required by law. See also the Data minimisation and
          Proportionality principles.
        </Text>
        <h3>Data minimisation:</h3>
        <Text>
          Canadian Privacy Statutes generally require that the collection, use
          and disclosure of personal information be limited (both in type and
          volume) to the extent to which it is necessary to fulfil the purposes
          identified by the organisation. Personal information shall not be
          retained longer than necessary to fulfil those purposes. See the
          Retention principle, below.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    textAlign: "center",
  },
});
