import axios from "axios";

export const getBookList = async ({ criteria, value }: any) => {
  console.log("criteria", criteria, "value", value);
  if ((criteria === "title" || criteria === "author") && value !== "") {
    const { data } = await axios.get(
      `http://15.165.152.195:8080/books/${criteria}s/${encodeURI(value)}`,
    );
    return data;
  }
  const { data } = await axios.get(`http://15.165.152.195:8080/books`);
  return data;
};

export const getIssueList = async ({ userId }: any) => {
  const { data } = await axios.get(
    `http://15.165.152.195:8080/issues/${userId}`,
  );
  return data;
};

const fakeAuth = () =>
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(true);
    }, 1000);
  });

export const signIn = async ({ username, password }: any) => {
  //   const { data } = await axios.post("http://localhost:4000/api/signin", {
  //     username,
  //     password,
  //   });

  const data = await fakeAuth();
  return data;
};
