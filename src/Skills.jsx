import { Box, Img, Text, Tooltip } from "@chakra-ui/react";
import html from "./image/html.png";
import css from "./image/css.png";
import js from "./image/js.webp";
import node from "./image/node.png";
import mongo from "./image/mongo.png";
import react from "./image/react.png";
import express from "./image/express.png";
import github from "./image/github.png";
import redux from "./image/redux.png";
import chakra from "./image/chakra.jpeg";
import vs from "./image/vs.jpeg"

export function Skills() {
    return (
        <Box id="skills" py="50px" textAlign="center" color="#9DBDFF">
            <Text
                fontSize={{ base: "35px",sm:"40px",md:"50px", lg: "60px"}}
                color="#654520"
                fontWeight={700}
                mb="10px"
            >
                Technical Skills
            </Text>
            <Box
                display="grid"
                gridTemplateColumns={{ base: "repeat(2,20%)",sm:"repeat(3,25%)",md:"repeat(3,25%)", lg: "repeat(4,13%)" }}
                justifyContent="center"
                gap={{base:"40px 60px", sm:"40px 10px",md:"40px 20px", lg:"40px 30px"}}
                p={{ base: "20px", md: "20px 200px" }}
            >
                <SkillIcon src={html} alt="HTML5" label="HTML5" />
                <SkillIcon src={css} alt="CSS3" label="CSS3" />
                <SkillIcon src={js} alt="JavaScript" label="JavaScript" bg="white" />
                <SkillIcon src={react} alt="React" label="React.js" />
                <SkillIcon src={node} alt="Node.js" label="Node.js" />
                <SkillIcon src={mongo} alt="MongoDB" label="MongoDB" />
                <SkillIcon src={express} alt="Express" label="Express.js" />
                <SkillIcon src={redux} alt="Redux" label="Redux" />
                <SkillIcon src={github} alt="GitHub" label="GitHub" />
                <SkillIcon src={chakra} alt="Chakra UI" label="Chakra UI" />
                <SkillIcon src={vs} alt="VS Code" label="VS Code" />
            </Box>
            <style jsx>{`
                .rotate {
                    animation: rotation 8s infinite linear;
                }

                @keyframes rotation {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(359deg);
                    }
                }
            `}</style>
        </Box>
    );
}

const SkillIcon = ({ src, alt, label, bg }) => (
    <Box
        h={{base:"90px",lg:"110px"}}
        width={{base:"90px",lg:"110px"}}
        position="relative"
        bg={bg}
        borderRadius="100px"
        className="rotate" 
    >
        <Tooltip label={label} placement="top" mb="-80px" bg="#B99470" color="#FFEAC5">
            <Img
                src={src}
                alt={alt}
                h="100%"
                borderRadius="100px"
                objectFit="cover"
                _hover={{ cursor: "pointer" }}
                className="rotate" 
            />
        </Tooltip>
    </Box>
);
