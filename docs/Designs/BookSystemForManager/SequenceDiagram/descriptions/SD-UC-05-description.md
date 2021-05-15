## Responsibility

- Return Result View : 책 반납이 성공했는지 여부를 보여주는 페이지 컴포넌트이다.
- View Controller : 어떤 컴포넌트를 화면에 표시할지 제어하는 컨트롤러 컴포넌트이다. 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.
- Controller:  back-end responsibility들의 actions을 조정하고 다른 responsibility로 작업을 전달한다.
- Authenticator: 사용자가 인증되었는지 확인한다.
- Database Connection: 데이터베이스에 접근한다.

## Communications

- book return request: book return request를 View Controller에 전달하고 전달한 정보의 처리 결과를 반환받는다.
- return books : View Controller에서 Controller로 반납할 책의 정보를 전달하고, 전달한 정보의 처리 결과를 반환받는다.
- Authenticate: 사용자가 인증되었는지 확인하고 그 결과를 반환한다.
- retrieve: Controller에서 요청 받은 request를 바탕으로 Database에서 정보의 처리 결과를 반환받는다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not choosing V1

- View Controller는 화면에 어떤 컴포넌트를 표시할 지를 제어하는 컨트롤러 컴포넌트이다. V1에서는 View Controller가 returnResult를 통해 책의 반납 여부를 판단하고 이를 통해 어떤 형태의 Return Result View를 받아 올지를 결정한다. 이는 Cohesion을 낮출 뿐만 아니라 View Controller에서는 무조건 Return Result View를 화면에 표시하고 어떤 형태로 View를 표시할 지는 Return Result View가 판단하는 것이 좀 더 독립적이기 때문에 채택하지 않았다.