import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "sanity-nextjs-site",
  title: "Sanity Next.js Site",

  projectId: "8b6y4rh4",
  dataset: "production",
  basePath: "/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
