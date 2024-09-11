import { Box, Button, Img,Text} from "@chakra-ui/react";
import photo from "./image/photo.jpg";
import resume from "./image/resume.pdf"; 

export function About(){
    return(
        <Box id="about" py="50px" textAlign="center" color="#9DBDFF">
            <Text
                fontSize={{ base: "30px", md: "50px", lg: "80px" }}
                color="#83B4FF"
                fontWeight={700}
                mb="20px"
            >
                About me
            </Text>
            <Box display="flex"  flexDirection={{base:"column", md:"row"}} alignItems={{base:"center"}} p={{ base: "20px", md: "50px 100px" }}>
                <Box w={{base:"50%",md:"30%"}} >
                    <Img src={photo} alt="me"/>
                </Box>
                <Box color="#C4DAD2" w={{base:"100%",md:"70%"}} p="30px  30px" fontSize="20px">
                    <p>Experienced and enthusiastic web developer with over 1000 hours 
                        of coding experience. Skilled in front-end and back-end 
                        development, utilizing technologies such as ReactJS, Node.js, 
                        JavaScript, ExpressJS, and MongoDB. Developed clones of popular 
                        websites and successfully completed projects. 
                        Highly disciplined, motivated, and a problem solver.</p>
                    <a href={resume} download>
                        <Button m="20px" bg="#ECDFCC"  color="#185519">RESUME</Button>
                    </a>
                </Box>
                
            </Box>
        </Box>
    )
}