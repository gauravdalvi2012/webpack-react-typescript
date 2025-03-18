# Webpack React TypeScript CLI

A CLI tool to generate a simple Webpack React TypeScript project setup. This project provides a ready-to-use development environment with essential tooling like Babel, Webpack, Prettier, and TypeScript.

## Features

- **React 18** with TypeScript support
- Webpack setup for both development and production
- Babel for compiling modern JavaScript/TypeScript
- Prettier for code formatting
- CSS and asset bundling with Webpack
- Dev server with hot-reloading

## Usage

To create a new Webpack React TypeScript project, you can directly use `npx` without installing the tool globally:

```bash
npx @gauravdalvi/webpack-react-typescript@latest <project-name>
```
This will create a new folder with the specified name and initialize the project with a complete Webpack, React, and TypeScript setup.

## Install Dependencies
Inside your generated project, run the following command to install dependencies:

```bash
npm install
```

## Start the Development Server
Inside your generated project, run the following command to start the development server:

```bash
npm start
```

This will open your project in a browser with live reload capabilities.

## Build for Production
To build the project for production:

```bash
npm run build
```
This will create a dist folder with the bundled and minified code ready for deployment.

## Code Formatting
To format your code using Prettier, run:

```bash
npm run format
```

## Create a New React Component
To quickly create a new React component, run:

```bash
npm run create-component <component-name>
```
This will execute the create_component.sh script to generate a boilerplate for your component.

## Template Overview
The generated project will have the following structure:

```bash
.
├── package.json
├── README.md
├── scripts
│   └── create_component.sh
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── logo.svg
│   ├── index.css
│   ├── index.html
│   ├── index.tsx
│   └── types
│       └── declarations.d.ts
├── tsconfig.json
├── webpack.config.js
└── webpack.prod.js
```