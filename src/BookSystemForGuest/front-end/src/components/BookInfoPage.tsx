import React, { useState } from "react";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
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
  eBookAvailable: boolean;
};

const BookItem = ({ id, title, author, eBookAvailable }: BookItemProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalBody, setModalBody] = useState<string>("");
  const handleBookItemClick = () => {
    onOpen();
    setModalBody(`id: ${id},  title: ${title}, author: ${author}`);
  };
  return (
    <Flex onClick={handleBookItemClick} width="100%" cursor="pointer">
      <Image src="https://via.placeholder.com/150" />
      <Flex width="100%" background="gray.200">
        Book Information
      </Flex>
      <DetailInfoModal
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        modalBody={modalBody}
        eBookAvailable={eBookAvailable}
      />
    </Flex>
  );
};

const BookInfoPage = () => {
  const sample: BookItemProps[] = [
    { id: 1, title: "Book 1", author: "Author 1", eBookAvailable: true },
    { id: 2, title: "Book 2", author: "Author 2", eBookAvailable: true },
    { id: 3, title: "Book 3", author: "Author 3", eBookAvailable: false },
    { id: 4, title: "Book 4", author: "Author 4", eBookAvailable: true },
    { id: 5, title: "Book 5", author: "Author 5", eBookAvailable: false },
  ];
  return (
    <Layout>
      <>
        <Flex width="100%" direction="column" alignItems="center">
          <Heading as="h1" size="4xl" isTruncated>
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
