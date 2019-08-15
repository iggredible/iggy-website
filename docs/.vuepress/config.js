module.exports = {
  title: "Hello VuePress",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      {
        text: "Blog",
        items: [
          { text: "Blog1NavLInk", link: "/blog/blog1" },
          { text: "Blog2NavLInk", link: "/blog/blog2" }
        ]
      }
    ]
  }
};
