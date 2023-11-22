import { useState, useEffect } from "react";
import {
  HStack,
  Box,
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

  return (
    <HStack justifyContent='center'>
      <Tabs variant='enclosed' w='30rem' bg='white' borderRadius={"1rem"}>
        <TabList>
          <Tab w='50%' borderTopLeftRadius='1rem'>
            <Box display='flex' justifyContent='center' p='1rem'>
              <i className='fa-solid fa-list'></i>
            </Box>
          </Tab>
          <Tab w='50%' borderTopRightRadius='1rem'>
            <Box display='flex' justifyContent='center' p='1rem'>
              <i className='fa-regular fa-calendar-check'></i>
            </Box>
          </Tab>
        </TabList>
        <TabPanels >
          <TabPanel>
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
          <TabPanel>
            <Center>
              <TaskList tasks={taskCompleted} onTaskDelete={handleTaskDelete} />
            </Center>
          </TabPanel>
          <Box
            display='flex'
            justifyContent='center'
            position='relative'
            minH='2.5rem'>
            <Button
              colorScheme='green'
              borderRadius='3rem'
              position='absolute'
              width='50px'
              height='50px'
              p='20px'
              textAlign='center'
              fontSize='3rem'
              onClick={handleButtonClick}>
              <i className='fa-solid fa-plus'></i>
            </Button>
          </Box>
        </TabPanels>
      </Tabs>
    </HStack>
  );
};
