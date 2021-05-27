import { Flex, Heading, Stack } from "@chakra-ui/layout";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useAsync } from "react-async";
import IssueItem, { IssueItemProps } from "./IssueItem";
import Layout from "./Layout";

const getIssueList = async () => {
  const response = await axios.get(`http://localhost:3300/issues`);
  return response.data;
};

const CheckIssuePage = () => {
  const { data, error, isLoading } = useAsync<IssueItemProps[]>({
    promiseFn: getIssueList,
  });

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
                  {isLoading ? (
                    <Flex>Loading...</Flex>
                  ) : error ? (
                    <Flex>Error on loading</Flex>
                  ) : (
                    <>
                      {data
                        ?.filter((item) => item.bookType === "paper")
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
                    </>
                  )}
                </Stack>
              </TabPanel>
              <TabPanel>
                <Stack width="100%" alignItems="center">
                  {isLoading ? (
                    <Flex>Loading...</Flex>
                  ) : error ? (
                    <Flex>Error on loading</Flex>
                  ) : (
                    <>
                      {data
                        ?.filter((item) => item.bookType === "e-book")
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
                    </>
                  )}
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
