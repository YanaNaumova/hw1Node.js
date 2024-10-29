import fs from "fs";

export function logMessage(text) {
  fs.appendFile("log.txt", `${text}\n`, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File has been writеen");
  });
}
