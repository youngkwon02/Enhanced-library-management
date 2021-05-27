import axios from "axios";

export const getBookList = async () => {
  const { data } = await axios.get(`http://localhost:3300/books`);
  return data;
};

export const getIssueList = async ({ userId }: any) => {
  const { data } = await axios.get(`http://localhost:3300/issues/${userId}`);
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
