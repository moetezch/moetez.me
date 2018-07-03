module.exports = {
  siteMetadata: {
      title: 'Moetez Gatsby',
      subtitle: `Fetch Data From WP website`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: "gatsby-source-wordpress",
          options: {
              baseUrl: "moetez.me",
              protocol: "http",
              concurrentRequests: 10,
              hostingWPCOM: false,
              useACF: false,
              verboseOutput: true,
              excludedRoutes: ["/akismet/**", "/jetpack/**", "/yoast/**", "/*/*/settings"]
          }
      }
  ],
};