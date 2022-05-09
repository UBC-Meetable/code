import { useContext } from "react";
import EventsContext from "../context/EventsContext";
import MessagesContext from "../context/MessageContext";

const useCourseGroups = () => {
  const context = useContext(MessagesContext);
  if (!context) throw new Error("useMessages must be used within a MessageProvider");
  return context;
};

export default useCourseGroups;
