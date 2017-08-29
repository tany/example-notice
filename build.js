const packager = require("electron-packager");
const package = require("./src/package.json");

packager({
    name: package["name"],
    dir: "./src",
    out: "./dist",
    platform: "win32",
    arch: "x64",
    version: "1.7.5",
    overwrite: true
}, function (err, appPaths) {
    if (err) console.log(err);
    console.log("Done: " + appPaths);
});
