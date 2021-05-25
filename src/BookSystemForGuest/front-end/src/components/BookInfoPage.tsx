import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { IconButton, Input, Select } from "@chakra-ui/react";
import React from "react";
import BookItem, { BookItemProps } from "./BookItem";
import Layout from "./Layout";

const onSearch = () => {
  console.log("Search Clicked");
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
