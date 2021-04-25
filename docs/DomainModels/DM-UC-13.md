# Domain Model for UC-13: Automated Due Management

## Extracting the Responsibilities

| Responsibility Description                                                                            | Type | Concept Name          |
| ----------------------------------------------------------------------------------------------------- | ---- | --------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts. | D    | Controller            |
| Form specifying the request parameter for book issues record retrieval.                               | K    | Check Request         |
| Prepare a database query that retrieve all the records about book issues from the database.           | D    | Database Connection   |
| Filter the retrieved records to match the criteria of overdue.                                        | D    | Postprocessor         |
| Update the Restrict Request in the database.                                                          | D    | Archiver              |
| Data of guests' information for storing restriction of guests.                                        | K    | Restrict Request      |
| Data of E-books' information to be removed from the guest's E-book issue list.                        | K    | E-book Return Request |
| Contents of notification that includes the information of upcoming due of book issue.                 | K    | Notification Contents |
| Make Notification Contents and convey to Actors.                                                      | D    | Notification Builder  |

## Extracting the Associations

| Concept 1            |     | Concept 2             | Association Description                                                                      | Association name |
| -------------------- | --- | --------------------- | -------------------------------------------------------------------------------------------- | ---------------- |
| Controller           | ⬌   | Database Connection   | Database Connection passes search requests to Database Connection.                           | conveys requests |
| Controller           | ⬌   | Notification Builder  | Controller passes notification build request to Notification Builder.                        | conveys requests |
| Controller           | ⬌   | Postprocessor         | Controller passes postprocessing request to Postprocessor.                                   | conveys requests |
| Controller           | ⬌   | Archiver              | Controller passes archiving requests to Archiver.                                            | conveys requests |
| Database Connection  | ⬌   | Postprocessor         | Database Connection passes the result of searching to Postprocessor for postprocessing data. | provides data    |
| Archiver             | ⬌   | Database Connection   | Archiver requests Database Connection to store Restrict Request or E-book Return Request.    | requests save    |
| Postprocessor        | ⬌   | Notification Builder  | Postprocessor passes the data of notification to be sent to Notification Builder.            | provides data    |
| Notification Builder | ⬌   | Notification Contents | Notification Builder generates Notification Contents which will be sent by actors            | generates        |
| Archiver             | ⬌   | Restrict Request      | Archiver generates Restrict Request which will be stored to database.                        | generates        |
| Archiver             | ⬌   | E-book Return Request | Archiver generates E-book Return Request which will be stored to database.                   | generates        |

## Extracting the Attributes

| Concept               | Attributes               | Attribute Description                                             |
| --------------------- | ------------------------ | ----------------------------------------------------------------- |
| Check Request         | Check Request parameters | current date                                                      |
| Notification Contents | guest's name             | guest's name whose issue's due is upcoming                        |
| Notification Contents | book's name              | book's name of which issue's due is upcoming                      |
| Notification Contents | issue period             | period of issue whose due is upcoming                             |
| Notification Contents | guest's phone number     | guest's phone number where the notification to be sent            |
| Notification Contents | guest's e-mail           | guest's email where the notification to be sent                   |
| Restrict Request      | guest's ID               | guest's ID which is the ID of guest who will be restricted        |
| E-book Return Request | guest's ID               | guest's ID which is the ID of guest who have overdue E-book issue |
| E-book Return Request | issue's ID               | issue's ID which is the ID of overdue issue                       |
| Archiver              | Post Processing Criteria | current date for judging overdue of upcoming due                  |
