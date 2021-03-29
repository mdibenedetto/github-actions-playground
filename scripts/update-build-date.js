const fs = require("fs");
const pathFile = "dist/index.html";

// Update publish date
fs.readFile(pathFile, "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  var dt = new Date();
  var REGEX = /<time(.+?)\s*(.+?)time\s*>/g;
  var result = data.replace(
    REGEX,
    '<time datetime="' + dt.toISOString() + '">' + dt.toGMTString() + "</time>"
  );

  fs.writeFile(pathFile, result, "utf8", function (err) {
    if (err) return console.log(err);
  });
});
