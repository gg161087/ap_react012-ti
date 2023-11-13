import { List, ListItem } from '@chakra-ui/react'

import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
    console.log(tasks);
    return (
        <List spacing={3}>
            {tasks.map(task => (
                <ListItem key={task.id}>
                    <TaskItem                        
                        task={task}
                        onTaskComplete={onTaskComplete}
                        onTaskDelete={onTaskDelete}
                    />
                </ListItem>
            ))}
        </List>
    );
};