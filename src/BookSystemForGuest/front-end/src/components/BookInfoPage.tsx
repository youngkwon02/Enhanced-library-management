import { SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Stack } from "@chakra-ui/layout";
import { IconButton, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import BookItem, { BookItemProps } from "./BookItem";
import Layout from "./Layout";
import { useAsync } from "react-async";
import axios from "axios";
import { getBookList } from "../lib/api";
import Cookies from "js-cookie";

// TODO: make post request for e book issuing

const BookInfoPage = (props: any) => {
  const [value, setValue] = useState<string>("");
  const [criteria, setCriteria] = useState<string>("title");
  const session = Cookies.get("session");

  const { data, error, isLoading, reload } = useAsync<any>({
    promiseFn: getBookList,
    criteria,
    value,
    session,
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  const handleCriteriaChange: React.ChangeEventHandler<HTMLSelectElement> = (
    event,
  ) => {
    setCriteria(event.target.value);
  };

  const onSearch = (e: any) => {
    e.preventDefault();
    reload();
    // console.log("Search Clicked");
  };

  return (
    <Layout>
      <>
        <Flex width="100%" direction="column" alignItems="center">
          <Heading as="h1" size="4xl">
            Book Info Page
          </Heading>

          <form onSubmit={onSearch}>
            <Flex width="100%" marginTop="50px" marginBottom="50px">
              <Select
                width="150px"
                defaultValue="title"
                size="lg"
                marginRight="10px"
                onChange={handleCriteriaChange}
              >
                <option value="title">Title</option>
                <option value="author">Author</option>
              </Select>
              <Input
                width="500px"
                value={value}
                onChange={handleChange}
                size="lg"
                placeholder="Search Book"
              />
              <IconButton
                type="submit"
                marginLeft="10px"
                size="lg"
                aria-label="Search database"
                icon={<SearchIcon />}
              />
            </Flex>
          </form>

          <Stack width="80%" alignItems="center">
            {isLoading ? (
              <Flex>Loading...</Flex>
            ) : error ? (
              <Flex>Error on loading</Flex>
            ) : (
              <>
                {data && data.length > 0 ? (
                  data.map((item: any, index: number) => (
                    <BookItem
                      key={index}
                      userId={props.userId}
                      id={item.bookid}
                      title={item.title}
                      author={item.author}
                      imgLink={item.image_path}
                      price={item.price}
                      quantity={item.quantity}
                      location={item.location}
                      eBookAvailable={true}
                    />
                  ))
                ) : (
                  <Flex>No search result</Flex>
                )}
              </>
            )}
          </Stack>
        </Flex>
      </>
    </Layout>
  );
};

export default BookInfoPage;
