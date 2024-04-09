import React, { Component, useState, useEffect, useReducer } from 'react';

export function TraditionalGreeting(props) {
  return (
    <>
      <h2>Welcome to {props.name} React-sandbox</h2>
    </>
  );
}

export const Greet = (props) => <h3>{`Welcome again ${props.name}, but with a Arrow-Fuction `}</h3>;

export function UserProfile2({ name = 'Anonym', age, location }) {
  return (
    <>
      <h2>Welcome {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Location: {location}</h2>
    </>
  );
}

export function Card({ children }) {
  return <div className='Card'>{children}</div>;
}

export function Counter2() {
  const [count, setCount] = useState(0);

  function TitleUpdater() {
    useEffect(() => {
      if (count === 0) document.title = 'React App';
      else document.title = `User has clicked ${count} times`;
    });
  }

  function handleClickDecrease() {
    if (count > 0) setCount((c) => c - 1);
  }
  function handleClickIncrease() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <TitleUpdater />
      <p>You have clicked {count} times</p>
      <button
        className='counter-btn'
        onClick={() => handleClickIncrease()}
      >
        Click me to increse
      </button>
      <button
        className='counter-btn'
        onClick={() => handleClickDecrease()}
      >
        Click me reduce
      </button>
    </>
  );
}

const initialState = {
  tasks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, action.payload],
      };
    case 'REMOVE_TASK':
      return {
        tasks: state.tasks.filter((task) => task !== action.payload),
      };
    default:
      return state;
  }
}

export function TodoList() {
  const [taskInput, setTaskInput] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: taskInput });
      setTaskInput('');
    }
  };

  const handleRemoveTask = (task) => {
    dispatch({ type: 'REMOVE_TASK', payload: task });
  };

  return (
    <div className='list-container'>
      <input
        type='text'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder='Add a task'
      />
      <button
        className='counter-btn'
        onClick={handleAddTask}
      >
        Add Task
      </button>
      <ul>
        {state.tasks.map((task, index) => (
          <li
            className='list'
            key={index}
          >
            {task}
            <button
              className='counter-btn'
              onClick={() => handleRemoveTask(task)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
