const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");
const ENTRY_DIR = "docs";

const isDotFile = fileName => fileName[0] === ".";

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !isDotFile(dirent.name))
    .map(dirent => dirent.name);

const dirList = getDirectories(ENTRY_DIR);

const fileList = dirList.forEach(dir => {
  const fileDirPath = join("docs", dir);
  const files = readdirSync(fileDirPath);
});

// need to have it in form of
/*

{
text: "javascript",
items: [
    {text: "title-of-article", link: "folderName/title-of-article},
    {text: "title-of-article", link: "folderName/title-of-article}
  ]
}
Note that title-of-article needs to be capitalized and get rid of (-) 
 * */

const itemList = () => {
  return [
    { text: "How to write a blog awesomely", link: "/blogs/blog1" },
    { text: "How to read a book", link: "/blogs/blog2" }
  ];
};
module.exports = {
  title: "Hello VuePress",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about" },
      {
        text: "Blog",
        items: itemList()
      }
    ]
  }
};
