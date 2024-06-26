import {defineArrayMember, defineField, defineType} from "sanity"

export default defineType({
  name: "pricing-item",
  title: "Pricing Item",
  type: "document",

  fields: [
    {
      name: "reference",
      title: "Reference",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "number",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          title: "Feature",
          type: "object",
          fields: [
            {
              name: "disabled",
              title: "Disabled",
              type: "boolean",
            },
            {
              name: "highlighted",
              title: "Highlighted",
              type: "boolean",
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "info",
              title: "Info",
              type: "string",
            },
          ],
        }),
      ],
    }),
  ],
})
