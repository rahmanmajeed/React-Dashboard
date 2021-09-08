# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### Install tailwindcss postcss postcss-cli autoprefixer

`npm install tailwindcss postcss postcss-cli autoprefixer` or
`yarn add tailwindcss postcss postcss-cli autoprefixer`

### Change `package.json` file scripts -

`"start": "npm-run-all -p start:css start:js",`
`"start:js": "react-scripts start",`
`"start:css": "postcss src/App.css -o src/index.css -w"`

### Then, run this command for `tailwind.config.js` & `postcss.config.js` file,

`npx tailwindcss init -p`

### Add, `npm-run-all` package for handle complex script

`yarn add npm-run-all`

In the project directory, you can run:

### `yarn start`
