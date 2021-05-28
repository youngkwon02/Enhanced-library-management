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
import Cookies from "js-cookie";
import React from "react";
import { postEBookIssue } from "../lib/api";

type DetailInfoModalProps = {
  id: number;
  userId: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: React.ReactElement;
  eBookAvailable: boolean;
};

const DetailInfoModal = ({
  id,
  userId,
  isOpen,
  onOpen,
  onClose,
  children,
  eBookAvailable,
}: DetailInfoModalProps) => {
  const session = Cookies.get("session");
  const handleEBookIssue = async () => {
    const res = await postEBookIssue({ guestId: userId, bookId: id, session });
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
