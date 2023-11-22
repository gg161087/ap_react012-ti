import { useState, useEffect } from "react";
import {
    HStack,
    Box,
    Text,
    Button,
    Center,
    Tabs,
    Tab,
    TabPanels,
    TabPanel,
    TabList,
} from "@chakra-ui/react";

import { TaskList } from "./../components/TaskList.jsx";
import { TaskForm } from "./../components/TaskForm.jsx";

export const Show = () => {

    const [tasks, setTasks] = useState([]);
    const [isFormVisible, setFormVisible] = useState(false);
    const [activeTab, setActiveTab] = useState(true)

    const handleButtonClick = () => {
        setFormVisible(!isFormVisible);
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("database/tasks.json");
                const data = await response.json();
                setTasks(data);
                console.log("Tasks updated:", tasks);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const taskCompleted = tasks.filter((task) => task.completed == true);

    const handleTaskComplete = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleTaskDelete = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleTaskAdd = (newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleTabChange = () => {
        setActiveTab(!activeTab)
    }

    return (
        <HStack justifyContent='center'>        
            <Tabs variant='enclosed' w='25rem' bg='white' borderRadius={"1rem"}>
                <TabList>
                    <Tab 
                        w='50%' 
                        borderTopLeftRadius='1rem'
                        bg={!activeTab? 'gray.200' : 'white'} 
                        color={!activeTab? 'gray.400' : '#B484C7'}
                        onClick={handleTabChange}
                    >
                        <Box display='flex' justifyContent='center' p='.5rem'>
                            <Text fontSize='2rem'>
                                <i className='fa-solid fa-list'></i>
                            </Text>
                        </Box>
                    </Tab>
                    <Tab 
                        w='50%' 
                        borderTopRightRadius='1rem'
                        bg={activeTab? 'gray.200' : 'white'}
                        color={activeTab? 'gray.400' : '#B484C7'} 
                        onClick={handleTabChange}              
                    >
                        <Box display='flex' justifyContent='center' p='.5rem'>
                            <Text fontSize='2rem'>
                                <i className='fa-regular fa-calendar-check'></i>
                            </Text>
                        </Box>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel minH={'30rem'}>
                        <Center>
                            <TaskList
                                tasks={tasks}
                                onTaskComplete={handleTaskComplete}
                                onTaskDelete={handleTaskDelete}
                            />
                        </Center>
                        {isFormVisible && (
                            <Center>
                                <Box
                                    display='flex'
                                    justifyContent='center'
                                    alignItems='center'
                                    textAlign='center'>
                                    <TaskForm onTaskAdd={handleTaskAdd} />
                                </Box>
                            </Center>
                        )}
                    </TabPanel>
                    <TabPanel minH={'30rem'}>
                        <Center>
                            <TaskList tasks={taskCompleted} onTaskDelete={handleTaskDelete} />
                        </Center>
                    </TabPanel>
                    <Box
                        display='flex'
                        justifyContent='center'
                        position='relative'
                        minH='3rem'>
                        <Button
                            colorScheme='orange'
                            borderRadius='3rem'
                            position='absolute'
                            width='6rem'
                            height='6rem'
                            p='2rem'
                            textAlign='center'
                            fontSize='2.4rem'
                            onClick={handleButtonClick}>
                            <i className='fa-solid fa-plus'></i>
                        </Button>
                    </Box>
                </TabPanels>
            </Tabs>
        </HStack>
    );
};
