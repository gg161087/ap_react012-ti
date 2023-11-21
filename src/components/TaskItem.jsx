import { useState } from 'react';
import { Text, Box, Button } from '@chakra-ui/react'

export const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {

    const [isCompleted, setIsCompleted] = useState(false);

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
        onTaskComplete(task.id);
    };

    const handleDelete = () => {
        onTaskDelete(task.id);
    };

    return (
        <Box display='flex' flexDirection='row' gap='2rem'>
            <Button onClick={handleComplete} bg='none' gap='1rem'>
                <Text color='#B484C7'>
                    {isCompleted ? <i class="fa-regular fa-square-check"></i> : <i class="fa-regular fa-square"></i>}           
                </Text>                 
                <Text textDecoration={isCompleted ? 'line-through' : 'none'}>
                    {task.name}            
                </Text>
            </Button>
            <Button onClick={handleDelete} colorScheme='red'>Delete</Button>
        </Box>

    );
};