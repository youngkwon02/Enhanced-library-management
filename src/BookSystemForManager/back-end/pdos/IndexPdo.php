<?php

//READ
function getUsers()
{
    $pdo = pdoSqlConnect();
    $query = "SELECT * from Manager;";

    $st = $pdo->prepare($query);
    //    $st->execute([$param,$param]);
    $st->execute([]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

//READ
function getUserDetail($userIdx)
{
    $pdo = pdoSqlConnect();
    $query = "select * from Users where userIdx = ?;";

    $st = $pdo->prepare($query);
    $st->execute([$userIdx]);
    //    $st->execute();
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res[0];
}

//READ
function isValidUserIdx($userIdx)
{
    $pdo = pdoSqlConnect();
    $query = "select EXISTS(select * from Users where userIdx = ?) exist;";

    $st = $pdo->prepare($query);
    $st->execute([$userIdx]);
    //    $st->execute();
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res[0]['exist'];
}


function createUser($ID, $pwd, $name)
{
    $pdo = pdoSqlConnect();
    $query = "INSERT INTO Users (ID, pwd, name) VALUES (?,?,?);";

    $st = $pdo->prepare($query);
    $st->execute([$ID, $pwd, $name]);

    $st = null;
    $pdo = null;

}

function isExistManagerID($ID)
{
    $pdo = pdoSqlConnect();
    $query = "select count(1) as exist from Manager where ID = ? AND isDeleted = 'N';";

    $st = $pdo->prepare($query);
    $st->execute([$ID]);
    //    $st->execute();
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res[0]['exist'];
}

function isValidManager($ID, $password)
{
    $pdo = pdoSqlConnect();
    $query = "select count(1) as exist from Manager where ID = ? AND password = ? AND isDeleted = 'N';";

    $st = $pdo->prepare($query);
    $st->execute([$ID, $password]);
    //    $st->execute();
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res[0]['exist'];
}

function addBooks($title, $author, $description, $bookCoverImageUrl, $eBookFileUrl, $category, $quantity)
{
    $pdo = pdoSqlConnect();
    $query = "INSERT INTO Book (bookTitle, author, description, bookCoverImageUrl, eBookFileUrl, category, quantity, maxQuantity) VALUES (?,?,?,?,?,?,?,?);";

    $st = $pdo->prepare($query);
    $st->execute([$title, $author, $description, $bookCoverImageUrl, $eBookFileUrl, $category, $quantity, $quantity]);

    $st = null;
    $pdo = null;
}

function getGuestByID($guestIdx)
{
    $pdo = pdoSqlConnect();
    $query = "select *
from (
         select Guest.guestIdx, guestName, phoneNo, email, profileImageUrl, isOverdue
         from Guest
                  inner join(select guestIdx, case when returnDate < date(now()) then 'o' else 'x' end as isOverdue
                             from GuestIssueState) OverdueState
                            on OverdueState.guestIdx = Guest.guestIdx
         where Guest.guestIdx = ?
           AND isDeleted = 'N'
         order by isOverdue
         limit 18446744073709551615) as order_overdue
group by guestIdx;";

    $st = $pdo->prepare($query);
    $st->execute([$guestIdx]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

function getGuestsByName($guestName)
{
    $pdo = pdoSqlConnect();
    $query = "select *
from (
         select Guest.guestIdx, guestName, phoneNo, email, profileImageUrl, isOverdue
         from Guest
                  inner join(select guestIdx, case when returnDate < date(now()) then 'o' else 'x' end as isOverdue
                             from GuestIssueState) OverdueState
                            on OverdueState.guestIdx = Guest.guestIdx
         where Guest.guestName like concat('%', ?, '%')
           AND isDeleted = 'N'
         order by isOverdue
         limit 18446744073709551615) as order_overdue
group by guestIdx;";

    $st = $pdo->prepare($query);
    $st->execute([$guestName]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

function getBooksByAuthor($author)
{
    $pdo = pdoSqlConnect();
    $query = "select bookIdx, bookTitle, author, bookCoverImageUrl, category, quantity
from Book
where author like concat('%', ?, '%')
  and isDeleted = 'N';";

    $st = $pdo->prepare($query);
    $st->execute([$author]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

function getBooksByTitle($title)
{
    $pdo = pdoSqlConnect();
    $query = "select bookIdx, bookTitle, author, bookCoverImageUrl, category, quantity
from Book
where bookTitle like concat('%', ?, '%')
  and isDeleted = 'N';";

    $st = $pdo->prepare($query);
    $st->execute([$title]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

function issueBooks($guestIdx, $issueBookList)
{

    for($i = 0;$i < count($issueBookList);$i++) {

        $pdo = pdoSqlConnect();
        $query = "insert into GuestIssueState(guestIdx, bookIdx, returnDate)
values (?, ?, date_add(now(), interval 7 day));";

        $st = $pdo->prepare($query);
        $st->execute([$guestIdx, $issueBookList[$i]->bookIdx]);

        $st = null;
        $pdo = null;

        $pdo = pdoSqlConnect();
        $query = "update Book set quantity = quantity - 1 where bookIdx = ? and quantity > 0 and isDeleted = 'N';";

        $st = $pdo->prepare($query);
        $st->execute([$issueBookList[$i]->bookIdx]);

        $st = null;
        $pdo = null;
    }
}

function getGuestIssueInfo($guestIdx)
{
    $pdo = pdoSqlConnect();
    $query = "select issueIdx,
       GuestIssueState.guestIdx,
       guestName,
       GuestIssueState.bookIdx,
       bookTitle,
       author,
       concat(date_sub(returnDate, interval 7 day), ' ~ ', returnDate) as issuePeriod,
       case when returnDate < date(now()) then 'o' else 'x' end        as overdueStatus,
       case
           when TIMESTAMPDIFF(day, returnDate, date(now())) > 0
               then TIMESTAMPDIFF(day, returnDate, date(now())) * 100
           else 0 end                                                  as calculatedFine
from GuestIssueState
         inner join(select guestIdx, guestName from Guest) GuestInfo
                   on GuestInfo.guestIdx = GuestIssueState.guestIdx
         inner join(select bookIdx, bookTitle, author from Book) BookInfo
                   on BookInfo.bookIdx = GuestIssueState.bookIdx
where GuestIssueState.guestIdx = ?
  and isReturned = 'N';";

    $st = $pdo->prepare($query);
    $st->execute([$guestIdx]);
    $st->setFetchMode(PDO::FETCH_ASSOC);
    $res = $st->fetchAll();

    $st = null;
    $pdo = null;

    return $res;
}

function returnBooks($guestIdx, $returnBookList)
{

    for($i = 0;$i < count($returnBookList);$i++) {

        $pdo = pdoSqlConnect();
        $query = "update GuestIssueState set isReturned = 'Y' where issueIdx = ? and guestIdx = ? and bookIdx = ?;";

        $st = $pdo->prepare($query);
        $st->execute([$returnBookList[$i]->issueIdx, $guestIdx, $returnBookList[$i]->bookIdx]);

        $st = null;
        $pdo = null;

        $pdo = pdoSqlConnect();
        $query = "update Book set quantity = quantity + 1 where bookIdx = ? and quantity < maxQuantity and isDeleted = 'N';";

        $st = $pdo->prepare($query);
        $st->execute([$returnBookList[$i]->bookIdx]);

        $st = null;
        $pdo = null;
    }
}
// CREATE
//    function addMaintenance($message){
//        $pdo = pdoSqlConnect();
//        $query = "INSERT INTO MAINTENANCE (MESSAGE) VALUES (?);";
//
//        $st = $pdo->prepare($query);
//        $st->execute([$message]);
//
//        $st = null;
//        $pdo = null;
//
//    }


// UPDATE
//    function updateMaintenanceStatus($message, $status, $no){
//        $pdo = pdoSqlConnect();
//        $query = "UPDATE MAINTENANCE
//                        SET MESSAGE = ?,
//                            STATUS  = ?
//                        WHERE NO = ?";
//
//        $st = $pdo->prepare($query);
//        $st->execute([$message, $status, $no]);
//        $st = null;
//        $pdo = null;
//    }

// RETURN BOOLEAN
//    function isRedundantEmail($email){
//        $pdo = pdoSqlConnect();
//        $query = "SELECT EXISTS(SELECT * FROM USER_TB WHERE EMAIL= ?) AS exist;";
//
//
//        $st = $pdo->prepare($query);
//        //    $st->execute([$param,$param]);
//        $st->execute([$email]);
//        $st->setFetchMode(PDO::FETCH_ASSOC);
//        $res = $st->fetchAll();
//
//        $st=null;$pdo = null;
//
//        return intval($res[0]["exist"]);
//
//    }
