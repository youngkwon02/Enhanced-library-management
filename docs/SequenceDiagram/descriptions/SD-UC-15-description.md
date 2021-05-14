해당 Sequence diagram은 'Search Guest' Sequence diagram을 참조하는데, 이 두 sequence diagram은 responsibility를 명명하는 데에 차이가 있다. 이는 'Search Guest' sequence diagram은 Java로 구현을 진행할 sub group에서 제작했고, UC-15에 대응되는 해당 sequence diagram은 Python으로 구현을 진행할 sub group에서 제작했기 때문이다. 이에 'Search Guest' diagram의 controller와 view controller가 해당 sequence diagram에서는 controller로 통합되었다.

## Responsibility

- Menu Bar View: check guest info 메뉴 버튼을 제공하는 인터페이스에 대한 페이지 컴포넌트이다.
- Search Bar View: guest 검색창을 제공하는 인터페이스에 대한 페이지 컴포넌트이다. 검색 쿼리문에 대한 요청을 서버로 보낸다.
- Guest List View: guest들의 목록을 보여주는 인터페이스에 대한 페이지 컴포넌트이다. 검색어에 부합하는 guest 목록을 확인할 수 있다.
- Guest Detail View: guest에 대한 자세한 정보를 보여주는 인터페이스에 대한 페이지 컴포넌트이다.
- Controller: back-end responsibility들의 actions을 조정하고 다른 responsibility로 작업을 전달한다. 또한, 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.
- Authentication Checker: 사용자가 인증되었는지 확인한다.
- Database Connection: 데이터베이스에 접근해 Controller가 필요로 하는 작업을 수행한다.

## Communications

- get: Manager actor의 요청을 Controller에 전달하고 요청한 정보를 반환한다.
- render: 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.
- retrieve: 인자값으로 데이터베이스에서 필요한 쿼리를 찾아 반환한다.

## The reason for not choosing V1

- 해당 variation에서는 페이지 컴포넌트들을 하나로 통합해 표현한다. 이렇게 표현하면 render의 파라미터만 바뀌고 표현하는 인터페이스가 모호해져서 통일성을 위해 채택하지 않았다.
