(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactAsyncLoader"] = factory(require("react"));
	else
		root["ReactAsyncLoader"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(1);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}

	function getScript(globalPath) {

	  if (typeof window === 'undefined') {
	    return null;
	  }

	  var paths = globalPath.split('.');
	  var root = window;

	  for (var i = 0; i < paths.length; i++) {
	    var path = paths[i];
	    var prop = root[path];

	    if (typeof prop === 'undefined') {
	      return null;
	    }

	    root = prop;
	  }

	  return root;
	}

	function getScriptLoader(dep, callback) {
	  var _this = this;

	  if (typeof document === 'undefined') {
	    return null;
	  }

	  var globalPath = dep.globalPath;
	  var url = dep.url;
	  var jsonp = dep.jsonp;

	  var scriptLoader = document.createElement('script');

	  if (jsonp) {
	    var _dep$callbackName = dep.callbackName;
	    var callbackName = _dep$callbackName === undefined ? '_async_' + globalPath.replace('.', '_') : _dep$callbackName;

	    url = '' + url + (url.indexOf('?') > -1 ? '&' : '?') + 'callback=' + callbackName;

	    window[callbackName] = callback;
	  } else {
	    scriptLoader.onload = callback;
	    scriptLoader.onreadystatechange = function () {
	      if (_this.readyState === 'loaded') {
	        window.setTimeout(scriptLoader.onload, 0);
	      }
	    };
	  }

	  scriptLoader.async = 1;
	  scriptLoader.src = url;

	  return scriptLoader;
	}

	var asyncLoad = function asyncLoad(mapScriptsToProps) {

	  function getInitialState(props) {
	    var dependencies = mapScriptsToProps(props);

	    return Object.keys(dependencies).reduce(function (states, name) {
	      return _extends({}, states, _defineProperty({}, name, getScript(dependencies[name].globalPath)));
	    }, {});
	  }

	  return function (Component) {
	    var AsyncLoaded = (function (_React$Component) {
	      _inherits(AsyncLoaded, _React$Component);

	      function AsyncLoaded() {
	        _classCallCheck(this, AsyncLoaded);

	        _get(Object.getPrototypeOf(AsyncLoaded.prototype), 'constructor', this).apply(this, arguments);

	        this.displayName = 'AsyncLoaded(' + getDisplayName(Component) + ')';
	        this.state = getInitialState(this.props);
	      }

	      _createClass(AsyncLoaded, [{
	        key: 'loadScripts',
	        value: function loadScripts(dependencies) {
	          var _this2 = this;

	          return Object.keys(dependencies).filter(function (name) {
	            return _this2.state[name] === null;
	          }).map(function (name) {
	            var dep = dependencies[name];
	            return getScriptLoader(dep, _this2.loadHandler.bind(_this2, name, dep.globalPath));
	          }).map(function (scriptLoader) {
	            if (typeof document !== 'undefined') {
	              document.body.appendChild(scriptLoader);
	            }
	          });
	        }
	      }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          this.loadScripts(mapScriptsToProps(this.props));
	        }

	        /**
	         * Support again in the next version
	         */

	        // componentWillReceiveProps (nextProps) {
	        //   this.setState(getInitialState(nextProps));
	        // }
	        //
	        // componentDidUpdate (nextProps) {
	        //   const dependencies = mapScriptsToProps(nextProps);
	        //
	        //   this.loadScripts(dependencies);
	        // }

	      }, {
	        key: 'loadHandler',
	        value: function loadHandler(name, globalPath) {
	          var script = getScript(globalPath);

	          if (script !== null) {
	            this.setState(_defineProperty({}, name, script));
	          }
	        }
	      }, {
	        key: 'injectScripts',
	        value: function injectScripts(component) {
	          return _react2['default'].cloneElement(_react2['default'].createElement(component, this.props), this.state);
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return this.injectScripts(Component);
	        }
	      }]);

	      return AsyncLoaded;
	    })(_react2['default'].Component);

	    return (0, _hoistNonReactStatics2['default'])(AsyncLoaded, Component);
	  };
	};

	exports['default'] = asyncLoad;
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';

	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};

	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};

	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }

	    return targetComponent;
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;