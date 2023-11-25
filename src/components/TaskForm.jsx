import { useState } from "react";
import { useToast, Box, Button, Input } from "@chakra-ui/react";
import { CheckIcon, WarningIcon } from "@chakra-ui/icons";

export const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState("");
  const toast = useToast();
  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      onTaskAdd({ id: Date.now(), name: taskName, completed: false });
      setTaskName("");
      toast({
        position: "top-right",
        render: () => (
          <Box color='white' p={5} bg='green.500' fontSize='xl'>
            <CheckIcon mr={2} boxSize={6} /> Task Created Successfully!
          </Box>
        ),
        duration: 2000,
        isClosable: true,
        variant: "subtle",
      });
    } else {
      toast({
        position: "top-right",
        render: () => (
          <Box color='white' p={5} bg='red.500' fontSize='xl'>
            <WarningIcon mr={2} boxSize={6} /> Task name cannot be empty!
          </Box>
        ),
        duration: 2000,
        isClosable: true,
        variant: "subtle",
      });
    }
  };

  return (
    <Box
      position='absolute'
      bottom='0px'
      pb={5}
      backgroundColor='white'
      width='225px'>
      <form onSubmit={handleFormSubmit}>
        <Input
          type='text'
          value={taskName}
          onChange={handleInputChange}
          variant='outline'
          placeholder='Add your task'
          width='10rem'
          marginRight={"1rem"}
          maxLength={20} //! limite de 20 caracteres por tarea
        />
        <Button type='submit' colorScheme='teal' variant='solid'>
          Add Task
        </Button>
      </form>
    </Box>
  );
};
