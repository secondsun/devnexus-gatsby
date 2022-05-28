import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `DevNexus 2023`,
    siteUrl: `https://novel-dew.cloudvent.net/`
  },
  plugins: ["gatsby-plugin-react-helmet",
            'gatsby-plugin-mui-emotion',
            'gatsby-plugin-top-layout',
            "gatsby-plugin-sass",
            {
              resolve: `gatsby-plugin-manifest`,
              options: {
                icon: 'src/images/icon.png',
                name: `DevNexus 2023`,
                short_name: `DevNexus`,
                start_url: `/`,
                background_color: `#fcfcfc`,
                theme_color: `#006e00`,
                display: `standalone`,

              }
            },
            'gatsby-plugin-offline']
};

export default config;
