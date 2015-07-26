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


The only API `asyncLoading(Component, dependencies, exposeStatics)` receives 3 parameters.

1. Component (React Component) - The component being wrapped
2. dependencies (Array of Object) - Information about the script that are required to be injected into the component
3. expoxeStatics (Array of String) - The name of static functions from the component that need to be exposed

Dependency information
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
