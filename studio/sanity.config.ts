import {defineConfig, isDev} from "sanity"
import {visionTool} from "@sanity/vision"
import {structureTool} from "sanity/structure"
import {schemaTypes} from "./schemaTypes"
import {getStartedPlugin} from "./plugins/sanity-plugin-tutorial"

const devOnlyPlugins = [getStartedPlugin()]

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
  throw new Error("No project ID defined")
}

if (!process.env.SANITY_STUDIO_DATASET) {
  throw new Error("No dataset defined")
}

export const projectId = process.env.SANITY_STUDIO_PROJECT_ID
export const dataset = process.env.SANITY_STUDIO_DATASET

export default defineConfig({
  name: "vueschool-test-cedpoilly",
  title: "VueSchool Test Cedpoilly",

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
