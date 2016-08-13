'use strict';

import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import geoLib from 'geolib'
require('styles//From.css');

class FromComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      currentAdd:'',
      currentAdd2:'',
      address2: '',
      address: '',
      lat2:0,
      long2:0,
      lat: 0,
      long:0,
      dist: 0
    }
    this.onChanges = this.onChanges.bind(this)
    this.onChangesT = this.onChangesT.bind(this)
    this.distance = this.distance.bind(this)
  }

  distance(){
    var distan = geoLib.getDistance({latitude:this.state.lat, longitude:this.state.long},{latitude:this.state.lat2, longitude:this.state.long2});
    this.setState({
      dist: distan
    })
  }

  onChanges(event) {
    this.setState({currentAdd:event})
    geocodeByAddress(event,  (err, { lat, lng  }) => {
      var distan = geoLib.getDistance({latitude:this.state.lat, longitude:this.state.long},{latitude:this.state.lat2, longitude:this.state.long2}) / 1000 ;
      this.setState({
	address: event,
	lat: lat,
	long: lng,
	dist: distan
      })
    })
  }

  onChangesT(event) {
    this.setState({ currentAdd2: event})
    geocodeByAddress(event,  (err, { lat, lng  }) => {
      var distan = geoLib.getDistance({latitude:this.state.lat, longitude:this.state.long},{latitude:this.state.lat2, longitude:this.state.long2}) / 1000;
      this.setState({
	address2: event,
	lat2: lat,
	long2: lng,
	dist: distan
      })
    })
  }

  render() {
    const AutocompleteItem = ({ suggestion  }) => (<div><i/>{suggestion}</div>)
    return (
      <div className="content">
	<PlacesAutocomplete
	  value = {this.state.currentAdd}
	  onChange={this.onChanges}
	  autocompleteItem={AutocompleteItem}
	/>
	<PlacesAutocomplete
	  value = {this.state.currentAdd2}
	  onChange={this.onChangesT}
	  autocompleteItem={AutocompleteItem}
	/>
	<h3>Distance difference {this.state.dist} Km</h3>
      </div>
    );
  }
}

FromComponent.displayName = 'FromComponent';

export default FromComponent;
