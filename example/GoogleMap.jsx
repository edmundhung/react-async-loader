import React from 'react';
import asyncLoading from '../src/AsyncLoader';

class GoogleMap extends React.Component {

  state = { map: null }

  static sampleExposeFunction () {
    console.info('Function called');
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

export default asyncLoading(GoogleMap, [{
  globalName: 'google.maps',
  scriptUrl: 'https://maps.googleapis.com/maps/api/js?v=3.exp',
  injectedAs: 'gmap',
  jsonp: true
}], ['sampleExposeFunction']);
