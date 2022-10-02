import {
  AccordionButton,
  Box,
  AccordionItem,
  AccordionPanel,
  Accordion,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  AccordionIcon,
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <VStack w="100%">
        <Stack p="70px" bg="#ee9dab" w="100%" align="center" justify="center">
          <Text fontWeight="extrabold" fontSize="42px" mb="35px">
            About us
          </Text>
          <Image
            w="57%"
            src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/team/buffer-group-photo.jpg"
            alt="group"
          />
        </Stack>
        <HStack
          w="100%"
          h="225px"
          bg="#f5f5f5"
          justify="center"
          spacing="250px"
        >
          <Stack align="center">
            <Text
              color="#87c228"
              fontWeight="extrabold"
              fontSize="7xl"
              lineHeight={0.8}
            >
              82
            </Text>
            <Text fontWeight="semibold" fontSize="30px">
              teammates
            </Text>
          </Stack>
          <Stack align="center">
            <Text
              color="#fad32a"
              fontWeight="extrabold"
              fontSize="7xl"
              lineHeight={0.8}
            >
              22
            </Text>
            <Text fontWeight="semibold" fontSize="30px">
              countries
            </Text>
          </Stack>
          <Stack align="center">
            <Text
              color="#e97284"
              fontWeight="extrabold"
              fontSize="7xl"
              lineHeight={0.8}
            >
              140,000+
            </Text>
            <Text fontWeight="semibold" fontSize="30px">
              users
            </Text>
          </Stack>
        </HStack>
        <Stack align="center" pt="120px">
          <Text fontWeight="bold" fontSize="32px" mb="35px">
            A few of the amazing brands who trust Buffer
          </Text>
          <Image
            w="85%"
            src="https://lh3.googleusercontent.com/vC_6Ia74UuAqyCZXdQ7-Jt-twf0E9oi5AQaGSOuPtfobYrS-dQ4LEFB1b3LIHlAMLJZWnyBmRiqwcXrFneKptwmYhie5bSstq5p_6CzL-Eo0uGX43CeUSMdzMqx8OqfvGyUuAp_H-qOAQsa_aNxKeztT221uhsZWkcr_LpnPRr0ypqWRf38aeoJN70TFOwPHEsOFj6YndjCUowfxVbhOpo4t1VZ57qXD2k_n0rug4i5iROBQ8xqNraFt4IU_Z1tjLdrablVCHEFftYfy4UeyMoBpOjJ2BnxQmJKKHsfSEyt8dW5pRgYB92GFiSOZpXLUmWlRQ-KLu8j31f0QoQOJkCqQ17HTfA2p4OMafViF-Fgu9oUaKdpkRC4XAyaVTormUEx7rejRJ5URjEx0Uoo4rzm-wYpzm1TBmDMD5o35u3ngLN9Ebl-ZAtlO0bGZdwTM5Uz7ZnyuhpkV4qLmXxynZkHJmLcKobSKN0-FanmrHzXLjcMSuUXyiN_b5BxQ0aMtsQcHBzkbYM2iggsHOVTV1ZmjLe_b2i1_ZQ0a6fkhCFRkl5RijcbsZVaM_cZzHTroUelIZVpj3PrmW9LLdVY-zczLIXDFnfABOZs2HgLLPQWIlG6JfcG-l4aNPw5-Ch-JMrkQG7Zq52df4pfJ2dIYwOPsOZrcFtCayPpy7jLv77RMyiABusZiqqmJYAibxCuTTKKzePwRpg_JKdmoiCdeZEIfNxSQ-CVHBzDt95pXBpoNO0kea9UExg6Vf10fS50f43iahCqeP5dd2Ggxjlq_MIyScvZlESw4i1BXWjh7eq02iIH_x9K6ThmJc-alU3Saco985scEFYDlVh9F5bjTWufcl47VbuMzUbOGY9wUCAOP-nGALeG75BRRZJtsix7c9VmTXbQlL322JjfZsrM0fcBkmQAgAKE8ZGj5hJ6p=w1197-h611-no?authuser=0"
            alt="companies"
          />
        </Stack>

        {/* Accordion  */}
        <Stack w="52%" pt="120px" pb="35px">
          <Text fontWeight="bold" fontSize="32px" mb="35px">
            Our values
          </Text>
          <Text fontSize="18px" pb="35px">
            We want to build a different type of company that’s focused not only
            on the bottom line, but also the happiness of our customers and
            team, and our personal growth along the journey. Here are the values
            that collectively guide our decisions and actions:
          </Text>

          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    1 Default to transparency
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <li>
                  As individuals, we view transparency as a lifestyle of
                  authenticity and honesty.
                </li>
                <li>
                  As a team, we view transparency as an effective way to work
                  remotely and establish a culture of trust.
                </li>
                <li>
                  As a company, we view transparency as a tool to help others.
                </li>
                <li>
                  We share early in the decision process to avoid “big
                  revelations.”
                </li>
                <li>
                  We strive to make all communication clear and avoid making
                  assumptions.
                </li>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    2 Cultivate positivity
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <Stack>
                  <li>
                    We strive to approach things in a positive way while
                    realizing all emotions are valid.
                  </li>
                  <li>
                    We avoid non-constructive criticism of team members or
                    customers.
                  </li>
                  <li>
                    We assume the best of others because we may lack full
                    context.
                  </li>
                  <li>
                    We believe that constructive, honest feedback is an
                    opportunity for growth.
                  </li>
                  <li>
                    We push through any artificial harmony to work towards a
                    better environment, product or concept.
                  </li>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    3 Show gratitude
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <Stack>
                  <li>
                    We regularly stop and demonstrate gratitude for our
                    circumstances.
                  </li>
                  <li>
                    We are thankful for our customers and approach customer
                    conversations with the knowledge that it’s a privilege to
                    serve them.
                  </li>
                  <li>
                    We practice humility, operate as no-ego doers and do not
                    attach our personal selves to ideas.
                  </li>
                  <li>
                    We are grateful for the work teammates do to push the
                    company forward.
                  </li>
                  <li>
                    We display gratitude for the platforms, tools and open
                    source code and communities that make our company possible
                    and view it as our duty to give back.
                  </li>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    4 Practice reflection
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <Stack>
                  <li>
                    We believe the act of introspection is where true learning
                    and life-changing adjustments originate.
                  </li>
                  <li>
                    We approach discussions intentionally and think through all
                    angles.
                  </li>
                  <li>
                    We listen first and then listen more: seeking first to
                    understand, then to be understood.
                  </li>
                  <li>
                    We step back from the day-to-day and reflect on overall
                    themes that will make an impact.
                  </li>
                  <li>
                    We take the approach that everything is a hypothesis and we
                    could be wrong.
                  </li>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    5 Improve consistently
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <Stack>
                  <li>
                    We are biased toward action and have a higher expectation of
                    ourselves and of our product than others have of us.
                  </li>
                  <li>
                    We aim to be fully engaged in our work and activities, and
                    fully disconnected when we’re not working.
                  </li>
                  <li>
                    We choose to be where we are the happiest and most
                    productive.
                  </li>
                  <li>
                    We desire to be better tomorrow than today, knowing that
                    improvement can be found in small changes.
                  </li>
                  <li>
                    We strive to exemplify a growth mindset and believe that any
                    skill or talent can be learned through deliberate practice.
                  </li>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton pb={6} pt={6}>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="22px"
                  >
                    6 Act beyond yourself
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="18px" pb={6}>
                <Stack>
                  <li>
                    We consider the bigger picture, knowing our work goes beyond
                    ourselves.
                  </li>
                  <li>
                    We are not afraid of the less-traveled path if it holds true
                    to our values and betters the world.
                  </li>
                  <li>
                    We seek balance by taking into account multiple perspectives
                    and listening deeply.
                  </li>
                  <li>
                    We advocate for diverse backgrounds and perspectives to make
                    our team and products stronger.
                  </li>
                  <li>
                    We work to create an inclusive environment to build a better
                    company and set a positive example for the world.
                  </li>
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Stack>
        <Stack>
          <Image
            mt={20}
            mb={12}
            src="https://uploads-ssl.webflow.com/5d60176738c00e7ae2afeba2/60d0f6f33dfb094cb761cb76_dsc00401-compressor1572013962inline.jpg"
            alt="users"
          />
        </Stack>
        <Stack w="100%" mt="120px" pb="20px">
          <Image
            h="90%"
            src="https://lh3.googleusercontent.com/jmHItqPaFATrmL5_xvgGCX4kFX7rRcT-TUqghEQsreJjt7P9AN6FwSuoL1xzDsVNEMKO53A3NuOgAf-O6O0JbQvab7vzFMGBp8-gaGuBoD1_uu1DD65kwf7SYf2wKz8v9kIR8Q9PGdEf4r2towcnrVS4JRQ37ePtNM3INscrGMJUbpejrv7rlVt6NTc5D7xzBRTjSeoHbZsTj0q_E-r2S3f3oVLe0pPf4OBSrKledPRbKs79W_qUtUWUfsN-0FJFSocP12hHLHZZ-0DT-ebBoKM2gN2n0nvE4ddbP_Bcb6rjQdumIV3XLnBJLPxOY1AJTQqMuXzbl7NfNaqVEMygdxQ0acLUlqA2-xbAwg2aUuWytgtDC3hhs4-x3UofMUbSusQaFodB5Tj0-DEGsEAUZ83Y7BxYy53hXdPhu26f36aBE6nTdtdFIPPxjUYuYDtXC4F-PoLjmwbOkA2QWWEX5_BeZ5OujoUvNlG_NqjFTBdHc0OEN3kTFzp38JhSJ6jOgF3OcFMkAvm5Z-AH54GPnysbltK6iYd2e6Gv-Us4M7WiKabbz7dLe5EjGies_44mP6vRs3NYWN53J3FwCMnqqspnSkHiT8sGiU6l7P-P3tz_9E9Y9Xmj81i0vWaef4U1W_aZkZuo5nmSax77i5mVm62EV7qkDPEnDn7LdYTASz8FkWPDEH4_LDBLaaCHamglH8ETitpidtw_TqMsalbcdniO2xuPYbMKobLhrS_z4v1xw_k1hrAvuM9Jg7HtSqtl1Rpiw_nRtEteprWd0rQdcJc4l29ENmC1XGAJ_MAl0xI8o9BVeuPaTPGj_1Fqje-1JkXakMLFi7nb5eBLTrIxVoPeTO4oh7cnz1Hvrq2QyP-5_OxfvlDwRiSQOrDnSw8GMzhQcqpTmh43ubIFoFed9wAkFi1Ls6XKqkSyLC3f=w1348-h452-no?authuser=0"
            alt="banner"
          />
        </Stack>
      </VStack>
      <Footer />
    </>
  );
};
export default About;
