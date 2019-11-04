const fs = require('fs')
const {execSync} = require('child_process')

const templateString = fs.readFileSync(".env-template.json")

let template = JSON.parse(templateString)

/**
 * Add in your custom env vars here
 */
template.REACT_APP_BRANCH_NAME = execSync("git rev-parse --symbolic-full-name --abbrev-ref HEAD").toString().trim()

/**
 * Output result into 
 */
const result = Object.keys(template).reduce((prev, curr) => {
    return prev + `\n${curr}=${template[curr]}`
}, "")
fs.writeFileSync(".env", result, {encoding: "utf8"})