import React, { useState } from "react";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import Layout from "./Layout";
import {
  Button,
  IconButton,
  Image,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import DetailInfoModal from "./DetailInfoModal";

const onSearch = () => {
  console.log("Search Clicked");
};

type BookItemProps = {
  id: number;
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
  price,
  location,
  eBookAvailable,
}: BookItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState<string>("");
  const handleBookItemClick = () => {
    onOpen();
  };
  return (
    <Flex onClick={handleBookItemClick} width="100%" cursor="pointer">
      <Image src="https://via.placeholder.com/150" />
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
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        eBookAvailable={eBookAvailable}
      >
        <Flex>
          <Image mr="30px" src="https://via.placeholder.com/300" />
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

const BookInfoPage = () => {
  const sample: BookItemProps[] = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      price: 10000,
      quantity: 3,
      location: "A1",
      eBookAvailable: true,
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      price: 11000,
      quantity: 4,
      location: "A2",
      eBookAvailable: true,
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      price: 12000,
      quantity: 5,
      location: "A3",
      eBookAvailable: false,
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      price: 13000,
      quantity: 6,
      location: "A4",
      eBookAvailable: true,
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      price: 14000,
      quantity: 7,
      location: "A5",
      eBookAvailable: false,
    },
  ];
  return (
    <Layout>
      <>
        <Flex width="100%" direction="column" alignItems="center">
          <Heading as="h1" size="4xl">
            Book Info Page
          </Heading>
          <Flex width="60%" marginTop="50px" marginBottom="50px">
            <Select
              defaultValue="title"
              width="150px"
              size="lg"
              marginRight="10px"
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </Select>
            <Input size="lg" placeholder="Search Book" />
            <IconButton
              onClick={onSearch}
              marginLeft="10px"
              size="lg"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Flex>
          <Stack width="80%" alignItems="center">
            {sample.map((item) => (
              <BookItem
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                price={item.price}
                quantity={item.quantity}
                location={item.location}
                eBookAvailable={item.eBookAvailable}
              />
            ))}
          </Stack>
        </Flex>
      </>
    </Layout>
  );
};

export default BookInfoPage;
