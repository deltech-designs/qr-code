/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
import { writeFile } from "node:fs";
import { type } from "node:os";
// import { url } from "node:inspector";
// let url

inquirer
  .prompt([
    {
      name: "given-name",
      message: "Enter your given-name ",
    },
  ])
  .then((anwser) => {
    let ans = anwser["given-name"];
    console.log(ans);
    const url = qr.image(ans, { type: "png" });
    url.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("url.txt", ans, (err) => {
      if (err) throw err;
      console.log("The file has been saved");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log(error);
    }
  });
