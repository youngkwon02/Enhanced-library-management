## Responsibility

- Issue Info Page View : 자신의 대출 정보를 볼 수 있는 페이지 컴포넌트이다. 대출된 책을 리스트 형태로 제공하며, 내부의 탭을 활용하여 종이책과 E-book 대출 정보 중 원하는 것을 선택하여 볼 수 있다.
- View Controller : 어떤 컴포넌트를 화면에 표시할지 제어하는 컨트롤러 컴포넌트이다. 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.
- Controller:  back-end responsibility들의 actions을 조정하고 다른 responsibility로 작업을 전달한다.
- Authentication Checker: 사용자가 인증되었는지 확인한다.
- Service: Transaction과 데이터베이스에서 가져온 정보를 저장한 객체의 작업 순서를 보장한다.
- Database Connection: 데이터베이스에 접근한다.

## Communications

- get: Controller에 Click Request를 Controller에 전달하고 요청한 정보를 반환받는다.
- Authenticate: 사용자가 인증되었는지 확인하고 그 결과를 반환한다.
- find(Service): 요청에 맞는 정보를 가져오는 find(Database Connection)을 실행한다. 그리고 Transaction과 데이터베이스에서 가져온 정보를 저장한 객체의 작업 순서를 보장한다.
- find(Database Connection): 데이터베이스에서 요청에 맞는 정보를 가져오고 그 결과를 반환한다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not choosing V1

- Service responsibility는 Transaction과 데이터베이스에서 가져온 정보를 저장한 객체의 작업 순서를 보장하는 역할을 한다. V1을 보면 Service에서 set()을 통해 View Controller의 Issue Info를 초기화하는 작업을 한다. 이 작업은 위에서 언급한 Service와 연관이 없는 작업이고 Cohesion을 낮추기 때문에 채택하지 않았다.
- Controller 에서 각각의 Responsibility의 작업을 요청하면, 각각의 Responsibility에 대해 수정이 일어났을 때 서로 영향을 끼치지 않지만, Responsibility의 작업들이 연쇄되어 일어나면 하나의 Responsibility에 대해 수정이 일어났을 때 연관된 모든 Responsibility를 수정해야 하므로 채택하지 않았다.
