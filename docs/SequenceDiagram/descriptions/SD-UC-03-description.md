## Responsibility

- AddBooks View : 처음 Add Book Menu로 진입하면 띄워주는 view 컴포넌트. 여러 개의 input parameter로 이루어져 있다.ㅌ
- View Controller : 어떤 컴포넌트를 화면에 표시할지 제어하는 컨트롤러 컴포넌트이다. 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.
- Controller : back-end responsibility들의 actions을 조정하고 다른 responsibility로 작업을 전달한다.
- Local File Connection : 사용자의 디바이스에 접근해 파일을 받아온다.
- Authenticator : 사용자가 인증되었는지 확인한다.
- Archiver : 데이터베이스에 저장할 정보들을 정제하고 로그를 기록한다.
- Database Connection : 데이터베이스에 접근한다.

## Communication

- post: book add request를 Controller에 전달하고 전달한 정보의 처리결과를 반환받는다.
- Authenticate: 사용자가 인증되었는지 확인하고 그 결과를 반환한다.
- setInfo : 사용자가 입력한 정보들을 request로 보낼 수 있게 view controller로 전달한다.
- convey request : 사용자의 request를 Archiver나 DB Connection으로 전달한다.
- save(Database Connection): 데이터베이스에서 전달받은 정보를 저장하고 그 결과를 반환한다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not selecting variation 1,3

- 사용자의 request는 front-end인 view controller에서 완성된 형태로 만든 뒤 back에 요청해야 높은 응집도를 유지할 수 있다고 생각했다.
- back controller에서 바로 사용자에게 alert 메시지를 보내는 것 역시 각 responsibility의 역할이 침해된다고 생각했다.

## The reason for not selecting variation 2

- 응집도를 생각하면 Archiver에선 request 정보 정제와 로그 기록만 하고 다시 controller에게 반환하는 것이 옳지만 Archiver 내의 로그 기록이 DB Connection과 직접 연결되는 게 기능 확장성 면에서 더 유리하다 생각했다.
