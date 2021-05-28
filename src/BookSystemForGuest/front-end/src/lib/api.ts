import axios from "axios";

export const getBookList = async ({ criteria, value, session }: any) => {
  if ((criteria === "title" || criteria === "author") && value !== "") {
    const { data } = await axios.get(
      `http://15.165.152.195:8080/api/books/${criteria}s/${encodeURI(value)}`,
      {
        headers: {
          Authorization: "Bearer " + session,
        },
      },
    );
    return data;
  }
  const { data } = await axios.get(`http://15.165.152.195:8080/api/books`, {
    headers: {
      Authorization: "Bearer " + session,
    },
  });
  return data;
};

export const postEBookIssue = async ({ guestId, bookId, session }: any) => {
  const response = await axios.post(
    `http://15.165.152.195:8080/api/issues`,
    {
      guestId: `${guestId}`,
      bookId: bookId,
    },
    {
      headers: {
        Authorization: "Bearer " + session,
      },
    },
  );
  return response;
};

export const getIssueList = async ({ userId, session }: any) => {
  const { data } = await axios.get(
    `http://15.165.152.195:8080/api/issues/${userId}`,
    {
      headers: {
        Authorization: "Bearer " + session,
      },
    },
  );
  return data;
};

export const signIn = async ({ id, password }: any) => {
  const { data } = await axios.post(
    "http://15.165.152.195:8080/api/authenticate",
    {
      username: id,
      password,
    },
  );

  return data;
};
