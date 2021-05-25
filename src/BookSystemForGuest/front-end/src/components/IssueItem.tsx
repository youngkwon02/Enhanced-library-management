import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { DateYMDString } from "../types/date";

export type IssueItemProps = {
  id: number;
  title: string;
  author: string;
  bookType: "paper" | "e-book";
  issueStart: DateYMDString;
  issueEnd: DateYMDString;
  calculatedFine: number;
  eBookReadable?: boolean;
};

const IssueItem = ({
  id,
  title,
  author,
  issueStart,
  issueEnd,
  calculatedFine,
  eBookReadable,
}: IssueItemProps) => {
  return (
    <Flex width="100%">
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
              <b>Issue start date</b> : {issueStart}
            </Box>
            <Box mr="20px">
              <b>Issue end date</b> : {issueEnd}
            </Box>
            <Box mr="20px">
              <b>Calculated fine</b> : {calculatedFine}
            </Box>
            {eBookReadable && (
              <Button colorScheme="teal" size="lg">
                Read E-Book
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default IssueItem;
