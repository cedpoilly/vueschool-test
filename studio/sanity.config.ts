import {defineConfig, isDev} from "sanity"
import {visionTool} from "@sanity/vision"
import {structureTool} from "sanity/structure"
import {schemaTypes} from "./schemaTypes"
import {getStartedPlugin} from "./plugins/sanity-plugin-tutorial"

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: "default",
  title: "vueschool-test-cedpoilly",

  projectId: "hu33gxks",
  dataset: "production",

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})
