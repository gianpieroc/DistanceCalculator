require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FromComponent from './FromComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <FromComponent/>
        </div>
    );
  }
}

export default AppComponent;
