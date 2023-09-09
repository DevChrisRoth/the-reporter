import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/the-reporter",
  siteMetadata: {
    title: `TheReporter`,
    siteUrl: `https://devchrisroth.github.io/the-reporter/`,
    description: "the-reporter is a news website built with Gatsby and MDX",
    copyright: "This website is copyright 2023 Christoph Rothmann",
    contact: "chrisrothbog@gmail.com",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon3.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
