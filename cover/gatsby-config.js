/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  assetPrefix: `https://interactive.allure.com/cover-template/public/`,
  plugins: [
    `@wardpeet/gatsby-plugin-static-site`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`autoprefixer`)({ grid: 'autoplace' })],
      },
    },
    // "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blocks",
        path: `${__dirname}/content/blocks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "assets",
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-json-remark`,
      options: {
        paths: [`${__dirname}/content/blocks`], // Process all JSON files in these directories.
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
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
    "gatsby-tinacms-json",
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: [
          "gatsby-tinacms-remark",
          {
            resolve: "gatsby-tinacms-git",
            options: {
              pathToRepo: process.cwd(),
              pathToContent: "",
              defaultCommitMessage: "chore: update from tina",
              defaultCommitName: "TinaCMS",
              defaultCommitEmail: "git@tinacms.org",
              pushOnCommit: false,
            },
          },
        ],
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: 'displace'
        },
      },
    },
  ],
}
