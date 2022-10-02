import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HStack p={32} spacing="25px">
        <Stack w="650px" p="20px">
          <Text fontSize="5xl" fontWeight="bold" lineHeight="1">
            Grow your audience on social and beyond
          </Text>
          <Text fontSize="lg" pt="40px">
            Buffer helps you build an audience organically. We’re a
            values-driven company that provides affordable, intuitive, marketing
            tools for ambitious people and teams.
          </Text>
          <HStack gap="16px" pt="40px">
            <NavLink to="/signup">
              <Button
                bg="#2c4bff"
                _hover={{ backgroundColor: "blue" }}
                fontSize="18px"
                w="180px"
                h="50px"
                color="white"
              >
                Get started now
              </Button>
            </NavLink>
            <Button
              bg="white"
              fontSize="20px"
              w="180px"
              h="50px"
              border="1px solid blue"
              color="blue"
            >
              Watch video
            </Button>
          </HStack>
        </Stack>
        <Stack>
          <Image
            w="650px"
            src="https://buffer.com/static/illustrations/all-channels-3.webp"
            alt="ad"
          />
        </Stack>
      </HStack>

      <HStack justify="center" fontSize="4xl" gap="70px" color="gray">
        <Text fontWeight="bold">Huckberry</Text>
        <Text>FOOD52</Text>
        <Text as="ins" fontWeight="medium">
          The Sill
        </Text>
        <Text fontWeight="medium">BURROW</Text>
        <Text fontWeight="semibold">Happy Socks</Text>
        <Text as="samp">DressUp</Text>
      </HStack>
      <Stack justify="center" align="center" mt="220px">
        <Text fontSize="4xl" lineHeight="5" fontWeight="bold">
          Be where your customers are
        </Text>
        <Stack pt="50px" w="600px" fontSize="lg">
          <Text justify="center" align="center" lineHeight={2}>
            People spend, on average, almost 2.5 hours on social media every
            day. ​​Let them find your brand more easily through these four
            simple steps:
          </Text>
        </Stack>
      </Stack>

      <HStack p={32} spacing="25px" pt="25px">
        <Stack w="650px" p="20px">
          <Text fontSize="19px" pb="30px" color="blue">
            1. ANALYZE
          </Text>
          <Text fontSize="4xl" fontWeight="bold" lineHeight="1">
            Measure your social media performance in a few clicks
          </Text>
          <Text fontSize="lg" pt="30px">
            See what’s working and deliver high engagement content.
          </Text>
          <HStack gap="16px" pt="10px">
            <NavLink to="/signup">
              <Button
                bg="#2c4bff"
                _hover={{ backgroundColor: "blue" }}
                fontSize="18px"
                w="180px"
                h="50px"
                color="white"
              >
                Get started now
              </Button>
            </NavLink>
            <Button
              bg="white"
              fontSize="20px"
              w="180px"
              h="50px"
              border="1px solid blue"
              color="blue"
            >
              Learn more
            </Button>
          </HStack>
        </Stack>
        <Stack>
          <Image
            w="550px"
            src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"
            alt="offer"
          />
        </Stack>
      </HStack>

      <HStack p={32} spacing="210px" pt="25px">
        <Stack>
          <Image
            w="550px"
            src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"
            alt="offer"
          />
        </Stack>
        <Stack w="650px" p="20px">
          <Text fontSize="19px" pb="30px" color="blue">
            2. PLAN AND PUBLISH YOUR CONTENT
          </Text>
          <Text fontSize="4xl" fontWeight="bold" lineHeight="1">
            Collaborate and plan your campaigns
          </Text>
          <Text fontSize="lg" pt="30px">
            Schedule your posts in advance so you can focus on other things.
          </Text>
          <HStack gap="16px" pt="10px">
            <NavLink to="/signup">
              <Button
                bg="#2c4bff"
                _hover={{ backgroundColor: "blue" }}
                fontSize="18px"
                w="180px"
                h="50px"
                color="white"
              >
                Get started now
              </Button>
            </NavLink>
            <Button
              bg="white"
              fontSize="20px"
              w="180px"
              h="50px"
              border="1px solid blue"
              color="blue"
            >
              Learn more
            </Button>
          </HStack>
        </Stack>
      </HStack>

      <HStack p={40} spacing="55px" pt="25px">
        <Stack w="550px" p="20px">
          <Text fontSize="19px" pb="30px" color="blue">
            3. ENGAGE
          </Text>
          <Text fontSize="4xl" fontWeight="bold" lineHeight="1">
            Respond to comments twice as fast
          </Text>
          <Text fontSize="lg" pt="30px">
            Skip to important comments with the help of labels and hotkeys.
          </Text>
          <HStack gap="16px" pt="10px">
            <NavLink to="/signup">
              <Button
                bg="#2c4bff"
                _hover={{ backgroundColor: "blue" }}
                fontSize="18px"
                w="180px"
                h="50px"
                color="white"
              >
                Get started now
              </Button>
            </NavLink>
            <Button
              bg="white"
              fontSize="20px"
              w="180px"
              h="50px"
              border="1px solid blue"
              color="blue"
            >
              Learn more
            </Button>
          </HStack>
        </Stack>
        <Stack>
          <Image
            w="550px"
            src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"
            alt="offer"
          />
        </Stack>
      </HStack>
      <VStack>
        <Stack w="620px" p="20px">
          <Text
            fontSize="19px"
            pb="30px"
            color="blue"
            justify="center"
            align="center"
            mt="25px"
          >
            4. CELEBRATE
          </Text>
          <Text
            fontSize="4xl"
            fontWeight="bold"
            lineHeight="1.5"
            justify="center"
            align="center"
          >
            Businesses all over the world trust Buffer to build their brand
          </Text>
        </Stack>
      </VStack>

      <VStack mt="35px" pb="70px" borderBottom="3px solid #f0f0f0">
        <HStack spacing={44}>
          <Stack justify="center" align="center">
            <Text
              lineHeight={1}
              color="#2c4bff"
              fontWeight="bold"
              fontSize="50px"
            >
              10 years
            </Text>
            <Text fontSize="lg">in business</Text>
          </Stack>
          <Stack justify="center" align="center">
            <Text
              lineHeight={1}
              color="#2c4bff"
              fontWeight="bold"
              fontSize="50px"
            >
              140,000
            </Text>
            <Text fontSize="lg">users</Text>
          </Stack>
          <Stack justify="center" align="center">
            <Text
              lineHeight={1}
              color="#2c4bff"
              fontWeight="bold"
              fontSize="50px"
            >
              100k+
            </Text>
            <Text fontSize="lg">monthly blog readers</Text>
          </Stack>
          <Stack justify="center" align="center">
            <Text
              lineHeight={1}
              color="#2c4bff"
              fontWeight="bold"
              fontSize="50px"
            >
              1.2m+
            </Text>
            <Text fontSize="lg">social followers</Text>
          </Stack>
        </HStack>
      </VStack>

      <HStack p={32} spacing="210px" pt="155px">
        <Stack>
          <Image
            w="700px"
            src="https://static.buffer.com/cdn-cgi/image/w=640,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"
            alt="offer"
          />
        </Stack>
        <Stack w="650px" p="20px">
          <Text fontSize="4xl" fontWeight="bold" lineHeight="1">
            And we are here to help
          </Text>
          <Text fontSize="lg" pt="30px">
            Our customer advocates are standing by 24/7 to support you via email
            and social media. We also have a comprehensive, regularly updated
            help center for those who prefer to find help themselves.
          </Text>
          <HStack gap="16px" pt="10px">
            <Button
              bg="white"
              fontSize="20px"
              mt="25px"
              h="50px"
              border="1px solid blue"
              color="blue"
            >
              Visit our help center
            </Button>
          </HStack>
        </Stack>
      </HStack>

      <VStack>
        <Stack mb="20px">
          <Text fontSize="20px" fontWeight={"bold"}>
            An official marketing partner of the industry leaders
          </Text>
        </Stack>
        <HStack spacing="20">
          <Image
            w="89"
            h="50"
            src="https://buffer.com/static/ui/meta-business-partner@2x-2.png"
            alt="business"
          />
          <Image
            w="89"
            h="50"
            src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png"
            alt="partners"
          />
          <Image
            w="89"
            h="50"
            src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png"
            alt="linkedin"
          />
        </HStack>
      </VStack>

      <Stack mt="120px" pb="20px">
        <Image
          h="90%"
          src="https://lh3.googleusercontent.com/jmHItqPaFATrmL5_xvgGCX4kFX7rRcT-TUqghEQsreJjt7P9AN6FwSuoL1xzDsVNEMKO53A3NuOgAf-O6O0JbQvab7vzFMGBp8-gaGuBoD1_uu1DD65kwf7SYf2wKz8v9kIR8Q9PGdEf4r2towcnrVS4JRQ37ePtNM3INscrGMJUbpejrv7rlVt6NTc5D7xzBRTjSeoHbZsTj0q_E-r2S3f3oVLe0pPf4OBSrKledPRbKs79W_qUtUWUfsN-0FJFSocP12hHLHZZ-0DT-ebBoKM2gN2n0nvE4ddbP_Bcb6rjQdumIV3XLnBJLPxOY1AJTQqMuXzbl7NfNaqVEMygdxQ0acLUlqA2-xbAwg2aUuWytgtDC3hhs4-x3UofMUbSusQaFodB5Tj0-DEGsEAUZ83Y7BxYy53hXdPhu26f36aBE6nTdtdFIPPxjUYuYDtXC4F-PoLjmwbOkA2QWWEX5_BeZ5OujoUvNlG_NqjFTBdHc0OEN3kTFzp38JhSJ6jOgF3OcFMkAvm5Z-AH54GPnysbltK6iYd2e6Gv-Us4M7WiKabbz7dLe5EjGies_44mP6vRs3NYWN53J3FwCMnqqspnSkHiT8sGiU6l7P-P3tz_9E9Y9Xmj81i0vWaef4U1W_aZkZuo5nmSax77i5mVm62EV7qkDPEnDn7LdYTASz8FkWPDEH4_LDBLaaCHamglH8ETitpidtw_TqMsalbcdniO2xuPYbMKobLhrS_z4v1xw_k1hrAvuM9Jg7HtSqtl1Rpiw_nRtEteprWd0rQdcJc4l29ENmC1XGAJ_MAl0xI8o9BVeuPaTPGj_1Fqje-1JkXakMLFi7nb5eBLTrIxVoPeTO4oh7cnz1Hvrq2QyP-5_OxfvlDwRiSQOrDnSw8GMzhQcqpTmh43ubIFoFed9wAkFi1Ls6XKqkSyLC3f=w1348-h452-no?authuser=0"
          alt="banner"
        />
      </Stack>

      <Footer />
    </>
  );
};
export default HomePage;
