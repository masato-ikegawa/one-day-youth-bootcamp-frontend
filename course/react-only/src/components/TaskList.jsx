import React from 'react';
import { Task } from '../'

export const TaskList = ({ tasks, setTasks }) => {
  // Taskの状態を切り替える
  const handleCheckBox = (e, i) => {
    const newTasks = tasks.map((task, _i) => {
      return _i === i ? { ...task, isDone: e.target.checked } : task;
    });
    setTasks(newTasks);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={`todo-${index}`}>
          <p style={task.isLab ? {color: 'red', display: 'inline-block'} : {color: 'black', display: 'inline-block'}}>
            {task.isDone ? <s>{task.label}</s> : task.label}
          </p>
          <input
            style = {{marginLeft: '30px', transform: 'scale(2.5)',}}
            onChange={(e) => handleCheckBox(e, index)}
            type="checkbox"
            checked={task.isDone}
          />
        </li>
      ))}
    </ul>
  );
};

