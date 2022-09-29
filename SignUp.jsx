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
  Center,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <HStack>
      <Stack w="1000px" pl="45px" mt="-120px" pr="350px">
        <Image
          w="112px"
          h="28px"
          mb="35px"
          src="https://static.buffer.com/login/public/img/buffer-logo.svg"
          alt="Buffer Logo"
        />
        <Stack ml="100px" pt="50px" pl="250px" w="750px" m="auto">
          <Heading as="h4" size="lg" color="#3d3d3d" pb="20px">
            Let's get your account set up
          </Heading>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input h="50px" />
          </FormControl>
          <FormControl>
            <FormLabel mt="10px">Password</FormLabel>
            <Input h="50px" mb="10px" />
          </FormControl>
          <Button bg="#2c4bff" color="white" h="50px" type="submit">
            Sign up
          </Button>
          <Flex justify="space-between">
            <Link>I agree to Buffer's Terms of Service</Link>
            <Link>Already have an account?</Link>
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
