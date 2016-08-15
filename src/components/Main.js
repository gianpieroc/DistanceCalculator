require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete'
import geoLib from 'geolib'
import {Notification} from 'react-notification'

require('styles//From.css')

class AppComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAdd:'',
      currentAdd2:'',
      address2: '',
      address: '',
      lat2: 0,
      long2: 0,
      lat:0,
      long: 0,
      dist: 0,
      currentProc: 'Any'
    }
    this.onChanges = this.onChanges.bind(this)
    this.onChangesT = this.onChangesT.bind(this)
  }

  onChanges(address) {
    this.setState({
      currentAdd:address,
      currentProc:'Obtaining coords'
    })
    geocodeByAddress(address,  (err, { lat, lng  }) => {
      var distan = geoLib.getDistance({
        latitude:lat,
        longitude:lng
      },{
        latitude:this.state.lat2,
        longitude:this.state.long2
      }) / 1000;
      this.setState({
        address: address,
        lat: lat,
        long: lng,
        dist: distan,
        currentProc: 'Done'
      })
    })
  }

  onChangesT(address) {
    this.setState({
      currentAdd2: address,
      currentProc: 'Obtaining coords'
    })
    geocodeByAddress(address,  (err, { lat, lng  }) => {
      var distan = geoLib.getDistance({
        latitude:this.state.lat,
        longitude:this.state.long
      },{
        latitude:lat,
        longitude:lng
      }) / 1000;
      this.setState({
        address2: address,
        lat2: lat,
        long2: lng,
        dist: distan,
        currentProc: 'Done'
      })
    })
  }

  render() {
    const AutocompleteItem = ({ suggestion  }) => (<div><i/>{suggestion}</div>)
    return (
      <div>
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
          <Notification
            isActive={this.state.currentProc != 'Any'}
            message={this.state.currentProc}
          />
      </div>
        <h3>Distance difference between {this.state.currentAdd} and {this.state.currentAdd2} is {this.state.dist} Km </h3>
      </div>
      );
    }
  }

export default AppComponent;
