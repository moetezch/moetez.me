module.exports = {
  siteMetadata: {
    title: `The dev blog of a Tunisian Web Developer`,
    description: `Hey, I’m Moetez, I write about web development`,
    author: `@moetezch`,
    siteUrl: `https://www.moetez.me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: 'api.moetez.me',
        protocol: 'http',
        perPage: 100,
        concurrentRequests: 10,
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        excludedRoutes: [
          '/akismet/**',
          '/yoast/**',
          '/*/*/settings',
          '/contact-form-7/**',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-122171355-1',
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The dev blog of a Tunisian Web Developer`,
        short_name: `Tunisian Web Developer blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/moetez_icon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
