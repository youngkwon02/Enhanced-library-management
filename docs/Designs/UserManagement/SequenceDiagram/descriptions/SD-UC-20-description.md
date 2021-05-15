## Responsibility

- Send Feedback View : Feedback을 작성하기 위한 인터페이스이다.
   사용자의 Feedback 전송을 서버에 요청한다.
- Controller: View에게 받은 요청을 처리하기 위해 다른 Responsibility로 작업을 전달한다.
- ID Generator: Feedback을 작성 및 전송하는 과정 중, Feedback에 대한 Seq를 자동으로 생성한다.
- Authentication Checker: 사용자가 인증되었는지 확인한다.
- Database Connection: 데이터베이스에 접근한다.

## Communications

- get: Send Feedback request를 Controller에 전달하고 처리 결과를 반환받는다.
- Authenticate: 사용자가 인증되었는지 확인하고 그 결과를 반환한다.
- saveFeedback(is_anonymous, user_id, title, content, FeedbackID): 사용자가 작성한 Feedback을 데이터베이스에 저장하고, 처리 결과를 반환한다.
- genereateID: 새로운 Feedback에 대한 Seq를 생성 및 반환한다.
- render : 응답에 대해서 적절한 처리 이후 사용자 인터페이스를 생성한다.

## The reason for not choosing V1

- Database Connection의 Responsibilty는 Database에 새로운 정보를 기록하는 것이다.<br>
  V1에서는 Database Connection이 Controller로 부터 Save Feedback Request를 전달받으면 직접 ID Generator로부터 새로운 Feedback ID를 발급받아 Database에 Recording한다.<br>
  위의 Variation으로 구현할 경우, Controller의 point에서는 Save Feedback Request에 대한 단 한번의 요청만이 요구되지만, Database Connection이 본래의 역할인 DB Recording을 제외한 새로운 책임을 가지게 되므로 해당 Variation을 체택하지 않았다.
