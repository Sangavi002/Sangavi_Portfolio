import { Box, Img,Text} from "@chakra-ui/react"
import gitstat from './image/gitstat.png'

export function Statistics () {

    return(
        <Box id="statistics" py="50px"  textAlign="center" color="#9DBDFF" m={{base:"30px",md:"30px 60px"}}>
            <Text
                fontSize={{ base: "35px", lg: "60px"}}
                color="#654520"
                fontWeight={700}
                mb="20px"
            >
               GitHub Statistics
            </Text><center>
            <Img src={gitstat} alt="calendar" w={{base:"100%",md:"80%"}} h={{base:"150px",md:"200px"}} p={{base:"10px",md:"30px"}}/>
            </center>
            <Box display="flex" flexDirection={{base:"column", md:"row"}} alignItems={{base:"center"}} gap="40px" mt="20px">
                <Box  w={{base:"80%",md:"40%"}}>
                    <img src="https://github-readme-stats.vercel.app/api?username=Sangavi002&count_private=true&theme=white" alt="" width="100%" />
                </Box>
                <Box w={{base:"80%",md:"40%"}}>
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sangavi002&layout=compact&theme=white" alt="" width="100%"/>
                </Box>
                <Box w={{base:"80%",md:"40%"}}>
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=Sangavi002&theme=white&border_radius=6.5&date_format=M%20j%5B%2C%20Y%5D" alt="" width="100%" h/>
                </Box>
            </Box>
        </Box>
    )
}