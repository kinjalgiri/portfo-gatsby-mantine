/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable compat/compat */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const path = require('path');
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

const siteMetadata = {
  metadata: {
      authorName: 'Joep van de Laarschot',
      siteDescription: 'Helping people create their digital home.',
      siteImage: '/images/banner-www-default-fb.png',
      siteLanguage: 'en-US',
      siteLocale: 'en_us',
      siteName: 'joeplaa.com',
      siteUrl: process.env.GATSBY_URL,
      siteTitle: 'joeplaa.com',
      titleSeparator: '|',
      titleTemplate: 'joeplaa.com',
      twitterUsername: ''
  },
  navigation: {
      about: '/#About',
      blog: process.env.GATSBY_BLOG_URL,
      contact: '/#Contact',
      home: '/',
      portfolio: '/portfolio',
      pricing: '/#Pricing',
      ps: '/conditions/privacy-statement',
      recommended: process.env.GATSBY_BLOG_URL + '/recommended',
      services: '/services',
      tagsPortfolio: '/portfolio/tags',
      tos: '/conditions/terms-of-service',
      wiki: 'https://wiki.joeplaa.com'
  },
  siteUrl: process.env.GATSBY_URL, // needed for gatsby-plugin-advanced-sitemap
  urls: {
      site: {
          mailForm: process.env.GATSBY_MAIL_URL,
          umami: 'https://umami.joeplaa.com',
          siteUrl: process.env.GATSBY_URL
      },
      contact: {
          email: 'info@joeplaa.com',
          signal: '',
          telegram: 'https://t.me/@joeplaa',
          whatsapp: 'https://api.whatsapp.com/send?phone=31610520633'
      },
      accounts: {
          facebook: 'https://www.facebook.com/joeplaadotcom',
          github: 'https://github.com/joeplaa',
          githubOrg: 'https://github.com/joeplaa-com',
          instagram: 'https://www.instagram.com/joeplaa/',
          linkedin: 'https://www.linkedin.com/in/joeplaa/'
      },
      aws: 'https://aws.amazon.com/',
      bamboo: 'https://www.atlassian.com/software/bamboo',
      gatsbyjs: 'https://www.gatsbyjs.com/',
      ghost: 'https://ghost.org/',
      jenkins: 'https://www.jenkins.io/',
      jodibooks: 'https://jodibooks.com/',
      magento: 'https://magento.com/',
      nextjs: 'https://nextjs.org/',
      opencart: 'https://www.opencart.com/',
      teamcity: 'https://www.jetbrains.com/teamcity/',
      woocommerce: 'https://woocommerce.com/',
      wordpress: 'https://wordpress.org/'
  }
};

module.exports = {
  flags: {
      DEV_SSR: false,
      FAST_DEV: false,
      PARALLEL_SOURCING: true
  },
  siteMetadata,
  plugins: [
      'gatsby-plugin-advanced-sitemap',
      'gatsby-plugin-catch-links',
      'gatsby-plugin-image',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      'gatsby-plugin-webpack-bundle-analyser-v2',
      'gatsby-transformer-sharp',
      {
          resolve: 'gatsby-plugin-anchor-links',
          options: {
              offset: -64
          }
      },
      {
          resolve: 'gatsby-plugin-eslint',
          options: {
              // Gatsby required rules directory
              rulePaths: [gatsbyRequiredRules],
              // Default settings that may be ommitted or customized
              stages: ['develop'],
              extensions: ['js', 'jsx', 'ts', 'tsx'],
              exclude: ['node_modules', 'bower_components', '.cache', 'public']
          }
      },
      {
          resolve: 'gatsby-plugin-manifest',
          options: {
              name: 'joeplaa.com',
              short_name: 'joeplaa.com',
              description: 'Helping people create their digital home.',
              start_url: '/',
              background_color: '#fff',
              theme_color: '#07b1c2',
              display: 'browser',
              icon: 'src/images/icon.png',
              icon_options: {
                  purpose: 'any maskable'
              }
          }
      },
      {
          resolve: 'gatsby-plugin-mdx',
          options: {
              extensions: ['.mdx', '.md'],
              gatsbyRemarkPlugins: [
                  {
                      resolve: 'gatsby-remark-autolink-headers',
                      options: {
                          offsetY: '100',
                          maintainCase: false,
                          removeAccents: true,
                          elements: ['h1', 'h2', 'h3']
                      }
                  },
                  {
                      resolve: 'gatsby-remark-external-links',
                      options: {
                          target: '_blank',
                          rel: 'nofollow noreferrer'
                      }
                  },
                  {
                      resolve: 'gatsby-remark-images',
                      options: {
                          linkImagesToOriginal: true,
                          maxWidth: 960,
                          srcSetBreakpoints: [320, 640],
                          withWebp: true,
                          showCaptions: ['title']
                      }
                  }
              ]
          }
      },
      {
          resolve: 'gatsby-plugin-react-svg',
          options: {
              rule: {
                  include: /svg/
              }
          }
      },
      {
          resolve: 'gatsby-plugin-robots-txt',
          options: {
              env: {
                  development: {
                      policy: [{ userAgent: '*', disallow: ['/'] }]
                  },
                  production: {
                      policy: [{ userAgent: '*', allow: '/' }]
                  }
              }
          }
      },
      {
          resolve: 'gatsby-plugin-sharp',
          options: {
              stripMetadata: true,
              defaultQuality: 70
          }
      },
      {
          resolve: 'gatsby-transformer-remark',
          options: {
              plugins: [
                  {
                      resolve: 'gatsby-remark-autolink-headers',
                      options: {
                          maintainCase: false,
                          removeAccents: true,
                          elements: ['h1', 'h2', 'h3']
                      }
                  }
              ]
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: path.join(__dirname, 'content/authors'),
              name: 'authors'
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: path.join(__dirname, 'content/conditions'),
              name: 'conditions'
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: path.join(__dirname, 'content/portfolio'),
              name: 'portfolio'
          }
      },
      {
          resolve: 'gatsby-source-filesystem',
          options: {
              path: path.join(__dirname, '/src/images'),
              name: 'images'
          }
      }
  ]
};
