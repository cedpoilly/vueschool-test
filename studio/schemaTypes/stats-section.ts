import {defineType} from "sanity"

export default defineType({
  name: "stats-section",
  title: "Stats Section",
  type: "document",

  fields: [
    {
      name: "lessonsCount",
      title: "Lessons Count",
      type: "number",
    },
    {
      name: "coursesCount",
      title: "Courses Count",
      type: "number",
    },
    {
      name: "totalDuration",
      title: "Total Duration (in hours)",
      type: "number",
    },
  ],
})
