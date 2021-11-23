import { SearchSelectItem } from "../types";

const UBC_COURSES_BASE = "https://api.ubccourses.com";
const UBC_SUBJECT_ENDPOINT = "course";

export interface CourseAPIType {
  comments: any[];
  _id: string;
  campus: string;
  course: string;
  subject: string;
  credits: number;
  description: string;
  endpoint: string;
  lastUpdated: string;
  link: string;
  name: string;
  title: string;
}

const getSubjectSections = async (subject: string) => {
  const subjectCodes:any[] = [];
  const subjectRes = await fetch(`${UBC_COURSES_BASE}/${UBC_SUBJECT_ENDPOINT}/${subject}`);
  const subjectsJSON = await subjectRes.json();
  subjectsJSON.courses.forEach(async (courseObj: CourseAPIType) => {
    subjectCodes.push({ name: courseObj.course });
  });
  return subjectCodes;
};

export default getSubjectSections;
