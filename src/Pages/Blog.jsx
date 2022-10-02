import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Blog = () => {
  return (
    <>
      <Navbar />
      <HStack p="60px" spacing={10}>
        <Stack>
          <Image
            w="1724px"
            src="https://buffer.com/resources/content/images/size/w600/2022/09/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
            alt="people"
          />
        </Stack>
        <Stack w="1800px">
          <Text fontWeight="semibold">
            Publications <ChevronRightIcon /> Flow
          </Text>
          <Text lineHeight={1.2} fontWeight="bold" fontSize="55px">
            All the Founders Around Me Were Raising Money — Here's Why I Didn't
          </Text>
          <Text fontSize="19">
            When starting in the tech industry, many companies raise venture
            capital. But Allison Esposito Medina, founder and CEO of Tech
            Ladies, decided to bootstrap and generate income from the start. She
            believes her business is better for it, and she encourages other
            founders to do the same.
          </Text>
          <Text pt="8px" fontSize="sm">
            Sep 29, 2022
          </Text>
          <HStack>
            <Image
              borderRadius="50%"
              w="75px"
              src="https://buffer.com/resources/content/images/size/w300/2022/09/Blog_Guest-Contributors--8-.png"
              alt="user"
            />
            <Stack pl="10px">
              <Text lineHeight={0.2} fontWeight="bold" fontSize="20px">
                Allison Esposito Medina
              </Text>
              <Text fontSize="18px">Founder & CEO of Tech Ladies</Text>
            </Stack>
          </HStack>
        </Stack>
      </HStack>
      <Stack w="100%" mt="120px" pb="20px">
        <Image
          mt="120px"
          h="90%"
          src="https://lh3.googleusercontent.com/jmHItqPaFATrmL5_xvgGCX4kFX7rRcT-TUqghEQsreJjt7P9AN6FwSuoL1xzDsVNEMKO53A3NuOgAf-O6O0JbQvab7vzFMGBp8-gaGuBoD1_uu1DD65kwf7SYf2wKz8v9kIR8Q9PGdEf4r2towcnrVS4JRQ37ePtNM3INscrGMJUbpejrv7rlVt6NTc5D7xzBRTjSeoHbZsTj0q_E-r2S3f3oVLe0pPf4OBSrKledPRbKs79W_qUtUWUfsN-0FJFSocP12hHLHZZ-0DT-ebBoKM2gN2n0nvE4ddbP_Bcb6rjQdumIV3XLnBJLPxOY1AJTQqMuXzbl7NfNaqVEMygdxQ0acLUlqA2-xbAwg2aUuWytgtDC3hhs4-x3UofMUbSusQaFodB5Tj0-DEGsEAUZ83Y7BxYy53hXdPhu26f36aBE6nTdtdFIPPxjUYuYDtXC4F-PoLjmwbOkA2QWWEX5_BeZ5OujoUvNlG_NqjFTBdHc0OEN3kTFzp38JhSJ6jOgF3OcFMkAvm5Z-AH54GPnysbltK6iYd2e6Gv-Us4M7WiKabbz7dLe5EjGies_44mP6vRs3NYWN53J3FwCMnqqspnSkHiT8sGiU6l7P-P3tz_9E9Y9Xmj81i0vWaef4U1W_aZkZuo5nmSax77i5mVm62EV7qkDPEnDn7LdYTASz8FkWPDEH4_LDBLaaCHamglH8ETitpidtw_TqMsalbcdniO2xuPYbMKobLhrS_z4v1xw_k1hrAvuM9Jg7HtSqtl1Rpiw_nRtEteprWd0rQdcJc4l29ENmC1XGAJ_MAl0xI8o9BVeuPaTPGj_1Fqje-1JkXakMLFi7nb5eBLTrIxVoPeTO4oh7cnz1Hvrq2QyP-5_OxfvlDwRiSQOrDnSw8GMzhQcqpTmh43ubIFoFed9wAkFi1Ls6XKqkSyLC3f=w1348-h452-no?authuser=0"
          alt="banner"
        />
      </Stack>
      <Footer />
    </>
  );
};
export default Blog;
