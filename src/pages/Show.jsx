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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

import { TaskList } from "./../components/TaskList.jsx";
import { TaskForm } from "./../components/TaskForm.jsx";

export const Show = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(true);

  const handleButtonClick = () => {
    setFormVisible(!isFormVisible);
  };
  useEffect(() => {
    const fetchData = () => {
      let localStorageTasks = localStorage.getItem("tasks");
      if (localStorageTasks) {
        let arraytasks = Array.from(JSON.parse(localStorageTasks));
        setTasks(arraytasks);
      }
    };
    fetchData();
  }, []);

  const taskCompleted = tasks.filter((task) => task.completed == true);

  const handleTaskComplete = (taskId) => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      let tasksArray = JSON.parse(storedTasks);
      tasksArray = tasksArray.map((task) => {
        if (task.id == taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
      setTasks(tasksArray);
      localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }
  };

  const handleTaskDelete = (taskId) => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      let tasksArray = JSON.parse(storedTasks);
      tasksArray = tasksArray.filter((task) => task.id !== taskId);
      setTasks(tasksArray);
      localStorage.setItem("tasks", JSON.stringify(tasksArray));
    }
  };

  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("tasks") || "[]"),
        newTask,
      ])
    );
  };

  const handleTabChange = () => {
    setActiveTab(!activeTab);
  };

  return (
    <HStack justifyContent='center'>
      <Tabs variant='enclosed' w='25rem' bg='white' borderRadius={"1rem"}>
        <TabList>
          <Tab
            w='50%'
            borderTopLeftRadius='1rem'
            bg={!activeTab ? "purple.50" : "white"}
            color={!activeTab ? "purple" : "#D6BCFA"}
            onClick={handleTabChange}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
              borderColor: "#bec3c9",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}>
            <Box display='flex' justifyContent='center' p='.5rem'>
              <Text fontSize='2rem'>
                <i className='fa-solid fa-list'></i>
              </Text>
            </Box>
          </Tab>
          <Tab
            w='50%'
            borderTopRightRadius='1rem'
            bg={activeTab ? "purple.50" : "white"}
            color={activeTab ? "purple" : "#D6BCFA"}
            onClick={handleTabChange}
            _active={{
              bg: "#dddfe2",
              transform: "scale(0.98)",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}>
            <Box display='flex' justifyContent='center' p='.5rem'>
              <Text fontSize='2rem'>
                <i className='fa-regular fa-calendar-check'></i>
              </Text>
            </Box>
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel minH={"30rem"} overflowY='auto' maxHeight='350px'>
            <Center marginBottom={isFormVisible ? "4rem" : "1rem"}>
              <TaskList
                tasks={tasks}
                onTaskComplete={handleTaskComplete}
                onTaskDelete={handleTaskDelete}
              />
            </Center>
          </TabPanel>
          <TabPanel minH={"30rem"}>
            <Center marginBottom={isFormVisible ? "4rem" : "1rem"}>
              <TaskList tasks={taskCompleted} onTaskDelete={handleTaskDelete} />
            </Center>
          </TabPanel>
          <Box
            display='flex'
            justifyContent='center'
            position='relative'
            minH='3rem'>
            {isFormVisible && (
              <Center position='absolute' bottom={"4rem"}>
                <Box
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  textAlign='center'>
                  <TaskForm onTaskAdd={handleTaskAdd} />
                </Box>
              </Center>
            )}
            <Button
              colorScheme={isFormVisible ? "red" : "green"}
              borderRadius='3rem'
              position='absolute'
              width='6rem'
              height='6rem'
              p='2rem'
              textAlign='center'
              fontSize='2.4rem'
              onClick={handleButtonClick}>
              {isFormVisible ? (
                <i className='fa-solid fa-minus'></i>
              ) : (
                <i className='fa-solid fa-plus'></i>
              )}
            </Button>
          </Box>
        </TabPanels>
      </Tabs>
    </HStack>
  );
};
