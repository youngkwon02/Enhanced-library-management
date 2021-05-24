import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

type DetailInfoModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  modalBody: string;
  eBookAvailable: boolean;
};

const DetailInfoModal = ({
  isOpen,
  onOpen,
  onClose,
  modalBody,
  eBookAvailable,
}: DetailInfoModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{modalBody}</ModalBody>

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
