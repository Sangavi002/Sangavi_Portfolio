import { Box, Img } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { About } from './About';
import { Skills } from './Skills';
import { Project } from './Project';
import { Statistics } from './Statistics';
import { Contact } from './Contact';

export function App() {
    return (
        <Box position="relative" minHeight="100vh" bg="#FFF8E8" >
            <Navbar />
            <Box> 
                <Home />
                <About />
                <Skills />
                <Project />
                <Statistics />
                <Contact />
            </Box>
        </Box>
    );
}
