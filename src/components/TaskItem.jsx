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
                justifyContent='space-between'
                alignItems='stretch'      
                minW={"100%"}
                minH={".5rem"}
                >
                <Button onClick={handleComplete} bg='none'>
                    {isCompleted ? (
                        <Box 
                            border={'.1rem solid gray'}
                            borderRadius={'.6rem'}                              
                            width={'1.7rem'}
                            height={'1.7rem'}
                            position='relative'
                        >
                            <Text  
                                color='#B484C7' 
                                fontSize='1.7rem' 
                                position='absolute'
                                bottom={0}
                                left={1}
                            >
                                <i class="fa-solid fa-check"></i>                            
                            </Text>                   
                        </Box>
                    ) : (
                        <Box
                            border={'.1rem solid gray'}
                            borderRadius={'.6rem'}                              
                            width={'1.7rem'}
                            height={'1.7rem'}
                            position='relative'
                        >                          
                        </Box>
                    )}
                    <Text
                        color={isCompleted? 'gray.400' : 'black'}
                        textDecoration={isCompleted ? "line-through" : "none"}
                        fontSize='xl'
                        marginLeft='1rem'>
                        {task.name}
                    </Text>
                </Button>
                <Box
                    as='button'
                    _hover={{ color: "red" }}
                    _active={{ transform: "scale(0.98)" }}
                    _focus={{ boxShadow: "outline" }}
                    marginRight='1rem'
                >
                    <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
                </Box>
            </Box>
        </Center>
    );
};
