"use strict";

import fs from "fs";

// Main function
const getDirectories = source =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

const dirs = getDirectories(process.argv[2]);

const result = dirs.map(x => {
  return {
    year: x,
    content: fs.readdirSync(process.argv[2] + x).map(file => {
      return {
        stv: file.includes("st-v"),
        sf: file.includes("sf"),
        date: file.split(".")[0].split("_")[0],
        url: "journal/" + x + "/" + file
      };
    })
  };
});
console.log(JSON.stringify(result));
