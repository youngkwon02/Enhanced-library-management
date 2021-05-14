## Responsibility

- Login View : Login을 하기위한 인터페이스이다.
   사용자의 Login data를 서버에 전송한다.
- AddBook View : 도서를 추가하기 위한 인터페이스이다.
로그인에 성공한 사용자가 Manager일 경우, Controller는 해당 View를 Render한다.
- SearchBook View : 도서를 검색하기 위한 인터페이스이다.
로그인에 성공한 사용자가 Guest일 경우, Controller는 해당 View를 Render한다.
- Controller: View에게 받은 요청을 처리하기 위해 다른 Responsibility로 작업을 전달한다.
- Token Generator: 로그인에 성공할 경우, 로그인 Token 생성 요청을 받아 처리한다.
- Database Connection: 데이터베이스에 접근한다.

## Communications

- newToken(): 사용자가 로그인에 성공하면 로그인 토큰을 반환한다.
- checkLoginData(user_type, id, pw): 사용자가 입력한 정보가 올바른 정보인지 데이터베이스에서 확인한다.
- get: LoginView request를 Controller에 전달하고 처리 결과를 반환받는다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not choosing V1

- Database Connection의 Responsibilty는 Controller로 부터 Login Data를 전달받으면 Valid data인지 여부를 확인하는 것이다.<br>
- V1에서는 Database Connection이 Valid 여부를 판단하여, valid하다면 Token Generator에게 Token생성에 대한 요청을 보내고, 요청을 받은 TokenGenerator는 Controller에게 신규 토큰을 발급해준다.
- 하지만 Controller가 DB Connection으로부터 LoginSuccess Signal을 받으면, Controller가 다시 Token Generator에게 토큰 발급 요청을 보내도록 처리하였다.
  Controller는 View에게 받은 요청을 처리하기 위해 다양한 작업을 필요로 하는 반면, DB Connection에게 DB접근 이상의 책임을 지우는 것을 피하기 위해 V1을 체택하지 않았다.
