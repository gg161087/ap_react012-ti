import { useState, useEffect } from 'react';
import { Text, Box, Button, Center } from '@chakra-ui/react'

export const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
    console.log(task);

    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() =>{
        setIsCompleted(task.completed)    
    },[])

    const handleComplete = () => {
        setIsCompleted(!isCompleted);
        onTaskComplete(task.id);
    };

    const handleDelete = () => {
        onTaskDelete(task.id);
    };

    return (
        <Center>
        <Box display='flex' flexDirection='row' p='0 1rem' minW={'30rem'} justifyContent='space-between'>
            <Button onClick={handleComplete} bg='none'>
                <Text color='#B484C7'>
                    {isCompleted ? <i className="fa-regular fa-square-check"></i> : <i className="fa-regular fa-square"></i>}           
                </Text>                 
                <Text textDecoration={isCompleted ? 'line-through' : 'none'}>
                    {task.name}            
                </Text>
            </Button>
            <Button onClick={handleDelete} colorScheme='red'>Delete</Button>
        </Box>
        </Center>
    );
};