import { Box,Img,Text} from "@chakra-ui/react";
import github from "./image/github.png"
import linkedin from "./image/linkedin.png"
import email from "./image/email.png"
import phone from "./image/phone.png"

export function Contact() {
    return(
        <>
        <Box id="contact" py="50px"  textAlign="center" color="#9DBDFF" m="30px 80px">
        <Text
                fontSize={{ base: "30px", md: "50px", lg: "80px" }}
                color="#83B4FF"
                fontWeight={700}
                mb="20px"
            >
               Contact Me
            </Text>
            <Box display="flex" flexDirection="column" ml={{base:"0px", md:"auto"}} mr={{base:"0px", md:"auto"}} w={{base:"100%", md:"40%"}} gap="20px" color="black" border="1px solid" bg="white" p="10px" mt="30px">
                <Box display="flex" >
                    <Img src={github} alt="github" w="8%"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>Sangavi002</a>
                </Box>
                <Box display="flex" >
                    <Img src={linkedin} alt="linked" w="8%"/>
                    <a href="https://www.linkedin.com/in/sangavi-babu-7a74a0148/" target="_blank" style={{padding:"0px 20px"}}>Sangavi002</a>
                </Box>
                <Box display="flex" >
                    <Img src={email} alt="email" w="8%"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>sangavibabu007@gmail.com</a>
                </Box>
                <Box display="flex" >
                    <Img src={phone} alt="phone" w="8%"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>+91 9940320771</a>
                </Box>
            </Box>
        </Box>
        <Box  bg="#ECDFCC">
            <h2 style={{textAlign:"center",padding:"20px", fontSize:"15px", fontWeight:500}}>Thank You for visiting my PortFolio.</h2>
        </Box>
        </>
    )

}