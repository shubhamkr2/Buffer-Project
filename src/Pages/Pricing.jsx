import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <VStack>
        <VStack>
          <Text lineHeight={1} mt="50px" fontWeight="bold" fontSize="45px">
            Publish Flawlessly.
          </Text>
          <Text fontWeight="bold" fontSize="45px">
            Analyze Effortlessly. Engage Authentically.
          </Text>
          <Stack pt="25px" w="60%" textAlign="center">
            <Text fontSize="18px">
              We’ve built simpler social media tools for busy people. Enjoy our
              free plan as you get started, or trial our full toolkit priced to
              make marketing your business on social affordable.
            </Text>
          </Stack>
        </VStack>
        <Stack w="100%" mt="120px" pb="20px">
          <Image
            mt="120px"
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
export default Pricing;
