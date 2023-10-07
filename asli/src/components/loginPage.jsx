import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setData } from '../redux/userSlice';
import { useRef } from 'react';

const schema = yup.object().shape({
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
});

export default function SimpleCard() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [error, setError] = React.useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const refEmail = useRef();
  const refPass = useRef();

  const handleLogin = async () => {


    
    try {
      const data = {email: refEmail.current.value, password: refPass.current.value}
      const response = await axios.get(
        `http://localhost:2000/users?email=${data.email}&password=${data.password}`
      );

      console.log(response);
      console.log(refEmail.current.value);
      console.log(refPass.current.value);

  
      if (response.data[0]?.id) {
        dispatch(setData(response.data[0]));
        localStorage.setItem("id", response.data[0].id);
        navigate("/chattwit");

      } else {
        alert("Akun Tidak ditemukan");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>LOGIN WOY...!!!</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Please log in to continue.
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                ref={refEmail}
                value={formValues.email}
                onChange={handleChange}
                isInvalid={errors.email}
              />
              {errors.email && <Text color="red">{errors.email}</Text>}
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                ref={refPass}
                value={formValues.password}
                onChange={handleChange}
                isInvalid={errors.password}
              />
              {errors.password && <Text color="red">{errors.password}</Text>}
            </FormControl>
            {error && <Text color="red">{error}</Text>}
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleLogin}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
