<p align="center">
  <a href="http://zircle.io">
    <img src="https://raw.githubusercontent.com/zircleUI/docs/gh-pages/zircle-dev.png" width="200">
  </a>
</p>

<p align="center">
  A frontend library to develop zoomable user interfaces.
</p>

<p align="center">
  
  <a href="https://www.npmjs.com/package/zircle"><img src="https://img.shields.io/github/package-json/v/zircleui/zircleui/vue3" ></a>
  <a href="https://vuejs.org/"><img alt="npm" src="https://img.shields.io/badge/vue-3.x-brightgreen.svg"></a>
  <a href="https://www.npmjs.com/package/zircle"><img alt="downloads" src="https://img.shields.io/npm/dm/zircle.svg?style=flat"></a>
  <br> <br>
  Like it? Leave a star, it will help to attract more visitors and contributors.<a href="https://github.com/zircleUI/zircleUI/stargazers"> <img src="https://img.shields.io/github/stars/zircleUI/zircleUI.svg?label=%E2%98%85%20Stars&logo=-&style=social"></a>
</p>

## 💥 This is the Vue3 branch of zircle-ui

**Switch to master branch for latest estable release (Vue2), and documentation**

Vue3 Zircle release has some limitations. For instance, Vue-router is not working.

## Contributing
Many things could be improved and enriched with you collaboration no matter if you are a developer or not. [Here you will find](https://zircleui.github.io/docs/contribute/) some guidelines for inspiration.

## Stay updated
This is a dev branch, to be updated about what is being doing you can see the [CHANGELOG](https://github.com/zircleUI/zircleUI/blob/dev/CHANGELOG.md) and read the [issues](https://github.com/zircleUI/zircleUI/issues).

## Development Setup
You will need Node.js version 8+ installed.

Open a terminal and type:

```bash
git clone https://github.com/zircleui/zircleui.git
```
After cloning the repository, execute:

```bash
npm install
```
To work with the vue3 branch, run:

```bash
git checkout vue3
```

## Commonly used NPM scripts
```bash
# start demo app
npm run serve

# to check and fix code
npm run lint

# run jest unit tests
npm test

# build zircle-ui library
npm run build:zircle
```

## Project Structure

```bash
.
├── dist
├── node_modules
├── public
├── src
│   ├── components
│   │    └── child-components
│   ├── store
│   │    └── modules
│   └── styles
│        └── sass
└── tests
   └── unit

```

## License
[MIT Licensed | Copyright © 2017 - present | Juan Martín Muda](https://raw.githubusercontent.com/zircleUI/zircleUI/master/LICENSE)
