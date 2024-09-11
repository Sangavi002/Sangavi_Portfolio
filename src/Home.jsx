import { Box, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import banner from './image/banner.avif';

const AnimatedText = motion(Text);

export function Home() {
    return (
        <Box id="home" py={{ base: "50px", md: "100px" }} textAlign="center" color="#9DBDFF">
            <Text
                fontSize={{ base: "30px", md: "60px", lg: "80px" }}
                fontWeight="bold"
                mt={{ base: "30px", md: "30px", lg: "30px" }}
            >
                Hi, I'm Sangavi Babu
            </Text>
            <AnimatedText
                fontSize={{ base: "20px", md: "40px", lg: "50px" }}
                animate={{ opacity: [0, 1], scale: [0.5, 1] }} 
                transition={{ duration: 1, ease: "easeInOut" }} 
                mb="20px"
                mt="10px"
            >
                A MERN Stack Developer
            </AnimatedText>
            <Box display="flex" justifyContent="center" mt="20px">
                <Img 
                    src={banner} 
                    alt="banner" 
                    width={{ base: "80%", md: "60%", lg: "40%" }} 
                    maxW="100%" 
                />
            </Box>
        </Box>
    );
}
