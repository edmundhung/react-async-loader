import React, { Component } from 'react';
import asyncLoading from '../src/AsyncLoad';

class GoogleMap extends Component {

  state = { map: null }

  static sampleStaticFunction () {
    console.info('Static Function called');
  }

  initialize (canvas) {
    if (this.props.gmap && this.state.map == null) {
      const gmap = this.props.gmap;

      this.state.map = new gmap.Map(canvas, {
        center: new gmap.LatLng(22.25, 114.1667),
        zoom: 12
      });
    }
  }

  componentDidMount () {
    this.initialize(React.findDOMNode(this));
  }

  componentDidUpdate () {
    this.initialize(React.findDOMNode(this));
  }

  render () {
    return (
      <div className="mapCanvas" style={{ width: '100%', height: '500px' }}></div>
    );
  }

}

function mapScriptsToProps (ownProps) {
  return {
    gmap: {
      globalPath: 'google.maps',
      url: 'https://maps.googleapis.com/maps/api/js?v=3.exp',
      jsonp: true
    }
  };
}

export default asyncLoading(mapScriptsToProps)(GoogleMap);
