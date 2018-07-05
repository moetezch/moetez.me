module.exports = {
    siteMetadata: {
        title: 'Moetez Chaabene : Aspiring Full Stack Web Developer',
        subtitle: `Fetch Data From WP website`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-sharp`,
        'gatsby-transformer-sharp',
        {
            resolve: `gatsby-plugin-sass`,
            options: {
              precision: 8,
            },
          },
        {
            resolve: "gatsby-source-wordpress",
            options: {
                baseUrl: "moetez.me",
                protocol: "http",
                perPage: 100,
                concurrentRequests: 10,
                hostingWPCOM: false,
                useACF: false,
                verboseOutput: true,
                excludedRoutes: ["/akismet/**", "/jetpack/**", "/yoast/**", "/*/*/settings", "/contact-form-7/**"]
            }
        }
    ],
};