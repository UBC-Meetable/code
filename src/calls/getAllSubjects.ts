import { UBCCourse } from "../types";

const UBC_COURSES_BASE = "https://api.ubccourses.com";
const UBC_SUBJECT_ENDPOINT = "subject";

type SubjectAPIType = {
  _id: string;
  campus: string;
  subject: string;
  endpoint: string;
  faculty: string;
  hasCourses: boolean;
  lastUpdated: string;
  link: string;
  title: string;
}

const getAllSubjects = () => {
  const subjectCodes:string[] = [];
  const getAllSubjectsCached = async () => {
    if (subjectCodes.length) return subjectCodes;
    console.log("Missed SubjectCodes cache");

    const subjectRes = await fetch(`${UBC_COURSES_BASE}/${UBC_SUBJECT_ENDPOINT}`);
    const subjectsJSON = await subjectRes.json();
    subjectsJSON.subjects.forEach(async (subjectObj: SubjectAPIType) => {
      subjectCodes.push(subjectObj.subject);
    });
    return subjectCodes;
  };
  return getAllSubjectsCached();
};

getAllSubjects();

export default getAllSubjects;
