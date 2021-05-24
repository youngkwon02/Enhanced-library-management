import React from "react";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import Layout from "./Layout";
import { IconButton, Image, Input, Select } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const onSearch = () => {
  console.log("Search Clicked");
};

const BookItem = () => {
  return (
    <Flex width="100%">
      <Image src="https://via.placeholder.com/150" />
      <Flex width="100%" background="gray.200">
        Book Information
      </Flex>
    </Flex>
  );
};

const BookInfoPage = () => {
  return (
    <Layout>
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
          <BookItem />
          <BookItem />
          <BookItem />
          <BookItem />
        </Stack>
      </Flex>
    </Layout>
  );
};

export default BookInfoPage;
