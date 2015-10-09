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
import asyncLoading from 'react-async-loader';

// not using an ES6 transpiler
var asyncLoading = require('react-async-loader');
```


The only API `asyncLoading(dependencies) => AsyncLoaded(Component)` receives 1 parameter and returns a function to connect with your Component.

* dependencies (Array of Object) - Information about the script that are required to be injected into the component
* Component (React Component) - The component being wrapped

Dependency Object
- globalName: The script name to be injected from the global scope (window).
- scriptUrl: The url of the script, exclude callback parameter for jsonp.
- injectedAs: The name that will be used when injecting the loaded script.
- jsonp: Optional. Append callback parameter to scriptUrl when true.

Example
-------
See this [GoogleMap example](https://github.com/EdStudio/react-async-loader/tree/master/example/)

License
-------
MIT
