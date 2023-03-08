import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <div>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody></DrawerBody>
          <DrawerFooter>            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navbar;
