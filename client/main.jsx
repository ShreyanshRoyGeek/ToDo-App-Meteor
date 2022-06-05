import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { AppRCC } from '../imports/ui/AppRCC';

Meteor.startup(() => {
  render(<AppRCC/>, document.getElementById('react-target'));
});
