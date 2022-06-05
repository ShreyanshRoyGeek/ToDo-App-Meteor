import { Mongo } from "meteor/mongo";


//export default new Mongo.Collection("tasks");

export const TasksCollection = new Mongo.Collection('tasks');
