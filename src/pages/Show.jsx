import { useState, useEffect } from 'react'
import { HStack, Box, Text, Button, Center, Tabs, Tab, TabPanels, TabPanel, TabList } from '@chakra-ui/react'
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
            <Header />
            <HStack justifyContent='center'>
                <Tabs variant='enclosed' w='30rem' bg='white' borderRadius={'1rem'}>
                    <TabList>
                        <Tab w='50%' borderRadius={'1rem'}>
                            <Box display='flex' justifyContent='center' p='1rem'>
                                <i className="fa-solid fa-list"></i>
                            </Box>
                        </Tab>
                        <Tab w='50%' borderRadius={'1rem'}>
                            <Box display='flex' justifyContent='center' p='1rem'>
                                <i className="fa-regular fa-calendar-check"></i>
                            </Box>
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Center>
                                <TaskList
                                    tasks={tasks}
                                    onTaskComplete={handleTaskComplete}
                                    onTaskDelete={handleTaskDelete}
                                />
                            </Center>
                            {isFormVisible &&
                                <Center>
                                    <Box display='flex' justifyContent='center' alignItems='center' textAlign='center'>
                                        <TaskForm onTaskAdd={handleTaskAdd} />
                                    </Box>
                                </Center>
                            }
                        </TabPanel>
                        <TabPanel>
                            <Center>
                                <TaskList
                                    tasks={tasks}
                                    onTaskComplete={handleTaskComplete}
                                    onTaskDelete={handleTaskDelete}
                                />
                            </Center>                            
                        </TabPanel>
                    <Button colorScheme='green' borderRadius='3rem'width='50px' height='50px' p='20px' textAlign='center' fontSize='3rem' position='absolute' bottom='190px' onClick={handleButtonClick}>
                            <i className="fa-solid fa-plus"></i>
                    </Button>                   
                    </TabPanels>
                </Tabs>
            </HStack>
            <Footer />
        </>
    )
}