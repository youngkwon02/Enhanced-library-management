import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { IconButton, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import BookItem, { BookItemProps } from "./BookItem";
import Layout from "./Layout";
import { useAsync } from "react-async";
import axios from "axios";
import { getBookList } from "../lib/api";

// TODO: make parameter to getBookList

// TODO: make post request for e book issuing

const BookInfoPage = () => {
  const [value, setValue] = useState<string>("");
  const [criteria, setCriteria] = useState<string>("title");

  const { data, error, isLoading, reload } = useAsync<any>({
    promiseFn: getBookList,
    criteria,
    value,
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  const handleCriteriaChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    setCriteria(event.target.value);
  };

  const onSearch = () => {
    reload();
    console.log("Search Clicked");
  };

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
              onChange={handleCriteriaChange}
            >
              <option value="title">Title</option>
              <option value="author">Author</option>
            </Select>
            <Input
              value={value}
              onChange={handleChange}
              size="lg"
              placeholder="Search Book"
            />
            <IconButton
              onClick={onSearch}
              marginLeft="10px"
              size="lg"
              aria-label="Search database"
              icon={<SearchIcon />}
            />
          </Flex>
          <Stack width="80%" alignItems="center">
            {isLoading ? (
              <Flex>Loading...</Flex>
            ) : error ? (
              <Flex>Error on loading</Flex>
            ) : (
              <>
                {data?.map((item: any, index: number) => (
                  <BookItem
                    key={index}
                    id={item.bookId}
                    title={item.title}
                    author={item.author}
                    imgLink={item.image_path}
                    price={item.price}
                    quantity={item.quantity}
                    location={item.location}
                    eBookAvailable={item.eBookAvailable}
                  />
                ))}
              </>
            )}
          </Stack>
        </Flex>
      </>
    </Layout>
  );
};

export default BookInfoPage;
