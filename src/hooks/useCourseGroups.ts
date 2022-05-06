import { useContext } from "react";
import CourseGroupsContext from "../context/CourseGroupsContext";

const useCourseGroups = () => {
  const context = useContext(CourseGroupsContext);
  if (!context) throw new Error("useAuthenticatedUser must be used within a UserProvider");
  return context;
};

export default useCourseGroups;
