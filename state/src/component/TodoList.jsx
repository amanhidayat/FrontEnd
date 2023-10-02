import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import {
  Box,
  Input,
  Button,
  Heading,
  List,
  ListItem,
  Checkbox,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function TodoList() {
  const tasks = useSelector((state) => state.tasks); // Get tasks from the Redux store
  const dispatch = useDispatch(); // Get the dispatch function

  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      dispatch({ type: 'ADD_TASK', payload: { text: taskText, completed: false } }); // Dispatch ADD_TASK action
      setTaskText('');
    }
  };

  const deleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index }); // Dispatch DELETE_TASK action
  };

  const toggleTask = (index) => {
    dispatch({ type: 'TOGGLE_TASK', payload: index }); // Dispatch TOGGLE_TASK action
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <Box p={4}>
      <Heading mb={4}>To-Do List</Heading>
      <Flex mb={4}>
        <Input
          type="text"
          placeholder="Add a task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <Button ml={2} onClick={addTask} colorScheme="teal">
          Add
        </Button>
      </Flex>
      <List spacing={2}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <Checkbox
              isChecked={task.completed}
              onChange={() => toggleTask(index)}
            >
              {task.text}
            </Checkbox>
            <IconButton
              ml={2}
              icon={<DeleteIcon />}
              colorScheme="red"
              onClick={() => deleteTask(index)}
            />
          </ListItem>
        ))}
      </List>
      <Box mt={4}>
        <strong>
          Total Tasks: {tasks.length} | Completed Tasks: {completedTasksCount}
        </strong>
      </Box>
    </Box>
  );
}

export default TodoList;
