import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Flex,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  HStack,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const initialData = {
  Email: "",
  Password: "",
};

const SignUp = () => {
  const [regUserData, setRegUserData] = useState(initialData);
  const { userData, setUserData } = useContext(AuthContext);
  const [error, setError] = useState(true);
  const [success, setSuccess] = useState(false);

  const handlechange = (e) => {
    const { name: key, value } = e.target;
    setRegUserData({
      ...regUserData,
      [key]: value,
    });

    if (regUserData.Email.length <= 1 || regUserData.Password.length <= 3) {
      setError(true);
    } else {
      setError(false);
    }
  };
  function handleregister(e) {
    e.preventDefault();
    setUserData([...userData, regUserData]);
    localStorage.setItem("registeredUser", JSON.stringify(userData));
    setRegUserData(initialData);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      // <Redirect to="/login" />
    }, 1500);
  }

  return (
    <HStack>
      <Stack w="1000px" pl="45px" mt="-120px" pr="350px">
        <NavLink to="/">
          <Image
            w="112px"
            h="28px"
            mb="35px"
            src="https://static.buffer.com/login/public/img/buffer-logo.svg"
            alt="Buffer Logo"
          />
        </NavLink>
        <Stack ml="100px" pt="50px" pl="250px" w="750px" m="auto">
          <Heading as="h4" size="lg" color="#3d3d3d" pb="20px">
            Let's get your account set up
          </Heading>
          <FormControl onSubmit={handleregister}>
            <FormLabel>Email Address</FormLabel>
            <Input
              onChange={handlechange}
              value={regUserData.Email}
              name="Email"
              placeholder="Enter Email"
              h="50px"
            />
          </FormControl>
          <FormControl>
            <FormLabel mt="10px">Password</FormLabel>
            <Input
              onChange={handlechange}
              value={regUserData.Password}
              name="Password"
              h="50px"
              mb="10px"
            />
            {regUserData.Password.length === 1 ||
            regUserData.Password.length === 2 ||
            regUserData.Password.length === 3 ? (
              <Alert status="error">
                <AlertIcon />
                Must be more than 3 characters
              </Alert>
            ) : (
              ""
            )}
          </FormControl>
          <Button
            _hover={{ backgroundColor: "blue" }}
            bg="#2c4bff"
            color="white"
            h="50px"
            type="submit"
          >
            Sign up
          </Button>
          <Flex justify="space-between">
            <Link>I agree to Buffer's Terms of Service</Link>
            <Link to="/login">Already have an account?</Link>
          </Flex>
        </Stack>
      </Stack>
      <Stack
        bg="#6b81ff"
        w="100%"
        h="auto"
        align="center"
        pt="125px"
        pb="125px"
      >
        <Box w="220px" align="center">
          <Text color="white" fontSize="lg" fontWeight="semibold" noOfLines={5}>
            “With Buffer I can build social content out as far as I want into
            the future but also tailor campaigns if we see certain trends within
            the industry.”
          </Text>
          <Image
            mt="50px"
            src="https://static.buffer.com/login/public/img/signup-avatar-publish.png"
            alt="profile"
          />
          <Text color="white">Justin Ozanich</Text>
          <Text color="white">Marketing Manager</Text>
          <Text color="white">Marketing Manager Foster Coffee Company</Text>
        </Box>
      </Stack>
    </HStack>
  );
};
export default SignUp;
