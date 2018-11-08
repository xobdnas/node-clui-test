//--------------------------------------
//* Setup
//--------------------------------------
// Safety Googles ON
'use strict';
console.clear();

// App Dependencies
const express = require('express');
const files = require('./lib/files');

// CLI Dependencies
const figlet = require('figlet');
const chalk = require('chalk');
const CLI = require('clui');
const clc = require('cli-color');
const clear = require('clear');
const parseArgs = require('minimist');
const inquirer  = require('./lib/inquirer');
const Configstore = require('configstore');

// Start Express
let app = express();
const conf = new Configstore('ginit');

// Display banner
clear();
console.log(
  chalk.yellow(
    figlet.textSync('Code Fellows 401', { horizontalLayout: 'full' })
  )
);

// Check if current folder isn't already a Git repo
if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}

// Test Inquirer
// const run = async () => {
//   let token = github.getStoredGithubToken();
//   if(!token) {
//     await github.setGithubCredentials();
//     token = await github.registerNewToken();    
//   }
//   console.log(token);
// }

const run = async () => {
  const credentials = await inquirer.askGithubCredentials();
  console.log(credentials);
};

run();