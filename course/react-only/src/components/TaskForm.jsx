import React from 'react';

export const TaskForm = ({
  tasks,
  setTasks,
  newTaskLabel,
  setNewTaskLabel,
}) => {
  // フォームの値を保持する
  const handleNewTaskLabel = (e) => {
    setNewTaskLabel(e.target.value);
  };
  // Taskの登録
  const handleAddTask = () => {
    const newTask = { label: newTaskLabel, isDone: false }
    setTasks([...tasks, newTask]);
    setNewTaskLabel('');
  };
  // 完了したTaskを削除する
  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.isDone);
    setTasks(newTasks);
  };

  
  const checkLaboTask = (task) => {
    const _tag = '[Lab]'
    const label = task.label
    return label.indexOf(_tag) === 0 ? true : false
  }

  return (
    <>
      <input
        style = {{
          width: '360px',
          padding: '12px 8px',
          borderRadius: '22px',
          borderTop: '1px solid #aaa',
          borderLeft: '1px solid #aaa',
          borderRight: '2px solid #aaa',
          borderBottom: '2px solid #aaa',
          backgroundImage: 'none',
          backgroundColor: 'yellow',
          borderColor: 'whitesmoke',
          fontSize: '16px',
        }}
        onChange={handleNewTaskLabel}
        type="text"
        value={newTaskLabel}
        placeholder="Enter the task"
      />
      <button 
      style = {{
        color: '#fff',
        backgroundColor: 'red',
        borderBottom: '5px #9f000c',
        fontSize: '20px',
        borderRadius: '100vh',
        borderColor: 'white',
      }}
      onClick={handleAddTask}>Add</button>
      <br />
      <button onClick={handleClearTasks}>Clear</button>
    </>
  );
};
