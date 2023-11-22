import { List, ListItem } from '@chakra-ui/react'

import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {    
    return (
        <List spacing={3} w='100%' marginTop={'1rem'}>
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