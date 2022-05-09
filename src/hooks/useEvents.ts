import { useContext } from "react";
import EventsContext from "../context/EventsContext";

const useCourseGroups = () => {
  const context = useContext(EventsContext);
  if (!context) throw new Error("useEvents must be used within a EventsProvider");
  return context;
};

export default useCourseGroups;
