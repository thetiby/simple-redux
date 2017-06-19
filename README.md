# React + Redux w/ ES6 Starter Project

A boilerplate using React, Redux, webpack + hot module reloading, and ES6 + JSX via Babel.

The provided boilerplate enables client-side ES6 via the following technologies:

- [webpack](http://webpack.github.io/) and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as a client-side module builder and module loader.
- [npm](https://www.npmjs.com/) as a package manager and task runner
- [Babel](http://babeljs.io/) 6 as a transpiler from ES6 to ES5.
- [React](https://facebook.github.io/react/) and [JSX](https://facebook.github.io/jsx/) as a virtual Dom JavaScript library for rendering user interfaces (views).
- [Redux](http://redux.js.org/) as an incredibly simple way of modelling your data app state, with great community support.
- [Redux DevTools](https://github.com/gaearon/redux-devtools) as a live-editing environment for your Redux apps.
- [ESLint](http://eslint.org/) as a reporter for syntax and style issues. [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules.

## Getting Started

### Installation

Get the repo (clone/download).`
Install dependencies.

```
$ npm i
```

TIP: if you are using npm `2.x` version  (check via `npm --v` command), run `npm dedupe` after the above. (see why on https://babeljs.io/docs/setup/#babel_cli)

### White Label It

- Update name, description, author, repository in `package.json`


## Development

There are two ways in which you can build and run the web app:

* Build once for (ready for ***Production***):
  * `$ npm run build`
  * Open `build/index.html` through the local webserver


* Hot reloading via webpack dev server:
  * `$ npm start`
  * Point your browser to http://localhost:3000/, page hot reloads automatically when there are changes
  * Alternatively, open your view through your own webserver, and make sure it loads `http://localhost:3000/vendor.bundle.js` and `http://localhost:3000/app.js`

## FAQ

### What's this for?

This starter kit implements best practices like minification, bundling, and so on. It saves you from the long, painful process of wiring it all together into an automated dev environment and build process.

### What's happening under the hood when I run `npm start`?

Webpack serves your app in memory when you run `npm start`. No physical files are written. However, the web root is /src, so you can reference files under /src in index.html.

### How do I deploy this?

`npm run build`. This will prepare and build the project for production use. It does the following:

- Minifies all JS
- Sets NODE_ENV to `production` so that React is built in production mode
- Places the resulting built project files into `/build/web/js` directory.

It is encouraged that you modify the webpack configs under `/config` to match your project structure. This starter kit assumes no specific server environment, it only helps you build the javascript bundle that contains your SPA. You need to include it in your desired application view. You can see a 'Hello World' working example of this package by serving the `/build/index.html` file through  your web server of choice. (while maintaining this exact file structure)

## License

[MIT](http://opensource.org/licenses/MIT)

## Acknowledgement

Thanks to [nicksp](https://github.com/nicksp) for [his boilerplate example](https://github.com/nicksp/redux-webpack-es6-boilerplate)

test commit edited
