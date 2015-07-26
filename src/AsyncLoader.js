import React from 'react';

var asyncLoading = function (Component, dependencies, exposeStatics = []) {

  function getScript (globalName) {
    var root = window,
        globalPaths = globalName.split('.');

    for (var i = 0; i < globalPaths.length; i++) {
      const path = globalPaths[i],
            prop = root[path];

      if (typeof prop === 'undefined') {
        return null;
      }

      root = prop;
    }

    return root;
  }

  function getScriptLoader (dep, callback) {
    var { globalName, scriptUrl, jsonp } = dep;

    let scriptLoader = document.createElement('script');

    if (jsonp) {
      let callbackName = 'async_' + globalName.replace('.', '_'),
          symbol = scriptUrl.indexOf('?') > -1 ? '&' : '?';

      scriptUrl = `${scriptUrl}${symbol}callback=${callbackName}`;
      window[callbackName] = callback;
    } else {
      scriptLoader.onload = callback;
      scriptLoader.onreadystatechange = () => {
        if (this.readyState === 'loaded') {
          window.setTimeout(scriptLoader.onload, 0);
        }
      };
    }

    scriptLoader.async = 1;
    scriptLoader.src = scriptUrl;

    return scriptLoader;
  }

  function getInitialState () {
    let state = {};

    dependencies.forEach((dep) => {
      state[dep.injectedAs] = getScript(dep.globalName);
    });

    return state;
  }

  class AsyncLoader extends React.Component {

    displayName = 'AsyncLoader';

    state = getInitialState();

    componentDidMount () {
      dependencies.forEach((dep) => {
        if (this.state[dep.injectedAs] === null) {
          var scriptLoader = getScriptLoader(dep, () => {
            this.loadHandler(dep);
          });

          document.body.appendChild(scriptLoader);
        }
      });
    }

    loadHandler = (dep) => {
      const { globalName, injectedAs } = dep;

      var script = getScript(globalName);

      if (script !== null) {
        var scriptLoaded = {};
        scriptLoaded[injectedAs] = script;

        this.setState(scriptLoaded);
      }
    }

    injectScripts = (component) => {
      var element = React.createElement(component, this.props);
      return React.cloneElement(element, this.state);
    }

    render () {
      return this.injectScripts(Component);
    }

  }

  exposeStatics.forEach((fn) => {
    AsyncLoader[fn] = Component[fn];
  });

  return AsyncLoader;

};

export default asyncLoading;
