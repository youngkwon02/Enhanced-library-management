## Responsibility

- Guest List View : 검색한 Guest List 결과를 보여주는 페이지 컴포넌트이다.
- Specific Guest View : 특정 Guest의 상세 정보를 조회한 결과를 보여주는 페이지 컴포넌트이다.
- Guest Book Issue List View : 특정 Guest의 책 대출 정보를 조회한 결과를 보여주는 페이지 컴포넌트이다.
- View Controller : 어떤 컴포넌트를 화면에 표시할지 제어하는 컨트롤러 컴포넌트이다. 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.
- Controller :  back-end responsibility들의 actions을 조정하고 다른 responsibility로 작업을 전달한다.
- Authenticator : 사용자가 인증되었는지 확인한다.
- Database Connection : 데이터베이스에 접근한다.

## Communications

- select specific guest request : select specific guest request를 View Controller에 전달하고 전달한 정보의 처리 결과를 반환받는다.
- get guest book issue list request : get guest book issue list request를 View Controller에 전달하고 전달한 정보의 처리 결과를 반환받는다.
- get guest book issue list : View Controller에서 Controller로 특정 Guest의 책 대출 정보를 요청하고, 요청한 정보의 처리 결과를 반환받는다.
- Authenticate : 사용자가 인증되었는지 확인하고 그 결과를 반환한다.
- retrieve : Controller에서 요청 받은 request를 바탕으로 Database에서 정보의 처리 결과를 반환받는다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.