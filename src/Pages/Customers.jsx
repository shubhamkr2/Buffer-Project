import { ArrowForwardIcon } from "@chakra-ui/icons";
import { HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Customers = () => {
  return (
    <>
      <Navbar />
      <VStack rowGap={5}>
        <Text
          color="#2c4bff"
          fontSize="18px"
          fontWeight="bold"
          pt="50px"
          pb="10px"
        >
          YOU'RE IN GOOD COMPANY
        </Text>
        <Text fontSize="44px" fontWeight="bold" pb="18px">
          Featured Customers
        </Text>
        <Text fontSize="18px" pb="55px">
          See how big brands and growing businesses find social media success
          with Buffer
        </Text>

        {/* 1st card */}
        <Stack border="6px solid #6e8aff" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="300px"
            h="40px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/campaign-monitor/campaign-monitor-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Buffer helps us measure what networks, and what content, is
              working best for us."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/campaign-monitor/aaron-beashel.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Aaron Beashel
            </Text>
          </HStack>
        </Stack>

        {/* 2nd card */}
        <Stack border="6px solid #f35a3a" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="100px"
            h="40px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/fortune/fortune-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Buffer solved our problem. We don’t post in clusters anymore.
              We’ve been very happy with it."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/fortune/heather-muse.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Heather Muse
            </Text>
          </HStack>
        </Stack>

        {/* 3rd card */}
        <Stack border="6px solid #fdbe54" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="100px"
            h="60px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/denver-broncos/denver-broncos-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Buffer allows everyone on our media team to contribute content
              and approval on everything that goes out."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/denver-broncos/ben-hunt.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Ben Hunt
            </Text>
          </HStack>
        </Stack>

        {/* 4th card */}
        <Stack border="6px solid #9462ff" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="200px"
            h="40px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/seattle-times/seattle-times-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Since we’ve signed up with Buffer, we’ve had a 150% increase in
              page views from social media."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/seattle-times/andrew-macrae.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Andrew Macrae
            </Text>
          </HStack>
        </Stack>

        {/* 5th card */}
        <Stack border="6px solid #e2394d" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="110px"
            h="70px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/about/about-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "We’re seeing really good growth, and Buffer allows us to do that
              at scale more quickly."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/about/matthew-knell.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Matthew Knell
            </Text>
          </HStack>
        </Stack>

        {/* 6th card */}
        <Stack border="6px solid #5adce0" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="110px"
            h="80px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/foster-coffee-company/foster-coffee-company-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Buffer enables us to plan, schedule and deliver our content in a
              consistent, yet flexible way"
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/foster-coffee-company/nicholas-pidek.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Nicholas Pidek
            </Text>
          </HStack>
        </Stack>

        {/* 7th card */}
        <Stack border="6px solid #6d90ff" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="110px"
            h="80px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/car-next-door/car-next-door-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Social was so time-consuming. Buffer made it easy to set and
              forget our publishing schedule."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/car-next-door/shannon-barker.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Shannon Barker
            </Text>
          </HStack>
        </Stack>

        {/* 8th card */}
        <Stack border="6px solid #fdb34f" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="200px"
            h="60px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/marketeering-group/marketeering-group-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "We run 350+ social profiles for our clients. I don’t even think
              what we do would be possible without Buffer."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/marketeering-group/jessica-dringman.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Jessica Dringman
            </Text>
          </HStack>
        </Stack>

        {/* 9th card */}
        <Stack border="6px solid #0ecbd2" w="65%" align="center" p="60px">
          <Image
            m="auto"
            w="200px"
            h="40px"
            mb="30px"
            src="https://buffer.com/static/caseStudies/social-hire/social-hire-logo.svg"
            alt="campaign"
          />
          <Stack
            textAlign="center"
            fontSize="27px"
            w="85%"
            ml="50px"
            lineHeight={1.8}
          >
            <Text>
              "Buffer is an essential tool in our business. I shudder to think
              what life would be like without it."
            </Text>
          </Stack>
          <NavLink
            style={{
              color: "blue",
              fontSize: "19px",
              marginTop: "40px",
              marginBottom: "25px",
            }}
            to=""
          >
            Read The Case Study {<ArrowForwardIcon />}
          </NavLink>
          <HStack spacing={4}>
            <Image
              w="60px"
              src="https://buffer.com/static/caseStudies/social-hire/tony-restell.svg"
              alt=""
            />
            <Text color="#989898" fontSize="18px">
              Tony Restell
            </Text>
          </HStack>
        </Stack>
      </VStack>

      <Footer />
    </>
  );
};
export default Customers;
