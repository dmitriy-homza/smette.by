module.exports = {
  siteMetadata: {
    title: 'smette.by',
    siteUrl: 'https://smette.onagracija.by/',
  },
  plugins: ['gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyAVsIPuHiVk5OzKrVF5ynE_4Vjau6WK9sg',
          authDomain: 'smetteby-a53b3.firebaseapp.com',
          projectId: 'smetteby-a53b3',
          storageBucket: 'smetteby-a53b3.appspot.com',
          messagingSenderId: '285949707418',
          appId: '1:285949707418:web:0d0463a27d77b7085d0b23',
          measurementId: 'G-NY8658P8P9',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-eslint-v2',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|cache|public)/,
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-TCXEWQSFNH',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
