/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import FromComponent from 'components//FromComponent.js';

describe('FromComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(FromComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('from-component');
  });
});
