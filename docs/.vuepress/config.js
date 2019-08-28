const { isDotFile, isReadme, stripExtension } = require("./helpers/utils.js");
const { readdirSync } = require("fs");
const { join } = require("path");

const ENTRY_DIR = "docs";

let navArr = [];

const getFiles = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(
      dirent =>
        dirent.isFile() && !isDotFile(dirent.name) && !isReadme(dirent.name)
    )
    .map(dirent => dirent.name);
const docFileList = getFiles(ENTRY_DIR);

docFileList.forEach(file => {
  const extensionlessFileName = stripExtension(file);
  navArr = [...navArr, { text: extensionlessFileName, link: file }];
});

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !isDotFile(dirent.name))
    .map(dirent => dirent.name);

const dirList = getDirectories(ENTRY_DIR);

dirList.forEach(dir => {
  const fileDirPath = join("docs", dir);
  const files = readdirSync(fileDirPath);
  let dirArr = [];

  files.forEach(file => {
    console.log("file: ", file);
    console.log(!isReadme(file));
    if (!isReadme(file)) {
      const extensionlessFileName = stripExtension(file);
      dirArr = [
        ...dirArr,
        { text: extensionlessFileName, link: `/${dir}/${file}` }
      ];
    }
  });

  navArr = [...navArr, { text: dir, items: dirArr }];
});

module.exports = {
  title: "Hello VuePress",
  description: "Blog v0.0.1",
  themeConfig: {
    nav: navArr
  }
};
