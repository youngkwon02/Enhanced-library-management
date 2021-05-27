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
import { useAsync } from "react-async";
import { postEBookIssue } from "../lib/api";

type DetailInfoModalProps = {
  id: number;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactElement;
  eBookAvailable: boolean;
};

const DetailInfoModal = ({
  id,
  isOpen,
  onOpen,
  onClose,
  children,
  eBookAvailable,
}: DetailInfoModalProps) => {
  const handleEBookIssue = async () => {
    const res = await postEBookIssue({ guestId: "1", bookId: id });
    if (res.status === 200) alert("Issue Success");
    onClose();
  };

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
          {eBookAvailable && (
            <Button onClick={handleEBookIssue} mr={3}>
              Issue E-Book
            </Button>
          )}
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DetailInfoModal;
