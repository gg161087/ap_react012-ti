import { useState } from 'react';

export const TaskForm = ({ onTaskAdd }) => {
    const [taskName, setTaskName] = useState('');

    const handleInputChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (taskName.trim() !== '') {
            onTaskAdd({ id: Date.now(), name: taskName, completed: false });
            setTaskName('');
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" value={taskName} onChange={handleInputChange} />
            <button type="submit">Add Task</button>
        </form>
    );
};