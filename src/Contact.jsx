import { Box,Img,Text} from "@chakra-ui/react";
import git1 from "./image/git1.png"
import linkedin from "./image/linkedin.png"
import email from "./image/email.png"
import phone from "./image/phone.png"

export function Contact() {
    return(
        <>
        <Box id="contact" py="50px"  textAlign="center" color="#9DBDFF" >
        <Text
                fontSize={{ base: "35px", lg: "60px"}}
                color="#654520"
                fontWeight={700}
                mb="20px"
            >
               Contact Me
            </Text>
            <Box display="flex" flexDirection="column" ml={{base:"auto", md:"auto"}} mr={{base:"auto", md:"auto"}} w={{base:"90%", md:"40%",lg:"30%"}} gap="10px" bg="#ECDFCC" borderRadius="20px" color="#795757"  p="20px 30px" mt="30px" fontWeight="500">
                <Box display="flex"  >
                    <Img src={git1} alt="github" w="10%" h="30px"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>Sangavi002</a>
                </Box>
                <Box display="flex" >
                    <Img src={linkedin} alt="linked" w="10%" h="30px"/>
                    <a href="https://www.linkedin.com/in/sangavi-babu-7a74a0148/" target="_blank" style={{padding:"0px 20px"}}>Sangavi002</a>
                </Box>
                <Box display="flex" >
                    <Img src={email} alt="email" w="10%" h="30px"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>sangavibabu007@gmail.com</a>
                </Box>
                <Box display="flex" >
                    <Img src={phone} alt="phone" w="10%" h="30px"/>
                    <a href="https://github.com/Sangavi002" target="_blank" style={{padding:"0px 20px"}}>+91 9940320771</a>
                </Box>
            </Box>
        </Box>
        <Box  bg="#ECDFCC" color="#795757">
            <h2 style={{textAlign:"center",padding:"20px", fontSize:"15px", fontWeight:500}}>Thank You for visiting my PortFolio ❤️.</h2>
        </Box>
        </>
    )

}