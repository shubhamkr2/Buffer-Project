import { Button, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer=()=>{
    return (
        <VStack border="1px solid red" w="100%" h="500px">
        <HStack spacing='120px' pt="80px">
            <Stack>
            <Stack>
                <Image pb="80px" src="https://seekvectorlogo.net/wp-content/uploads/2020/02/buffer-inc-vector-logo.png" w="180px" alt="logo" />
            </Stack>
            <HStack spacing="20px" pb="20px">
                <Image w="25px" src="https://www.nicepng.com/png/detail/23-230042_instagram-logo-black-borders-png-transparent-background-instagram.png" alt="insta" />
                <Image w="25px" src="https://img.favpng.com/15/6/4/facebook-logo-icon-png-favpng-NSdF9e3aktdSq4DCeYrXsd0sk_t.jpg" alt="face" />
                <Image w="25px" src="https://cdn-icons-png.flaticon.com/512/81/81609.png" alt="twitter" />
                <Image w="25px" src="https://pngimg.com/uploads/tiktok/tiktok_PNG27.png" alt="tik" />
                <Image w="25px" src="https://cdn-icons-png.flaticon.com/512/49/49656.png" alt="linked" />
                <Image w="25px" src="https://i.pinimg.com/originals/40/e2/6b/40e26beab6a4049d7d52cee459a7dbb8.png" alt="pin" />
            </HStack>
            <Text fontWeight="bold" >Download</Text>
            <HStack>
                <Button h="30px" border="1px solid blue" borderRadius="15px" color="blue" bg="none">App Store</Button>
                <Button h="30px" border="1px solid blue" borderRadius="15px" color="blue" bg="none">Google Play</Button>
            </HStack>
            <Text fontSize="sm">Copyright ©2022 Buffer | Privacy | Terms | Security</Text>
            </Stack>
            <Stack>
                <Text fontSize='xl' fontWeight="bold" >Tools</Text>
                <Text fontSize='xl' >Publishing</Text>
                <Text fontSize='xl' >Analytics</Text>
                <Text fontSize='xl' >Engagement</Text>
                <Text fontSize='xl' >Start Page</Text>
                <Text fontSize='xl' >Extras</Text>
            </Stack>
            <Stack>
                <Text fontSize='xl' fontWeight="bold" mt="-10" >Resources</Text>
                <Text fontSize='xl' >Blog</Text>
                <Text fontSize='xl' >Content Library</Text>
                <Text fontSize='xl' >Browser Extension</Text>
                <Text fontSize='xl' >Free Image Editor</Text>
            </Stack>
            <Stack>
                <Text fontSize='xl' fontWeight="bold" mt="-10" >Support</Text>
                <Text fontSize='xl' >Help Center</Text>
                <Text fontSize='xl' >Status</Text>
                <Text fontSize='xl' >Changelog</Text>
                <Text fontSize='xl' >Product Roadmap</Text>
            </Stack>
            <Stack>
                <Text fontSize='xl' fontWeight="bold" mt="8" >Company</Text>
                <Text fontSize='xl' >About</Text>
                <Text fontSize='xl' >Transparency</Text>
                <Text fontSize='xl' >Careers</Text>
                <Text fontSize='xl' >Accessibility</Text>
                <Text fontSize='xl' >Press</Text>
                <Text fontSize='xl' >Sitemap</Text>
            </Stack>
        </HStack>
        </VStack>
    )
}
export default Footer;