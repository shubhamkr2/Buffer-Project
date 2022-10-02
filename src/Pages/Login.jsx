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
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const { userData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let user = JSON.parse(localStorage.getItem("registeredUser")) || 0;

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function handleLogin(e) {
    e.preventDefault();
    user.map((item) => {
      if (item.Email === email && item.Password === password) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 1500);
      }
    });
  }

  return (
    <HStack>
      <Stack w="720px" p="45px">
        <NavLink to="/">
          <Image
            w="112px"
            h="28px"
            mb="35px"
            src="https://static.buffer.com/login/public/img/buffer-logo.svg"
            alt="Buffer Logo"
          />
        </NavLink>
        <Heading as="h4" size="lg" color="#3d3d3d" pb="20px">
          Log in
        </Heading>
        <FormControl onSubmit={handleLogin}>
          <FormLabel>Email Address</FormLabel>
          <Input onChange={handleEmail} h="50px" />
        </FormControl>
        <FormControl>
          <FormLabel mt="10px">Password</FormLabel>
          <Input onChange={handlePassword} h="50px" mb="10px" />
          {password.length === 1 ||
          password.length === 2 ||
          password.length === 3 ? (
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
          Log in
        </Button>
        <Flex justify="space-between">
          <Link to="/signup">Create an account</Link>
          <Link>Forgot your password</Link>
        </Flex>
        <Text pt="35px" fontSize="sm" noOfLines={2} align="center">
          We no longer support social sign on. Please click here to set your
          password and access your account.
        </Text>
        <Box>
          <Flex mt="65px" mb="0px" gap="20px">
            <Link>Terms of Service</Link>
            <Link>
              <li>Privacy Policy</li>
            </Link>
            <Link>
              <li>Security</li>
            </Link>
          </Flex>
        </Box>
      </Stack>
      <Stack bg="#fade2a">
        <Box pl="100px">
          <Box w="430px" mt="65px">
            <Button borderRadius="20px" p="12px" h="20px" bg="white">
              New from Buffer
            </Button>
            <Heading as="h3" size="xl" pb="20px" mt="20px">
              Introducing: A free micro-site by Buffer
            </Heading>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="#747e37"
              mb="-80px"
            >
              A Start Page is a beautiful, flexible, mobile-friendly landing
              page that you can build in minutes and update in seconds
            </Text>
          </Box>
          <NavLink to="/">
            {" "}
            <Image
              src="https://login.buffer.com/img/sp-login-image.png"
              w="90%"
              ml="10%"
              alt="banner"
            />
          </NavLink>
        </Box>
      </Stack>
    </HStack>
  );
};
export default Login;
