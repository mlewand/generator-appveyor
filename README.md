# generator-appveyor

[![NPM version][npm-image]][npm-url] [![Build status][appveyor-image]][appveyor-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

Adds a basic [AppVeyor](https://www.appveyor.com/) CI config for node application.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-appveyor using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-appveyor
```

Then generate your new project:

```bash
yo appveyor
```

### Options

You can customize your AppVeyor config name by adding `--appveyorName` option.

```bash
yo appveyor --appveyorName .appveyor.yml
```

## License

MIT © Marek Lewandowski


[npm-image]: https://badge.fury.io/js/generator-appveyor.svg
[npm-url]: https://npmjs.org/package/generator-appveyor
[appveyor-image]: https://ci.appveyor.com/api/projects/status/npn3m9luoouasfp5/branch/master?svg=true&passingText=master%20%E2%9C%93
[appveyor-url]: https://ci.appveyor.com/project/mlewand/generator-appveyor/branch/master
[travis-image]: https://travis-ci.org/mlewand/generator-appveyor.svg?branch=master
[travis-url]: https://travis-ci.org/mlewand/generator-appveyor
[daviddm-image]: https://david-dm.org/mlewand/generator-appveyor.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mlewand/generator-appveyor
