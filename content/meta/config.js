const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Nahuel - Not another devops!", // <title>
  shortSiteTitle: "PersonalBlog GatsbyJS Starter", // <title> ending for posts and pages
  siteDescription: "PersonalBlog is a GatsbyJS starter.",
  siteUrl: "https://nahue.github.io/blog/",
  pathPrefix: "/",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "nahuel chaves",
  authorTwitterAccount: "nchaves1986",
  // info
  infoTitle: "nahuel chaves",
  infoTitleNote: "not another devops!",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "nahuel.chaves@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/nahue" },
    { name: "twitter", url: "https://twitter.com/nchaves1986" }
  ]
};
