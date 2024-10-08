import { Box, Img, Text, Button } from "@chakra-ui/react";
import lululemon from "./image/lululemon.png";
import croma from "./image/croma.png";
import firebase from "./image/firebase.png";
import allegro from "./image/allegro.png";
import html1 from "./image/html1.webp";
import css from "./image/css.png";
import js from "./image/js.webp";
import react from "./image/react.png";
import node from "./image/node.png";
import mongo from "./image/mongo.png";
import express from "./image/express.png";
import redux from "./image/redux.png";
import chakra from "./image/chakra.jpeg";
import './WordFlicker.css'; 

export function Project() {
    return (
        <Box id="project" py="50px" textAlign="center" color="#9DBDFF"> 
            <Text
                fontSize={{ base: "35px", sm: "40px", md: "50px", lg: "60px" }}
                color="#654520"
                fontWeight={700}
                mb="20px"
            >
                My Projects
            </Text>

            <ProjectBox
                imageSrc={allegro}
                title="Allegro"
                description="Allegro, established in 1999, is a leading Polish e-commerce platform and Europe's largest online shopping destination of European origin."
                view="Desktop website"
                techStack={[html1, css, js, react, node, express, mongo]}
                liveLink="https://allegroclone.netlify.app/"
                githubLink="https://github.com/Sangavi002/allegro-FE"
            />

            <ProjectBox
                imageSrc={croma}
                title="Croma"
                description=" Croma is an Indian retail chain of consumer electronics and durable goods, it is a subsidiary of the Tata Digital."
                view="Responsive"
                techStack={[html1, css, js, react,chakra,firebase]}
                liveLink="https://cromatech.netlify.app/"
                githubLink="https://github.com/Sangavi002/croma"
            />

            <ProjectBox
                imageSrc={lululemon}
                title="LULULEMON"
                description="Lululemon, a premium athletic apparel retailer founded in 1998, is based in British Columbia and incorporated in Delaware."
                view="Desktop website"
                techStack={[html1, css, js, react, redux, chakra]}
                liveLink="https://lululemonapp.netlify.app/"
                githubLink="https://github.com/Sangavi002/Lululemon-clone"
            />
        </Box>
    );
}

const ProjectBox = ({ imageSrc, title, description,view, techStack, liveLink, githubLink }) => (
    <Box 
        display="flex" 
        flexDirection={{ base: "column", md: "column",lg:"column" }} 
        alignContent="center"
        p={{ base: "20px", md: "30px" }} 
        border="1px solid white" 
        m={{ base: "20px", md: "20px 50px" }} 
        bg="#ECDFCC" 
        borderRadius="20px" 
        h={{ base: "auto", md: "300px" }} 
        flexWrap="wrap"
    >
        <Box w={{ base: "80%", md: "50%" }} mb={{ base: "20px", md: "0" }}>
            <Img src={imageSrc} alt={title} w="100%" h={{ base: "200px", md: "250px" }}  />
        </Box>
        <Box color="#795757" textAlign="left" w={{ base: "80%", md: "50%" }} p={{ base: "10px", md: "0px 40px" }}>
            <Text fontSize={{ base: "24px", md: "30px",lg:"30px" }} textAlign="center" mb={{base:"10px",}}><strong>{title}</strong></Text>
            <Text fontSize={{ base: "18px", md: "13px",lg:"18px" }} textAlign="center" mt="-10px">{description}</Text>
            <Text fontSize={{ base: "15px", md: "13px" ,lg:"18px" }} mt="5px"><strong>View: </strong>{view}</Text>
            <Box display="flex" h={{ base: "100px", md: "50px",lg: "50px" }}>
                <Box fontSize={{ base: "15px",md: "13px" ,lg: "17px" }} margin="15px 0px" w={{ base: "30%",md:"20%",lg:"20%" }}><strong>Tech Stack:</strong></Box>
                <Box display={{ base: "grid", md: "flex" }} gridTemplateColumns="repeat(4, 1fr)" h="40px" justifyContent="start" mt="10px" gap="10px">
                    {techStack.map((tech, index) => (
                        <Img key={index} src={tech} alt={tech} h={{base:"30px",md:"25px",lg:"30px"}} />
                    ))}
                </Box>
            </Box>
            <Box display="flex" mt="25px" justifyContent="center"  alignItems="center" flexDirection={{ base: "column", md: "row" }} mt={{md:"10px"}} gap={{base:"10px"}}>
                <Box w={{ base: "80%", md: "50%" }} textAlign="center">
                    <a href={liveLink} target="_blank" rel="noopener noreferrer">
                        <Button 
                            bg="linear-gradient(180deg, #B99470 0%, #B99470 100%)" 
                            className="button-shimmer"
                            color="#FFEAC5" 
                            _hover={{ bg: '#6C4E31' }} 
                            width={{ base: "90%", md: "60%" ,lg:"60%"}}
                            p={{md:"0px 55px"}}
                        >
                            Live Project
                        </Button>
                    </a>
                </Box>
                <Box w={{ base: "80%", md: "50%" }} textAlign="center">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer">
                        <Button 
                            bg="linear-gradient(180deg, #B99470 0%, #B99470 100%)" 
                            className="button-shimmer"
                            color="#FFEAC5" 
                            _hover={{ bg: '#6C4E31' }} 
                            width={{ base: "90%", md: "60%",lg:"60%" }}
                            p={{md:"0px 55px"}}
                        >
                            GitHub Repo
                        </Button>
                    </a>
                </Box>
            </Box>
        </Box>
    </Box>
);
