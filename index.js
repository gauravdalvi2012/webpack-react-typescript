#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please provide a project name.");
  console.error("Usage: npx create-webpack-react-typescript my-app");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// Check if the directory already exists
if (fs.existsSync(projectPath)) {
  console.error(`Directory ${projectName} already exists.`);
  process.exit(1);
}

// Create a new project directory
fs.mkdirSync(projectPath);

// Clone the template repository
console.log("Cloning the project template...");
execSync(`git clone https://github.com/gauravdalvi2012/webpack-react-typescript.git ${projectName}`);

// Remove the .git folder to prevent conflicts
fs.rmSync(path.join(projectPath, ".git"), { recursive: true, force: true });

// Change to the new project directory
process.chdir(projectPath);

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("Project setup complete!");
console.log(`\nRun the following commands to get started:\n\ncd ${projectName}\nnpm start`);