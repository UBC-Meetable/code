import { Layout, Spinner } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import MultiSelect from "react-native-multiple-select";
import Colors from "../../constants/Colors";
import editCourseStyles from "../../screens/edit/editCourseStyles";
import { SearchSelectItem } from "../../types";

type SearchableDropdownProps = {
  subjects: SearchSelectItem[];
  loading: boolean;
  onChangeSubject: (subject: string) => void;
};

const SearchableDropdown = ({
  subjects, loading, onChangeSubject,
}:SearchableDropdownProps) => {
  const [selectedId, setSelectedItem] = React.useState<string>("");

  if (loading) {
    return (
      <Layout style={[editCourseStyles.courseCodeInput, editCourseStyles.courseStyle,
        styles.shadow, styles.center]}
      >
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout style={[editCourseStyles.courseCodeInput, editCourseStyles.courseStyle,
      styles.shadow]}
    >
      <MultiSelect
        hideTags
        items={subjects}
        uniqueKey="name"
        single
        styleDropdownMenu={styles.dropdownMenu}
        styleTextDropdownSelected={[styles.textDropdown, styles.selectedDropdown]}
        styleDropdownMenuSubsection={styles.dropdownMenuSubsection}
        styleListContainer={styles.listContainer}
        styleInputGroup={styles.inputGroup}
        styleTextDropdown={styles.textDropdown}
        onSelectedItemsChange={([item]) => {
          if (item !== selectedId) {
            onChangeSubject(item);
          }
          setSelectedItem(item);
        }}
        selectedItems={[selectedId]}
        selectText="Select a Course"
        searchInputPlaceholderText="Search Items..."
        tagRemoveIconColor={Colors.theme.creme}
        noItemsText="No Courses Found"
        styleRowList={styles.rowText}
        itemTextColor="#000"
        displayKey="name"
        textInputProps={{
          style: {
            fontFamily: "Poppins_400Regular",
          },
        }}
        searchInputStyle={styles.inputStyle}
        submitButtonText="Submit"
        searchIcon={null}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  behind: {
    zIndex: -1,
  },
  shadow: {
    shadowColor: "#F0D9C8",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  dropdownMenu: {
    height: 50,
    marginTop: 5,
    marginBottom: -5,
  },
  dropdownMenuSubsection: {
    borderColor: "#0000",
    backgroundColor: "#0000",
  },
  listContainer: {
    borderRadius: 5,
    borderColor: "grey",
    borderWidth: 1,
    maxHeight: 200,
    position: "absolute",
    width: "100%",
    backgroundColor: "white",
  },
  inputGroup: {
    marginTop: 5,
    marginBottom: -5,
    height: 50,
    backgroundColor: "#0000",
  },
  textDropdown: {
    marginLeft: 10,
    color: "#A9A9A9",
    fontSize: 15,
    fontFamily: "Poppins_400Regular",
  },
  rowText: {
    height: 34,
  },
  selectedDropdown: {
    color: "#000",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    borderWidth: 0,
    borderColor: "#0000",
  },
});

export default SearchableDropdown;
