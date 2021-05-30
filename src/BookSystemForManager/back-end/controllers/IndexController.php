<?php
require 'function.php';

const JWT_SECRET_KEY = "TEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEYTEST_KEY";

$res = (object)array();
header('Content-Type: json');
header("Access-Control-Allow-Origin: *");
$req = json_decode(file_get_contents("php://input"));
try {
    addAccessLogs($accessLogs, $req);
    switch ($handler) {
        case "index":
            echo "Test";
            break;
        case "ACCESS_LOGS":
            //            header('content-type text/html charset=utf-8');
            header('Content-Type: text/html; charset=UTF-8');
            getLogs("./logs/access.log");
            break;
        case "ERROR_LOGS":
            //            header('content-type text/html charset=utf-8');
            header('Content-Type: text/html; charset=UTF-8');
            getLogs("./logs/errors.log");
            break;
        /*
         * API No. 4
         * API Name : 테스트 API
         * 마지막 수정 날짜 : 19.04.29
         */
        case "getUsers":
            http_response_code(200);

            $res->result = getUsers();
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "테스트 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;
        /*
         * API No. 5
         * API Name : 테스트 Path Variable API
         * 마지막 수정 날짜 : 19.04.29
         */
        case "getUserDetail":
            http_response_code(200);

            $res->result = getUserDetail($vars["userIdx"]);
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "테스트 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;
        /*
         * API No. 6
         * API Name : 테스트 Body & Insert API
         * 마지막 수정 날짜 : 19.04.29
         */
        case "createUser":
            http_response_code(200);

            // Packet의 Body에서 데이터를 파싱합니다.
            $userID = $req->userID;
            $pwd_hash = password_hash($req->pwd, PASSWORD_DEFAULT); // Password Hash
            $name = $req->name;

            $res->result = createUser($userID, $pwd_hash, $name);
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "테스트 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;


        case "managerLogin":
            http_response_code(200);

            if($req->ID == null && $req->password == null)
            {
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "로그인 정보 없음";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $ID = $req->ID;
            $password = $req->password;

            if(!isExistManagerID($ID))
            {
                $res->isSuccess = FALSE;
                $res->code = 201;
                $res->message = "존재하지 않는 ID 정보입니다.";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                break;
            }

            // 1) 로그인 시 email, password 받기
            if (!isValidManager($ID, $password)) { // JWTPdo.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 202;
                $res->message = "비밀번호 정보가 잘못되었습니다.";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            // 2) JWT 발급
            // Payload에 맞게 다시 설정 요함, 아래는 Payload에 userIdx를 넣기 위한 과정
            $managerIdx = getManagerIdx($ID);  // JWTPdo.php 에 구현
            $jwt = getJWT($managerIdx, JWT_SECRET_KEY); // function.php 에 구현

            $res->result->jwt = $jwt;
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "매니저 로그인 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "addBooks":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if($jwt == null) {
                $res->isSuccess = FALSE;
                $res->code = 201;
                $res->message = "토큰이 없습니다.";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $title = $req->title;
            $author = $req->author;
            $description = $req->description;
            $bookCoverImageUrl = $req->bookCoverImageUrl;
            $eBookFileUrl = $req->eBookFileUrl;
            $category = $req->category;
            $quantity = $req->quantity;

            addBooks($title, $author, $description, $bookCoverImageUrl, $eBookFileUrl, $category, $quantity);
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "책 추가 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "searchGuests":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $ID = $_GET["ID"];
            $name = $_GET["name"];

            if($ID == NULL){
                $res->result = getGuestsByName($name);
            }
            else{
                $res->result = getGuestByID($ID);
            }
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "게스트 검색 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "searchBooks":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $title = $_GET["title"];
            $author = $_GET["author"];

            if($title == NULL){
                $res->result = getBooksByAuthor($author);
            }
            else{
                $res->result = getBooksByTitle($title);
            }
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "책 검색 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "issueBooks":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $guestIdx = $req->guestIdx;
            $issueBookList = $req->issueBookList;

            issueBooks($guestIdx, $issueBookList);

            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "책 대출 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "guestIssueInfo":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $res->result = getGuestIssueInfo($vars['guestIdx']);
            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "게스트 책 대출 정보 조회 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;

        case "returnBooks":
            http_response_code(200);

            $jwt = $_SERVER["HTTP_X_ACCESS_TOKEN"];

            if (!isValidJWT($jwt, JWT_SECRET_KEY)) { // function.php 에 구현
                $res->isSuccess = FALSE;
                $res->code = 200;
                $res->message = "유효하지 않은 토큰";
                echo json_encode($res, JSON_NUMERIC_CHECK);
                addErrorLogs($errorLogs, $res, $req);
                return;
            }

            $guestIdx = $req->guestIdx;
            $returnBookList = $req->returnBookList;

            returnBooks($guestIdx, $returnBookList);

            $res->isSuccess = TRUE;
            $res->code = 100;
            $res->message = "책 반납 성공";
            echo json_encode($res, JSON_NUMERIC_CHECK);
            break;
    }
} catch (\Exception $e) {
    return getSQLErrorException($errorLogs, $e, $req);
}
