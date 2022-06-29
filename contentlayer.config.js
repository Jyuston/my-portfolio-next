import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));

const Link = defineNestedType(() => ({
  name: "Link",
  fields: {
    title: {
      type: "string",
      required: true,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the project",
      required: true,
    },
    date: {
      type: "string",
      description: "The date of project start",
      required: true,
    },
    description: {
      type: "string",
      description: "One liner description of the project",
      required: true,
    },
    coverImage: {
      type: "string",
      description: "Cover image for project page",
      required: true,
    },
    tags: {
      type: "list",
      of: Tag,
      description: "List of Tags related to the project",
      required: true,
    },
    links: {
      type: "list",
      of: Link,
      description: "List of Links related to the project",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (project) => `/projects/${project._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./src/projects",
  documentTypes: [Project],
});
