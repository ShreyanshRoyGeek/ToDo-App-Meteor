import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';


function Task({title, _id, onDelete}) {
  return (
    <ListGroup.Item key={_id} className={`list-group-item d-flex justify-content-between task align-items-center`}>
      <div className='title'>
        <span>{title}</span>
        <Button variant='danger' size='sm' onClick={() => onDelete(_id)} className='del_button'> DEL </Button>
      </div>
    </ListGroup.Item>
    
  )
}

export default Task