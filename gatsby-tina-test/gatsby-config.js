const path = require("path")

const PROJECT_FILE_NAME = "cover-template"

module.exports = {
  assetPrefix: `https://interactive.allure.com/${PROJECT_FILE_NAME}/public/`,
  plugins: [
    `@wardpeet/gatsby-plugin-static-site`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)({ grid: "autoplace" })],
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "copy",
        path: `${__dirname}/content/copy`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/content/assets`,
      },
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              // linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: [
          "gatsby-tinacms-json",
          "gatsby-tinacms-remark",
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToRepo: process.cwd(),
              pathToContent: "",
              defaultCommitMessage: "Edited with TinaCMS",
              defaultCommitName: "TinaCMS",
              defaultCommitEmail: "git@tinacms.org",
              pushOnCommit: false,
            },
          },
        ],
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
      },
    },
  ],
}
