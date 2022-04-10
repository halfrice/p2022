module.exports = {
  siteMetadata: {
    title: "Neel Pedersen",
    titleTemplate: "%s · Software Engineer",
    description: "Software Engineer",
    siteUrl: "https://neelpedersen.com",
    image: "/og.png",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              quality: 90,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
              maxWidth: 1024,
              wrapperStyle: "margin-bottom: 2rem;",
            },
          },
        ],
      },
    },
  ],
}
