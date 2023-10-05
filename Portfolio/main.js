// gatsby-config.js

module.exports = {
    plugins: [
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Your App Name`,
          short_name: `App Name`,
          start_url: `/`,
          background_color: `#ffffff`,
          theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `static/favicon.ico`, // Specify the path to your icon image
        },
      },
    ],
  }
  