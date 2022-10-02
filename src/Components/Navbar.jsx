import {
  Button,
  HStack,
  Image,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import Pricing from "../Pages/Pricing";

const Navbar = () => {
  return (
    <HStack
      // border="1px solid red"
      w="100%"
      p="40px"
      h="100px"
      align=""
      justify="space-between"
    >
      <NavLink to="/">
        <Image
          w="112px"
          h="28px"
          mb="35px"
          src="https://static.buffer.com/login/public/img/buffer-logo.svg"
          alt="Buffer Logo"
        />
      </NavLink>
      <HStack
        fontWeight="medium"
        fontSize="xl"
        justify="space-between"
        // border="1px solid blue"
        w="900px"
        p="10px"
      >
        {/* <NavLink rightIcon={<ChevronDownIcon />} to="">Tools</NavLink> */}
        <Menu>
          <MenuButton
            fontWeight="medium"
            fontSize="xl"
            as={Button}
            border="none"
            bg="white"
            rightIcon={<ChevronDownIcon />}
          >
            Tools
          </MenuButton>
          <MenuList rowGap={12}>
            <MenuItem fontWeight="medium" fontSize="xl">
              Publishing
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Analytics
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Engagement
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Start Page
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <NavLink to="">Channels</NavLink> */}
        <Menu>
          <MenuButton
            fontWeight="medium"
            fontSize="xl"
            as={Button}
            border="none"
            bg="white"
            rightIcon={<ChevronDownIcon />}
          >
            Channels
          </MenuButton>
          <MenuList>
            <MenuItem fontWeight="medium" fontSize="xl">
              Facebook
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Google Business Profile
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Instagram
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Linkedin
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Pinterest
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Linkedin
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Shopyify
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Tik Tok
            </MenuItem>
            <MenuItem fontWeight="medium" fontSize="xl">
              Twitter
            </MenuItem>
          </MenuList>
        </Menu>
        <NavLink _hover={{ underline: "blue" }} to="/pricing">
          Pricing
        </NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </HStack>
      <HStack justify="space-between" fontWeight="medium" fontSize="xl">
        <NavLink style={{ color: "blue" }} to="/login">
          Log in
        </NavLink>
        <NavLink to="/signup">
          <Button
            bg="#2c4bff"
            _hover={{ backgroundColor: "blue" }}
            color="white"
            h="50px"
            fontSize="xl"
            p="20px"
          >
            Get started now
          </Button>
        </NavLink>
      </HStack>
    </HStack>
  );
};
export default Navbar;
