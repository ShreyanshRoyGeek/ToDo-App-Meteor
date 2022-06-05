// Back-End
import { TasksCollection } from '/imports/api/tasks';


Meteor.methods({
    getData: function(){
        const data = TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch();
        console.log(data)
        return data;
    },

    postData: function(data) {
        try{
        TasksCollection.insert({title: data, createdAt: new Date()});
        return data;
        }
        catch(error){
            return error;

        }
    },

    deleteData: function(_id) {
        try{
            TasksCollection.remove(_id);
            return _id;
        }
        catch(error){
            return error;

        }
        
    }




})

