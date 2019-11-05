const fs = require('fs')
const {execSync} = require('child_process')

let template = {}

/**
 * Add in your custom env vars here
 */
template.REACT_APP_BRANCH_NAME = execSync("git rev-parse --symbolic-full-name --abbrev-ref HEAD").toString().trim()
template.REACT_APP_VERSION = process.env.npm_package_version


/**
 * Output result into 
 */
const result = Object.keys(template).reduce((prev, curr) => {
    return prev + `\n${curr}=${template[curr]}`
}, "")
fs.writeFileSync(".env", result, {encoding: "utf8"})