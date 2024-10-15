#!/usr/bin/env node

const fs = require("fs-extra"); // Use fs-extra for easy file copying
const path = require("path");
const { execSync } = require("child_process"); // Added this line

const projectName = process.argv[2];

if (!projectName) {
  console.error("Please provide a project name.");
  console.error("Usage: npx webpack-react-typescript my-app");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);

// Create a new project directory (will throw if it already exists)
try {
  fs.mkdirSync(projectPath, { recursive: true });
} catch (err) {
  console.error(`Error creating directory: ${err.message}`);
  process.exit(1);
}

// Copy the template files
console.log("Copying the project template...");
fs.copySync(path.join(__dirname, "template"), projectPath);

// Change to the new project directory
process.chdir(projectPath);

// Install dependencies
console.log("Installing dependencies...");
execSync("npm install", { stdio: "inherit" });

console.log("Project setup complete!");
console.log(`\nRun the following commands to get started:\n\ncd ${projectName}\nnpm start`);