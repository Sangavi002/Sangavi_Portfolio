import { Box, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import banner from './image/banner.avif';
import WordFlicker from './WordFlicker';

export function Home() {
    return (
        <Box  id="home" py={{ base: "20px",lg: "100px" }} textAlign="center" color="#654520" >
            <Text
                fontSize={{ base: "35px",sm:"50px",md:"70px", lg: "90px"}}
                fontWeight="bold"
                mt={{ base: "40px",  lg: "50px" }}
            >
                Hi, I'm Sangavi Babu
            </Text>
            <WordFlicker />
            <Box display="flex" justifyContent="center" mt={{ base: "0px", md: "25px" }}>
                <Img 
                    src={banner} 
                    alt="banner" 
                    width={{ base: "80%",  lg: "50%" }} 
                    maxW="100%" 
                />
            </Box>
        </Box>
    );
}
