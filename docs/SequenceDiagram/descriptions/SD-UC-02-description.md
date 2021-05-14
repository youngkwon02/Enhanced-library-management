## Responsibility

- Page View: 로그아웃 버튼을 제공하는 페이지 인터페이스에 대한 페이지 컴포넌트이다. 로그아웃에 대한 요청을 서버로 보낸다.
- Login View: 로그인 화면 인터페이스에 대한 페이지 컴포넌트이다.
- Controller: 세션을 종료시키고 다른 responsibility로 작업을 전달한다. 또한, 요청에 대한 응답을 처리하여 어떤 정보를 화면에 표시할지 선택하고, 렌더링한다.

## Communications

- get: Logout Request를 Controller에 전달하고 요청한 정보를 반환받는다.
- destroySession: 로그아웃을 위해 세션을 종료시킨다.
- render: 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not choosing Variations

- V1: V1에는 채택된 sequence diagram과 다르게 Logout responsibility가 있어 세션 종료를 Logout responsibility에서 하게 된다. 그런데 이렇게 되면 Controller의 역할이 Logout의 결과를 전달받고 로그인 화면을 렌더링해주는 일밖에 하지 않는다. 세선 종료를 Controller에서 하더라도 cohesion에 큰 영향을 주지 않는다고 판단하여 더 짧은 communication chain을 형성할 수 있도록 Logout responsibility를 제거했다.
- V2: V2에서는 페이지 컴포넌트들을 하나로 통합해 표현한다. 이에 Controller가 로그인 화면을 렌더링할 때 Login View responsibility로 render 메시지를 주는 것이 아닌 Page View responsibility로 redirect('Login') 메시지를 준다. 이렇게 표현하면 여러 페이지 렌더링이 필요한 다른 sequence diagram의 경우 render의 파라미터만 바뀌고 표현하는 인터페이스가 모호해져서 통일성을 위해 채택하지 않았다.
