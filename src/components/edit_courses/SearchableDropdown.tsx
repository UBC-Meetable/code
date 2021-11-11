import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  IndexPath, Layout, Select, SelectItem,
} from "@ui-kitten/components";
import MultiSelect from "react-native-multiple-select";
import TextField from "../ui/TextField";
import editCourseStyles from "../../screens/edit/editCourseStyles";

type SearchableDropdownProps = {};

const items = [{
  id: "92iijs7yta",
  name: "Ondo",
}, {
  id: "a0s0a8ssbsd",
  name: "Ogun",
}, {
  id: "16hbajsabsd",
  name: "Calabar",
}, {
  id: "nahs75a5sg",
  name: "Lagos",
}, {
  id: "667atsas",
  name: "Maiduguri",
}, {
  id: "hsyasajs",
  name: "Anambra",
}, {
  id: "djsjudksjd",
  name: "Benue",
}, {
  id: "sdhyaysdj",
  name: "Kaduna",
}, {
  id: "suudydjsjd",
  name: "Abuja",
},
];

const SearchableDropdown = (props:SearchableDropdownProps) => {
  const [courseSearch, setCourseSearch] = React.useState("");
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const renderIcon = () => {
    return (
      <Ionicons
        name="caret-down"
        size={32}
      />
    );
  };
  return (
    <Layout style={[editCourseStyles.courseCodeInput, editCourseStyles.courseStyle]}>
      <MultiSelect
        hideTags
        items={items}
        uniqueKey="id"
        single
        styleDropdownMenu={{
          height: 50, borderColor: "#000", borderWidth: 1, borderRadius: 100,
        }}
        styleMainWrapper={{
          borderColor: "#000", borderWidth: 1, borderRadius: 100,
        }}
        styleInputGroup={{
          borderColor: "#000", borderWidth: 1, borderRadius: 100,
        }}
        styleSelectorContainer={{ borderWidth: 1 }}
        onSelectedItemsChange={() => console.log("hello")}
        selectText="Select A Course"
        searchInputPlaceholderText="Search Items..."
        onChangeInput={(text) => console.log(text)}
        altFontFamily="ProximaNova-Light"
        tagRemoveIconColor="#CCC"
        tagBorderColor="#CCC"
        tagTextColor="#CCC"
        selectedItemTextColor="#CCC"
        selectedItemIconColor="#CCC"
        itemTextColor="#000"
        displayKey="name"
        searchInputStyle={{
          height: "100%", borderWidth: 1, borderColor: "#000", borderRadius: 100,
        }}
        submitButtonText="Submit"
        searchIcon={null}
      />
    </Layout>
  );
};

export default SearchableDropdown;
