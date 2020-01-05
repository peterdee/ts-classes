## Examplary module

**This is an examplary module with Typescript, that is published to NPM.**

**Please ignore this, as this module does not provide any real functionality.**

This module uses [OpenDota API](https://docs.opendota.com/) to load all of the available Dota 2 heroes.

[![Build Status](https://travis-ci.com/peterdee/ts-classes.svg?branch=master)](https://travis-ci.com/peterdee/ts-classes)

[![Known Vulnerabilities](https://snyk.io/test/github/peterdee/ts-classes/badge.svg?targetFile=package.json)](https://snyk.io/test/github/peterdee/ts-classes?targetFile=package.json)

### Installation

```bash
npm i <MODULE_NAME>
```

### Usage

Create an instance of the module:

```javascript
const { DotaHeroes } = require('<MODULE_NAME>');
const Instance = new DotaHeroes();
```

Then use it to load the available heroes list with the `getHeroes` method:

```javascript
const heroes = await Instance.getHeroes();
console.log(heroes);
```
