import { useState, useEffect } from 'react'
import { VStack, Box, Text, Divider, Button, Center} from '@chakra-ui/react'
import { Header } from './../partials/Header.jsx'
import { Footer } from './../partials/Footer.jsx'
import { TaskList } from './../components/TaskList.jsx'
import { TaskForm } from './../components/TaskForm.jsx'

export const Show = () => {
    const [tasks, setTasks] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const handleButtonClick = () => {
        setFormVisible(!isFormVisible);
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.BASE_URL + 'src/database/tasks.json');
                const data = await response.json();
                setTasks(data);
                console.log('Tasks updated:', tasks);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])

    const handleTaskComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        )
    }

    const handleTaskDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    const handleTaskAdd = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    }

    return (
        <>
        
            <Header/>
            <VStack bg="#9A71C9" h='max-content' p='10rem'>

                <Box bg='#FFFFFF' p='2rem' borderRadius='1rem'>
                    <Box display='flex' flexDirection='row' w='100%'>
                        <Box w='50%' display='flex' justifyContent='center' p='1rem'>
                            <i class="fa-solid fa-list"></i>
                        </Box>
                        <Divider h='4rem' orientation='vertical'></Divider> 
                        <Box w='50%' display='flex' justifyContent='center' p='1rem'>
                            <i class="fa-regular fa-calendar-check"></i>
                        </Box>
                    </Box>
                    <Divider></Divider>
                    <Center>
                    <TaskList
                        tasks={tasks}
                        onTaskComplete={handleTaskComplete}
                        onTaskDelete={handleTaskDelete}
                    />
                    </Center>
                    {isFormVisible && (
                        <Center>
                    <Box display='flex' justifyContent='center' alignItems='center' textAlign='center'>
                        <TaskForm onTaskAdd={handleTaskAdd} /> 
                    </Box>
                    </Center>
                )}

                </Box>
                <Button colorScheme='green' borderRadius='3rem'width='50px' height='50px' p='20px' textAlign='center' fontSize='3rem' position='absolute' bottom='190px' onClick={handleButtonClick}>
                            <i class="fa-solid fa-plus"></i>
                </Button>
            </VStack>
            <Footer/>
        </>
    )
}