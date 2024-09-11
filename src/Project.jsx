import { Box,Img,Text } from "@chakra-ui/react";
import lululemon from "./image/lululemon.png";
import allegro from "./image/allegro.png";
import live from "./image/live.png"
import git from "./image/git.png"
import { useNavigate } from "react-router-dom";

export function Project(){
    const navigate = useNavigate();

    return(
        <Box id="project" py="50px" p="0px 60px" textAlign="center" color="#9DBDFF">
            <Text
                fontSize={{ base: "30px", md: "50px", lg: "80px" }}
                color="#83B4FF"
                fontWeight={700}
                mb="20px"
            >
                My Projects
            </Text>
            <Box display="flex" flexDirection={{base:"column", md:"row"}} alignItems={{base:"center"}} p={{base:"10px",md:"30px"}} border="1px solid white" m={{base:"20px 10px",md:"20px 50px"}} bg="#ECDFCC" borderRadius="20px">
                <Box w={{base:"80%",md:"100%"}} >
                    <Img src={lululemon} alt="lululemon" w={{base:"100%", md:"100%"}} h="300px"/>
                </Box>
                <Box color="black"  w={{base:"80%",md:"100%"}} p={{base:"10px",md:"10px 20px"}} >
                    <Text fontSize={{base:"24px", md:"30px" }} margin="20px 0px" color="#185519"><strong>LULULEMON</strong></Text>
                    <Text fontSize={{base:"15px", md:"20px" }}>Lulemeon, a premium athletic apparel retailer founded in 1998, 
                        is based in British Columbia and incorporated in Delaware. 
                    </Text>
                    <Text fontSize={{base:"15px", md:"20px" }}margin="20px 0px"><strong>Tech Stack:</strong> HTML| CSS | JS | REACT</Text>
                    <Box display="flex" mt="25px" >
                    <Box  w={{base:"80%",md:"50%"}} >
                        <a href="https://lululemonapp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <center>
                            <Img src={live} alt="live" w="20%" />
                            </center>
                        </a>
                    </Box>
                    <Box  w={{base:"80%",md:"50%"}}>
                        <a href="https://github.com/Sangavi002/Lululemon-clone" target="_blank" rel="noopener noreferrer">
                        <center>
                            <Img src={git} alt="github" w="20%" />
                        </center>
                        </a>
                    </Box>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" flexDirection={{base:"column",md:"row"}} alignItems={{base:"center"}} p={{base:"10px",md:"30px"}} border="1px solid white" m={{base:"20px 10px",md:"20px 50px"}} bg="#ECDFCC" borderRadius="20px">
                <Box w={{base:"80%",md:"100%"}}  >
                    <Img src={allegro} alt="allegro" w={{base:"100%", md:"100%"}} h="300px"/>
                </Box>
                <Box color="black"  w={{base:"80%",md:"100%"}} p={{base:"10px",md:"10px 20px"}} >
                    <Text fontSize={{base:"24px", md:"30px" }} margin="20px 0px" color="#185519"><strong>Allegro</strong></Text>                
                    <Text fontSize={{base:"15px", md:"20px" }}>Allegro, established in 1999, is a leading Polish e-commerce platform and Europe's largest online shopping destination of European origin. 
                    </Text>
                    <Text fontSize={{base:"15px", md:"20px" }} margin="20px 0px"><strong>Tech Stack:</strong> HTML| CSS | JS | REACT | NODE.JS | EXPRESS.JS | MONGODB</Text>
                    <Box display="flex" mt="25px" >
                    <Box  w={{base:"80%",md:"50%"}}>
                        <a href="https://allegroclone.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <center>
                            <Img src={live} alt="live" w="20%" />
                            </center>
                        </a>
                    </Box>
                    <Box   w={{base:"80%",md:"50%"}}>
                        <a href="https://github.com/Sangavi002/allegro-FE" target="_blank" rel="noopener noreferrer">
                        <center>
                            <Img src={git} alt="github" w="20%" />
                        </center>
                        </a>
                    </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}