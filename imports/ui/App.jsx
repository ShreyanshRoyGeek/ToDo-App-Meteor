import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTracker } from 'meteor/react-meteor-data'



import Header from './Header';
import Task from './Task';
import tasks from '../api/tasks'
import { TasksCollection } from '/imports/api/tasks';


import {
  Container,ListGroup, InputGroup, FormControl, Button, Form, Placeholder 
} from 'react-bootstrap';

const noDbTask = [
  {_id: "1", title: "First Task" },
  {_id: "2", title: "Second Task" }
  
];


export const App = () => { 

  const [newTask, setNewTask] = useState("");
  
  // Add data to db
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newTask) {
      return alert("Please enter a new task");
    }
    TasksCollection.insert({createdAt: new Date(), title: newTask.trim()});
    setNewTask("");
  }


  // Load data from db
  const dbTask = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  console.log(dbTask);

  // Delete data from db
  const onDelete = (_id) => {
    TasksCollection.remove(_id);
  }

  // Update data from db
  // const onUpdate = (id: string) => {
  //   tasks.update(_id)
  // }

  return (
    <Container>
      <div className='mcontainer d-flex justify-content-flex-end flex-column'> 
        <Header/>
        <div className='note-wrapper'>
          <ListGroup className='list-group'>
            {
              dbTask.map(({ title, _id}, key) => {
                return(
                  <div key={key}>
                  <Task {...{title, _id, onDelete}} />
                </div>
                )
              })
            }
          </ListGroup>
        </div>

        <div className="input-wrapper">
          <Form onSubmit={handleSubmit}>
            <InputGroup className='mb-3'>
              <FormControl onChange={(e) => setNewTask(e.target.value)}
              value= {newTask}
              placeholder='Enter a task' />
                <Button type='submit'> Submit </Button>
            </InputGroup>
          </Form>
        </div>

      </div>
    </Container>
  )
};
