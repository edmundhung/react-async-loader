react-async-loader
==================
Async scripts loading composition

Features include:
* jsonp support
* multiple scripts loading

Installation
------------

```
$ npm install react-async-loader
```

Usage
-----

```
// using an ES6 transpiler
import asyncLoad from 'react-async-loader';

// not using an ES6 transpiler
var asyncLoad = require('react-async-loader');
```


The only API `asyncLoad(mapScriptsToProps) => AsyncLoaded(Component)` receives 1 parameter and returns a function to connect with your Component.

* mapScriptsToProps (props => Config Object) - Configure scripts that are required to be injected into the component when loaded
* Component (React Component) - The component being wrapped

Config Object
- #key: The object key is the name that will be used when injecting the loaded script.
- globalPath: The script name to be injected from the global scope (window). E.g. google.maps
- url: The url of the script, exclude callback parameter for jsonp.
- jsonp: Optional. Append callback parameter to scriptUrl when true.

Example
-------
See this [GoogleMap example](https://github.com/EdStudio/react-async-loader/tree/master/example/)

Changelog
-------
[2015-11-30] Version 0.1.0

1. API Redesigned: Improve configurability based on Components properties (mapScriptsToProps)
2. Enable auto static function exposures with hoist-non-react-statics
3. Fix a bug with server side rendering (No window and document object)

License
-------
MIT
