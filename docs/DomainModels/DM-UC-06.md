# Domain Model for UC-6: Manager Overdue Guest

## Extracting the Responsibilities
| Responsibility Description                                                                                               | Type | Concept Name          |
| ------------------------------------------------------------------------------------------------------------------------ | ---- | --------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.                    | D    | Controller            |
| Prepare a database query that best matches the actor’s request criteria, retrieve and fix the records from the database. | D    | Database Connection   |
| Render the archiving result into an HTML document for sending to actor's Web browser for display.                        | D    | Page Maker            |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions.      | K    | Interface Page        |
| Request for setting criteria of long-overdue days.                                                                       | K    | Set Criteria Request  |
| Request for notification to overdue guests by E-mail or SMS.                                                             | K    | Notification Request  |
| Make notification contents and convey to actors.                                                                         | D    | Notification Builder  |
| Contents of notification that includes the information of encouraging overdue guests to return books.                    | K    | Notification Contents |


## Extracting the Associations
| Concept1             | _   | Concept2              | Association Description                                                                                  | Association name |
| -------------------- | --- | --------------------- | -------------------------------------------------------------------------------------------------------- | ---------------- |
| Controller           | ⬌   | Database Connection   | Controller passes requests to Database Connection.                                                       | conveys requests |
| Database Connection  | ⬌   | Page Maker            | Database Connection passes the retrieved data to Page Maker to render them for displaying.               | provides data    |
| Page Maker           | ⬌   | Interface Page        | Page Maker prepares the Interface Page.                                                                  | prepares         |
| Controller           | ⬌   | Page Maker            | Controller passes requests to Page Maker and receives back pages prepared for displaying.                | conveys requests |
| Controller           | ⬌   | Interface Page        | Controller posts pages to Interface Page for displaying.                                                 | posts            |
| Set Criteria Request | ⬌   | Controller            | Controller receives Request for setting long-overdue criteria.                                           | receives         |
| Notification Request | ⬌   | Controller            | Controller receives Request for notification to overdue guests by E-mail or SMS.                         | receives         |
| Controller           | ⬌   | Notification Builder  | Controller passes requests to Notification Builder and receives back notifications prepared for sending. | conveys requests |
| Notification Builder | ⬌   | Notification Contents | Notification Builder prepares the Notification Contents.                                                 | prepares         |
| Controller           | ⬌   | Notification Contents | Controller posts notifications to Notification Contents for sending.                                     | posts            |


## Extracting the Attributes
| Concept              | Attributes            | Attribute Description                     |
| -------------------- | --------------------- | ----------------------------------------- |
| Notification Request | notification methods  | E-mail, SMS                               |
| Set Criteria Request | long-overdue criteria | criteria for checking long-overdue guests |