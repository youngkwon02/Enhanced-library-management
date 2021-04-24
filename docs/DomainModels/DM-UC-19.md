# Domain Model for UC-19: Reply Feedback

## Extracting the Responsibility
| Responsibility Description  |  Type | Concept Name |
|---|---|---|
|Coordinate actions of concepts associated with this use case and delegate the work to other concepts. | D   | Controller |
|Render the archiving result into an HTML document for sending to actor's Web browser for display. | D   | Page Maker |
|HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K   | Interface Page |
|Retrieve records from the database or create a new record at the database. | D   | Database Connection |
|Form specifying the parameters for database retrieval.| K   | Feedback Request|                                           |Form specifying the parameters for database update.| K   | Reply Request|           


## Extracting the Associations
|  Concept1  | _ | Concept2 | Association Description | Association name |
|-----|-----|-----|-----|-----|
| Controller  | ⬌ | Page Maker  | Controller passes requests to Page Maker and receives back pages prepared for displaying.  | conveys requests  |
| Page Maker  | ⬌ | Interface Page | Page Maker prepares the Interface Page.  |  prepares |
| Controller | ⬌  | Database Connection  | Controller sends a request for getting and replying about the feedbacks to the Database Connection.  | conveys requests |
| Database Connection  | ⬌  | Page Maker | Database Connection passes the  result of the retrieved data to allow Page Maker to render it for display.  | provides data |


## Extracting the Attributes
| Concept  | Attributes | Attribute Description |
|---|---|---|
|Feedback Request | user's identity | Used to determine the actor's credentials, which in turn specify what kind of data this actor is authorized to view. |
|Feedback Request | parameters | guest id, feedback id, feedback content |
| Reply Request | user's identity | Used to determine the actor's credentials, which in turn specify what kind of data this actor is authorized to create. |
| Reply Request | update parameters | feedback id, reply id, reply content |
| Page Maker | records list | List of records for showing feedback |
| Page Maker | result of update | needed to show whether the record is created properly to users. |