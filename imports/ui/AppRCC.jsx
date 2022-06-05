import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import Header from './Header';
import tasks from '../api/tasks';
import { TasksCollection } from '/imports/api/tasks';


import {
    Container,ListGroup, InputGroup, FormControl, Button, Form, Placeholder 
  } from 'react-bootstrap';
  
  const noDbTask = [
    {_id: "1", title: "First Task" },
    {_id: "2", title: "Second Task" }
    
  ];

export class AppRCC extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          newTasks: [],
          newWork: ""
        };
      }
    

      getData = function(){
        Meteor.call('getData', (error, result)=>{
          if(result) {
            console.log("successfull ",result);
            this.setState({ newTasks : result})
          } 
          else {
            console.log("fail ",error);
          }
        })
      } 
      
      componentDidMount(){
        this.getData();
      }

      

   // Add data to db
   handleSubmit = (e) => {
    e.preventDefault();
    if(!this.state.newWork) {
      return alert("Please enter a new task");
    }
    Meteor.call('postData', this.state.newWork.trim(), (error, result)=>{
      if(result) {
        console.log("successfull ",result);
        //this.setState({ newTasks : result});
        this.setState({ newWork : ""});
        this.getData();
      } 
      else {
        console.log("fail2 ",error);
      }
    })
    
    //postData(this.state.newWork.trim());
    //this.state.newTasks.insert({createdAt: new Date(), title: this.state.newWork.trim()});
  }


  // Load data from db
    //   const dbTask = useTracker(() => tasks.find({}, { sort: { createdAt: -1 } }).fetch());
    //   console.log(dbTask);

  

  // Delete data from db
   onDelete = (_id) => {
    // TasksCollection.remove(_id);
    Meteor.call('deleteData', _id, (error, result)=>{
      if(result) {
        console.log("successfull ",result);
        //this.setState({ newTasks : result});
        this.getData();
      } 
      else {
        console.log("fail ",error);
      }
    })
  }

  // Update data from db
  // const onUpdate = (id: string) => {
  //   tasks.update(_id)
  // }

  render() {
    const  { newTasks }  = this.state;
    // this.getData();

    return (
        <Container>
          <div className='mcontainer d-flex justify-content-flex-end flex-column'> 
            <Header/>
            <div className='note-wrapper'>
              <ListGroup className='list-group'>
                {
                  newTasks.map(({ title, _id}, key) => {
                    return(
                      <div key={key}>
                      <Task {...{title, _id }} onDelete={this.onDelete}/>
                    </div>
                    )
                  })
                }
              </ListGroup>
            </div>
    
            <div className="input-wrapper">
              <Form onSubmit={this.handleSubmit}>
                <InputGroup className='mb-3'>
                  <FormControl onChange={(e) => this.setState({newWork : e.target.value})}
                  value= {this.state.newWork}
                  placeholder='Enter a task' />
                    <Button type='submit'> Submit </Button>
                </InputGroup>
              </Form>
            </div>
    
          </div>
        </Container>
      )
  }
}
