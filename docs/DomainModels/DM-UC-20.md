# Domain Model for UC-20: Send Feedback

## Extracting the Responsibility
| Responsibility Description  |  Type | Concept Name |
|---|---|---|
|Coordinate actions of concepts associated with this use case and delegate the work to other concepts. | D   | Controller |
|Render the archiving result into an HTML document for sending to actor's Web browser for display. | D   | Page Maker |
|HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K   | Interface Page |
|Create a new record at the database. | D   | Database Connection |
|Form specifying the feedback parameters for database update.| K   | Feedback Update Request|    


## Extracting the Associations
|  Concept1  | _ | Concept2 | Association Description | Association name |
|-----|-----|-----|-----|-----|
| Controller  | ⬌ | Page Maker  | Controller passes requests to Page Maker and receives back pages prepared for displaying.  | conveys requests  |
| Controller  | ⬌ | Feedback Update Request  | Controller receives Feedback Update Request| receives  |
| Page Maker  | ⬌ | Interface Page | Page Maker prepares the Interface Page.  |  prepares |
| Controller | ⬌  | Database Connection  | Controller passes feedback update request to Database Connection. | conveys requests |
| Database Connection  | ⬌  | Page Maker | Database Connection passes whether a record is created properly or not to Page Maker. | provides data |


## Extracting the Attributes
| Concept  | Attributes | Attribute Description |
|---|---|---|
|Feedback Update Request | user's authority | Used to determine the actor's credentials, which in turn specify what kind of data this actor is authorized to create |
|Feedback Update Request | update parameters | anonymously or not, user id, feedback id, feedback content |
| Page Maker | update parameters | Copied from feedback update request |
| Page Maker | result of update | needed to show whether a new record is created properly |
