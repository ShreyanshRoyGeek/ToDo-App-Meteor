import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/tasks';

import './index'


Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if(TasksCollection.find().count() === 0) {
    TasksCollection.insert({
      _id: "1",
      title: "1st Book",
      createdAt: new Date(),
    })
  }
  
});
