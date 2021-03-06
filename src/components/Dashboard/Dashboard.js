import React from 'react';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import AddTodoList from '../AddTodoList/AddTodoList';
import ManageTodoLists from '../ManageTodoLists/ManageTodoLists';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='Dashboard'>
      <section className='add-todo'>
      <AddTodoForm/>
      </section>
     
      <section className='add-todo-list'>
        <AddTodoList />
      </section>

      <section className='todo-list'>Todo list</section>
      <section className='master-todo-list'>
        <ManageTodoLists />
      </section>
    </div>
  );
};

export default Dashboard;