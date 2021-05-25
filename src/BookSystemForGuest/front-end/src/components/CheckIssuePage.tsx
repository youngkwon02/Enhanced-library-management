import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import IssueItem, { IssueItemProps } from "./IssueItem";
import Layout from "./Layout";

const onSearch = () => {
  console.log("Search Clicked");
};

const CheckIssuePage = () => {
  const sample: IssueItemProps[] = [
    {
      id: 1,
      title: "Book 1",
      author: "Author 1",
      bookType: "e-book",
      issueStart: "2021-04-11",
      issueEnd: "2021-04-25",
      calculatedFine: 5000,
      eBookReadable: false,
    },
    {
      id: 2,
      title: "Book 2",
      author: "Author 2",
      bookType: "e-book",
      issueStart: "2021-05-11",
      issueEnd: "2021-05-25",
      calculatedFine: 0,
      eBookReadable: true,
    },
    {
      id: 3,
      title: "Book 3",
      author: "Author 3",
      bookType: "paper",
      issueStart: "2021-05-11",
      issueEnd: "2021-05-25",
      calculatedFine: 0,
      eBookReadable: false,
    },
    {
      id: 4,
      title: "Book 4",
      author: "Author 4",
      bookType: "e-book",
      issueStart: "2021-05-14",
      issueEnd: "2021-05-28",
      calculatedFine: 0,
      eBookReadable: true,
    },
    {
      id: 5,
      title: "Book 5",
      author: "Author 5",
      bookType: "paper",
      issueStart: "2021-05-01",
      issueEnd: "2021-05-15",
      calculatedFine: 3000,
      eBookReadable: false,
    },
  ];
  return (
    <Layout>
      <>
        <Flex width="100%" direction="column" alignItems="center">
          <Heading as="h1" size="4xl">
            Check Issue Info Page
          </Heading>
          <Tabs
            isFitted
            variant="enclosed"
            width="80%"
            marginTop="50px"
            marginBottom="50px"
          >
            <TabList>
              <Tab>Paper Book</Tab>
              <Tab>E-Book</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Stack width="100%" alignItems="center">
                  {sample
                    .filter((item) => item.bookType === "paper")
                    .map((item) => (
                      <IssueItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        bookType={item.bookType}
                        issueStart={item.issueStart}
                        issueEnd={item.issueEnd}
                        calculatedFine={item.calculatedFine}
                        eBookReadable={item.eBookReadable}
                      />
                    ))}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack width="100%" alignItems="center">
                  {sample
                    .filter((item) => item.bookType === "e-book")
                    .map((item) => (
                      <IssueItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        author={item.author}
                        bookType={item.bookType}
                        issueStart={item.issueStart}
                        issueEnd={item.issueEnd}
                        calculatedFine={item.calculatedFine}
                        eBookReadable={item.eBookReadable}
                      />
                    ))}
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </>
    </Layout>
  );
};

export default CheckIssuePage;
