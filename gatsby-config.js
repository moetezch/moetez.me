module.exports = {
    siteMetadata: {
        title: 'moetez.me | The blog of Moetez Chaabene | Tunisian Web Developer',
        siteUrl: `https://www.moetez.me`, 
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sharp`,
        'gatsby-transformer-sharp',
        `gatsby-plugin-react-next`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
              precision: 8,
            },
          },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "api.moetez.me",
                protocol: "http",
                perPage: 100,
                concurrentRequests: 10,
                hostingWPCOM: false,
                useACF: false,
                verboseOutput: true,
                excludedRoutes: ["/akismet/**", "/yoast/**", "/*/*/settings", "/contact-form-7/**"]
            }
        },
        {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-122171355-1",
      }
    }
    ],
};