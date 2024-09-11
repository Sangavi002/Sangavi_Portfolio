import { Box,Img,Text} from "@chakra-ui/react";
import html from "./image/html.png"
import css from "./image/css.png"
import js from "./image/js.png"
import node from "./image/node.png"
import mongo from "./image/mongo.png"
import react from "./image/react.png";
import express from "./image/express.png";
import github from "./image/github.png";
import redux from "./image/redux.png";
import vs from "./image/vs.jpeg";
import chakra from "./image/chakra.jpeg";

export function Skills(){
    return(
        <Box id="skills" py="50px" textAlign="center" color="#9DBDFF">
           <Text
                fontSize={{ base: "30px", md: "50px", lg: "80px" }}
                color="#83B4FF"
                fontWeight={700}
                mb="20px"
            >
                Technical Skills
            </Text><Box display="grid"
                gridTemplateColumns={{base:"repeat(2,20%)",sm:"repeat(3,20%)",md:"repeat(4,13%)"}}
                justifyContent="center"
                gap="40px"
                p={{base:"20px", md:"30px 200px"}}
            >
                <Box h="110px">
                    <   Img src={html} alt="html" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={css} alt="css" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={js} alt="js" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={react} alt="react" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={node} alt="node" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={mongo} alt="mongo" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={express} alt="express" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={redux} alt="redux" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={github} alt="github" w="100%" h="100%" />    
                </Box>
                <Box h="110px">
                    <   Img src={chakra} alt="chakra" w="100%" h="100%" />    
                </Box>
           </Box>
        </Box>
    )
}