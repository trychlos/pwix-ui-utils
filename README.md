# pwix:ui-utils

## What is it ?

A Meteor package to gather our UI styling utilities while keeping it as light as possible, so that any package can safely use this one without pulling too many unused garbage.

## Installation

This Meteor package is installable with the usual command:

```sh
    meteor add pwix:ui-utils
```

## Usage

Nothing to do: the stylesheets are automatically made available to the client.

## Provides

### `UIUtils`

The exported `UIUtils` global object provides following items:

#### Functions

##### `UIUtils.DOM.waitFor( selector )`

Returns a `Promise` which will eventually resolve when the selector be DOM-ready.

### CSS positioning

### mixins

## Configuration

None at the moment.

## NPM peer dependencies

Starting with v 0.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.4.0:

```js
    'ellipsize': '^0.5.1',
    'lodash': '^4.17.0'
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-ui-utils/issues).

---
P. Wieser
- Last updated on 2025, Jul. 8th