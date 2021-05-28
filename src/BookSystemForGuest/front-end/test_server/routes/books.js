var express = require("express");
var router = express.Router();

const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
    price: 10000,
    quantity: 3,
    location: "A1",
    eBookAvailable: true,
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
    price: 11000,
    quantity: 4,
    location: "A2",
    eBookAvailable: true,
  },
  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
    price: 12000,
    quantity: 5,
    location: "A3",
    eBookAvailable: false,
  },
  {
    id: 4,
    title: "Book 4",
    author: "Author 4",
    price: 13000,
    quantity: 6,
    location: "A4",
    eBookAvailable: true,
  },
  {
    id: 5,
    title: "Book 5",
    author: "Author 5",
    price: 14000,
    quantity: 7,
    location: "A5",
    eBookAvailable: false,
  },
];

// 모든 유저 정보를 제공하는 라우팅
router.get("/", function (req, res, next) {
  res.json(books);
});

// // 경로 매개변수를 사용한 라우팅: 특정 유저 정보 제공
// router.get("/:id", function (req, res, next) {
//   user = users.find((u) => u.id === parseInt(req.params.id));
//   res.send(user);
// });

module.exports = router;
