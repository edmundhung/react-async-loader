import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

function getScript (globalName) {
  const root = window;
  const globalPaths = globalName.split('.');

  for (var i = 0; i < globalPaths.length; i++) {
    const path = globalPaths[i];
    const prop = root[path];

    if (typeof prop === 'undefined') {
      return null;
    }

    root = prop;
  }

  return root;
}

function getScriptLoader (dep, callback) {
  const { globalName, scriptUrl, jsonp } = dep;

  let scriptLoader = document.createElement('script');

  if (jsonp) {
    let callbackName = `_async_${globalName.replace('.', '_')}`;
    scriptUrl = `${scriptUrl}${scriptUrl.indexOf('?') > -1 ? '&' : '?'}callback=${callbackName}`;

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

var asyncLoading = function (dependencies) {

  function getInitialState () {
    let state = {};

    dependencies.forEach((dep) => {
      state[dep.injectedAs] = getScript(dep.globalName);
    });

    return state;
  }

  return function (Component) {

    class AsyncLoaded extends React.Component {

      displayName = `AsyncLoaded(${getDisplayName(Component)})`;

      state = getInitialState();

      componentDidMount () {
        dependencies
          .filter(dep => this.state[dep.injectedAs] === null)
          .map(dep => getScriptLoader(dep, () => { this.loadHandler(dep); }))
          .forEach(document.body.appendChild);
      }

      loadHandler (dep) {
        const { globalName, injectedAs } = dep;

        let script = getScript(globalName);

        if (script !== null) {
          this.setState({ [injectedAs]: script });
        }
      }

      injectScripts (component) {
        return React.cloneElement(
          React.createElement(component, this.props),
          this.state
        );
      }

      render () {
        return this.injectScripts(Component);
      }

    }

    return hoistStatics(AsyncLoaded, Component);

  };

};

export default asyncLoading;
