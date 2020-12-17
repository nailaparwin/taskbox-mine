import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTask} from '../lib/redux';
import TaskList from './TaskList';
import Button from './Button';
import Input from './Input';

export function PureInboxScreen({ error, onAddTask }) {
  const [tasktoadd, setTaskToAdd] = useState('')

  const handleClick = () => { 
    if (tasktoadd === '')   
    {
      onAddTask("new task")      
    }
    else{
      onAddTask(tasktoadd)
      setTaskToAdd('')
    }
    
  }
  const handleChange = (event) =>{
    setTaskToAdd(event.target.value)
  }

  

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
      <div>  
        <div >
        <Input type="text" value={tasktoadd} onChange={handleChange}/>
        </div>
        <Button title="Add New" size="small" onClick={handleClick}/>
      </div>
    </div>
  );
}

PureInboxScreen.propTypes = {
  /** The error message */
  error: PropTypes.string,
  /** Event to add a new task */
  onAddTask:PropTypes.func,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(
  ({ error }) => ({ error })
  ,dispatch => ({    
    onAddTask: obj => dispatch(addTask(obj)),
})

  )(PureInboxScreen);
