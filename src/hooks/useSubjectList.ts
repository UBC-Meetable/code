import { useEffect, useState } from "react";
import getAllSubjects from "../calls/getAllSubjects";

const UBC_COURSES_BASE = "https://api.ubccourses.com";
const UBC_SUBJECT_ENDPOINT = "subject";

const useSubjectList = () => {
  const [subjects, setSubjects] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchSubjects = async () => {
      const subjectList = await getAllSubjects();
      setSubjects(subjectList);
      setLoading(false);
    };
    fetchSubjects();
  }, []);

  return { subjects, loading };
};

export default useSubjectList;
