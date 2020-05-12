import React from 'react';
import useInput from '../../hooks/useInput';
import { connect } from 'react-redux';
import { addTodoList } from '../../actions/todolist';
//import { ManageTodoLists } from '../ManageTodoLists';
import './AddTodoForm.css';

const AddTodoForm = (props) => {
  const [name, changeName, resetName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (name !== '') {
      props.addTodoList(name);
      resetName();
    }
  };
  
  return (
    <div className='AddTodoForm'>
      <h3>Add Todo Form</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='todo-list-name'>Todo Text:</label>
          <input
            type='text'
            id='todo-list-name'
            value={name}
            onChange={changeName}
          />
          <label htmlFor='todo-list-name'>Select Todo List:</label>
            <select>
              <option value></option>
            </select>
            
        </div>

        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default connect(null, { addTodoList })(AddTodoForm);