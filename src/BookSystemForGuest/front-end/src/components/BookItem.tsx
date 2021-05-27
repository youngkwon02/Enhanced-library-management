import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import DetailInfoModal from "./DetailInfoModal";

export type BookItemProps = {
  id: number;
  imgLink: string;
  title: string;
  author: string;
  price: number;
  quantity: number;
  location: string;
  eBookAvailable: boolean;
};

const BookItem = ({
  id,
  title,
  author,
  quantity,
  imgLink,
  price,
  location,
  eBookAvailable,
}: BookItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleBookItemClick = () => {
    onOpen();
  };
  return (
    <Flex onClick={handleBookItemClick} width="100%" cursor="pointer">
      <Image width="150px" src={imgLink} />
      <Flex width="100%" background="gray.200">
        <Flex width="100%" direction="column" padding="20px">
          <Heading as="h2" size="lg" textAlign="left">
            {title}
          </Heading>
          <Flex mt="20px">
            <Box mr="20px">
              <b>Author</b> : {author}
            </Box>

            <Box mr="20px">
              <b>E-Book Availability</b> : {eBookAvailable ? "Yes" : "No"}
            </Box>
          </Flex>
        </Flex>
      </Flex>
      <DetailInfoModal
        id={id}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        eBookAvailable={eBookAvailable}
      >
        <Flex>
          <Image mr="30px" src={imgLink} width="300px" />
          <Stack>
            <Box mr="20px">
              <b>Title</b> : {title}
            </Box>
            <Box mr="20px">
              <b>Author</b> : {author}
            </Box>
            <Box mr="20px">
              <b>Price</b> : {price}
            </Box>
            <Box mr="20px">
              <b>Quantity left at library</b> : {quantity}
            </Box>
            <Box mr="20px">
              <b>Location in library</b> : {location}
            </Box>
            <Box mr="20px">
              <b>E-Book Availability</b> : {eBookAvailable ? "Yes" : "No"}
            </Box>
          </Stack>
        </Flex>
      </DetailInfoModal>
    </Flex>
  );
};

export default BookItem;
