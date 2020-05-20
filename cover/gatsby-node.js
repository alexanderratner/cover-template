const fs = require("fs")
const cheerio = require("cheerio")
const shell = require("shelljs")

exports.onPostBuild = async function onPostBuild() {
  shell.ls("./public/*.html").map(function(file) {
    console.log("Unwrapping elements from " + file)
    const $outer = cheerio.load(fs.readFileSync(file).toString())
    const $ = cheerio.load($outer("html").html())
    $("html").each(function(i, elem) {
      var contents = $(this).contents()
      $(this).replaceWith(contents)
    })
    $("head").each(function(i, elem) {
      var contents = $(this).contents()
      $(this).replaceWith(contents)
    })
    $("meta").each(function(i, elem) {
      var contents = $(this).contents()
      $(this).replaceWith(contents)
    })
    $("body").each(function(i, elem) {
      var contents = $(this).contents()
      $(this).replaceWith(contents)
    })
    fs.writeFileSync(file, $.html())
  })
}