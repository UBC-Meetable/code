import { CourseGroup } from "../../API";
import { SimpleCourseGroup } from "../../types";

const simplifyCourseGroup = (group: CourseGroup) => {
  const newGroup: SimpleCourseGroup = {
    groupID: group.groupID!,
    title: group.title!,
    section: group.section!,
    code: group.code!,
  };
  return newGroup;
};

const simplifyCourseGroups = (groups: CourseGroup[]) => groups.map(simplifyCourseGroup);

export { simplifyCourseGroup, simplifyCourseGroups };
