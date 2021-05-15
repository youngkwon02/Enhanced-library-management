# Designs

You can see our design documentations for each sub-groups here.

## Sub Groups

- [User Management](./UserManagement)
- [Book System For Manager](./BookSystemForManager)
- [Book System For Guest](./BookSystemForGuest)

## About diagrams of Search Book and Search Guest

기존에는 Use Case에서 존재하지 않았던 Search Book과 Search Guest를 별도의 케이스로 나누어서 만들었습니다.  
해당 기능을 Ref 하여 사용하는 Use Case들이 존재하였고, Sub Group이 다르더라도 중복되는 같은 기능을 두 번 구현하는 것이 맞는 것인가에 대한 팀원들과의 토의 이후, 해당 부분을 별도의 케이스로 나누어서 작성하였습니다.  
이는 Use Case를 처음에 충분히 고려하지 못해서 생긴 결과라고 판단하였습니다.
