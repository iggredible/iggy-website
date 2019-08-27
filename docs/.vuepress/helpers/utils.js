const isDotFile = fileName => fileName[0] === ".";

const isReadme = fileName => fileName.toLowerCase() === "readme.md";

const stripExtension = fileName => fileName.replace(/\.[^.]+$/, "");

const normalizeFileName = fileName => fileName.replace(/[-_]/g, " ");

const titleCase = fileName =>
  fileName(
    /\w\S*/g,
    txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

const normalizeFileName = fileName => {
  // turn all filename into capital letter, remove hyphens/ underscores, strip its extension
};
module.exports = {
  isDotFile,
  isReadme,
  stripExtension,
  normalizeFileName,
  titleCase
};
