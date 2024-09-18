import { Box, Button, Img,Text} from "@chakra-ui/react";
import photo from './image/photo.JPG';
import resume from "./image/resume.pdf"; 
import './WordFlicker.css'; 

export function About(){
    return(
        <Box id="about" py="50px" textAlign="center" >
            <Text
                fontSize={{ base: "35px",sm:"40px",md:"50px", lg: "60px"}}
                color="#654520"
                fontWeight={700}
                mb="10px"
            >
                About me
            </Text>
            <Box display="flex"  flexDirection={{base:"column",sm:"column",md:"row", lg:"row"}}  alignItems={{base:"center"}} p={{ base: "20px", lg: "20px 100px" }}>
                <Box w={{base:"50%",sm:"40%",md:"40%",lg:"30%"}}  >
                    <Img src={photo} alt="me"/>
                </Box>
                <Box  color="#795757" w={{base:"100%",sm:"100%",md:"90%",lg:"70%"}} p="30px  30px" fontSize="20px" fontWeight="500">
                    <p >Experienced and enthusiastic web developer with over 1000 hours 
                        of coding experience. Skilled in front-end and back-end 
                        development, utilizing technologies such as ReactJS, Node.js, 
                        JavaScript, ExpressJS, and MongoDB. Developed clones of popular 
                        websites and successfully completed projects. 
                        Highly disciplined, motivated, and a problem solver.</p>
                    <a href={resume} download>
                        <Button 
                            m="20px" 
                            bg="linear-gradient(180deg, #B99470 0%, #B99470 100%)" 
                            className="button-shimmer"  
                            color="#FFEAC5" 
                            _hover={{ bg: '#6C4E31' }}>RESUME
                        </Button>
                    </a>
                </Box>
                
            </Box>
        </Box>
    )
}