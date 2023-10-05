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

const schema = yup.object().shape({
  email: yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: yup.string().required('Password wajib diisi'),
});

export default function SimpleCard() {
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

  const handleLogin = async () => {
    try {
      await schema.validate(formValues, { abortEarly: false });
        
      if (formValues.email === 'contoh@gmail.com' && formValues.password === 'password') {
        
        navigate('/chattwit');
      } else {
        
        setError('Email atau password salah. Silakan coba lagi.');
      }
    } catch (validationErrors) {
      const validationErrorMap = {};
      validationErrors.inner.forEach((error) => {
        validationErrorMap[error.path] = error.message;
      });
      setErrors(validationErrorMap);
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
          <Heading fontSize={'4xl'}>BU4T 4K03N MO3</Heading>
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
