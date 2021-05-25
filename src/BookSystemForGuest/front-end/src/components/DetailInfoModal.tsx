import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

type DetailInfoModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactElement;
  eBookAvailable: boolean;
};

const DetailInfoModal = ({
  isOpen,
  onOpen,
  onClose,
  children,
  eBookAvailable,
}: DetailInfoModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      scrollBehavior="outside"
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Detailed Book Info</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          {eBookAvailable && <Button mr={3}>Issue E-Book</Button>}
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailInfoModal;
