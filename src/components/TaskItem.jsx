import { useState, useEffect } from "react";
import { Text, Box, Button, Center } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  console.log(task);

  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    setIsCompleted(task.completed);
  }, []);

  const handleComplete = () => {
    setIsCompleted(!isCompleted);
    onTaskComplete(task.id);
  };

  const handleDelete = () => {
    onTaskDelete(task.id);
  };

  return (
    <Center>
      <Box
        display='flex'
        flexDirection='row'
        p='0 1rem'
        minW={"30rem"}
        justifyContent='space-between'>
        <Button onClick={handleComplete} bg='none'>
          <Text color='#B484C7'>
            {isCompleted ? (
              <i className='fa-regular fa-square-check'></i>
            ) : (
              <i className='fa-regular fa-square'></i>
            )}
          </Text>
          <Text textDecoration={isCompleted ? "line-through" : "none"}>
            {task.name}
          </Text>
        </Button>
        <Box
          as='button'
          _hover={{ color: "red" }}
          _active={{ transform: "scale(0.98)" }}
          _focus={{ boxShadow: "outline" }}>
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
        </Box>
      </Box>
    </Center>
  );
};
