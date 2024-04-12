import {defineType} from "sanity"

export default defineType({
  name: "hero-section",
  title: "Hero Section",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "ctaLabel",
      title: "CTA Label",
      type: "string",
    },
  ],
})
