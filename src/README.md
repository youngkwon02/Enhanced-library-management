# Source Directory

## SubGroups
- [Book System for Manager](./BookSystemForManager)
- [Book System for Guest](./BookSystemForGuest)
- [User Management](./UserManagement)

## About authentication and databse
개발을 진행하면서, standalone demo를 만들어야 한다는 조건을 어떻게 구현해야하는 것인지 고민이 많았습니다.  
토의 결과, 일단 standalone 으로 작동하는 소프트웨어를 만들자고 합의하였고, 설계 부분에서는 Ref 해서 사용하는 book search나 authentication 부분도 각 서브그룹별로 각자 구현하기로 하였습니다. 웹의 형태를 가지고 있어서 클라이언트 - 서버의 형태를 띄게 되는데, 서버가 상시 구동중이 아니라면 Standalone으로 구동할 때 공통으로 사용하는(혹은 빌려서 사용하는) 부분에서 문제가 생길 수 있다고 판단했기 때문입니다. 
