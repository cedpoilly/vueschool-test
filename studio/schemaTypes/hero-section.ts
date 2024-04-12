import {defineType} from "sanity"

export default defineType({
  name: "hero-section",
  title: "Hero Section",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      // pre-em
      // em
      // post-em
      fields: [
        {
          name: "pre",
          title: "Pre",
          type: "string",
        },
        {
          name: "em",
          title: "Em",
          type: "string",
        },
        {
          name: "post",
          title: "Post",
          type: "string",
        },
      ],
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
