const shell = require("shelljs");
const fs = require('fs');
const path = require("path")

const frontendUrl = `https://github.com/GE-MDS-FNM-V2/frontend.git`;
const backendUrl = `https://github.com/GE-MDS-FNM-V2/backend.git`;
const frontendPath = path.resolve(__dirname, `./frontend`)
const backendPath = path.resolve(__dirname, `./backend`)

// shell.config.silent = true;


const cloneOrPull = (repoName, repoPath, repoUrl) => {
  if(!shell.cd(repoPath).stderr && shell.cd(repoPath).exec(`git rev-parse --is-inside-work-tree | cat`)){
    console.info(`${repoName} repo already exists`)
  }else{
    console.info("Cloning fresh version of frontend")
    shell.exec(`git clone ${repoUrl} ${repoPath}`);
  }
}

const commands = {
  start: () => {
    if (!shell.which("git")) {
      shell.echo("Sorry, this script requires git");
      shell.exit(1);
    }

    cloneOrPull("Frontend", frontendPath, frontendUrl)
    cloneOrPull("Backend", backendPath, backendUrl)

    console.info("Starting frontend application")
    shell.cd(frontendPath).exec("yarn").exec("yarn start", {async:true})
    console.info("Staring backend application")
    shell.cd(backendPath).exec("yarn").exec("yarn start")

  },
  cloneOrPull
};


const args = process.argv

const command = args[2]
if(Object.keys(commands).includes(command)){
  commands[command]()
}else{
  console.error(`Command "${command}" not found`)
  process.exit(1)
}
