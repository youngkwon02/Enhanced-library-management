var express = require("express");
var router = express.Router();

const issues = [
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

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(issues);
});

module.exports = router;
