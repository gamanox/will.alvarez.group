const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Will - UI/UX & Web Dev Consulting', // Navigation and Site Title
  siteTitleAlt: 'Will Alva', // Alternative Site title for SEO
  siteUrl: 'http://will.alvarez.group', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Web Project Management / Technology Consultant / UX UI Designer',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@gamanox', // Twitter Username
  ogSiteName: '', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.purple,
  backgroundColor: tailwind.colors.blue,
};
