import { Box, Button, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, useBreakpointValue, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box>
            {isMobile ? (
                <>
                    <IconButton
                        aria-label="Open menu"
                        icon={<HamburgerIcon />}
                        onClick={onOpen}
                        position="fixed"
                        top="4"
                        right="4"
                        zIndex="1"
                        bg="#ECDFCC"
                        color="#185519"
                    />
                    <Drawer
                        isOpen={isOpen}
                        onClose={onClose}
                        placement="right"
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerHeader bg="#ECDFCC" color="#185519">Menu</DrawerHeader>
                            <DrawerBody bg="#ECDFCC" p="4">
                                <VStack spacing="4" align="start">
                                    <Button as="a" href="#home" variant="link" color="#185519" onClick={onClose}>Home</Button>
                                    <Button as="a" href="#about" variant="link" color="#185519" onClick={onClose}>About</Button>
                                    <Button as="a" href="#skills" variant="link" color="#185519" onClick={onClose}>Skills</Button>
                                    <Button as="a" href="#project" variant="link" color="#185519" onClick={onClose}>Project</Button>
                                    <Button as="a" href="#statistics" variant="link" color="#185519" onClick={onClose}>Statistics</Button>
                                    <Button as="a" href="#contact" variant="link" color="#185519" onClick={onClose}>Contact</Button>
                                </VStack>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </>
            ) : (
                <Box position="fixed" top="0" left="0" p={4} bg="#ECDFCC" zIndex="1" display="flex" right="0" gap="45px" justifyContent="end">
                    <Button as="a" href="#home" variant="link" color="#185519">Home</Button>
                    <Button as="a" href="#about" variant="link" color="#185519">About</Button>
                    <Button as="a" href="#skills" variant="link" color="#185519">Skills</Button>
                    <Button as="a" href="#project" variant="link" color="#185519">Project</Button>
                    <Button as="a" href="#statistics" variant="link" color="#185519">Statistics</Button>
                    <Button as="a" href="#contact" variant="link" color="#185519">Contact</Button>
                </Box>
            )}
        </Box>
    );
}
