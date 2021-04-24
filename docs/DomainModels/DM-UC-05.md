# Domain Model for UC-5: Return Book

## Extracting the Responsibilities
| Responsibility Description                                                                                               | Type | Concept Name        |
| ------------------------------------------------------------------------------------------------------------------------ | ---- | ------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.                    | D    | Controller          |
| Request for returning a book.                                                                                            | K    | Return Request      |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions.      | K    | Interface Page      |
| Render the archiving result into an HTML document for sending to actor's Web browser for display.                        | D    | Page Maker          |
| Prepare a database query that best matches the actor’s request criteria, retrieve and fix the records from the database. | D    | Database Connection |
| Archive the request in the database.                                                                                     | D    | Archiver            |


## Extracting the Associations
| Concept1            | _   | Concept2            | Association Description                                                                   | Association name |
| ------------------- | --- | ------------------- | ----------------------------------------------------------------------------------------- | ---------------- |
| Controller          | ⬌   | Database Connection | Controller passes requests to Database Connection.                                        | conveys requests |
| Database Connection | ⬌   | Page Maker          | Database Connection passes the retrieved data to Page Maker to render them for display.   | provides data    |
| Page Maker          | ⬌   | Interface Page      | Page Maker prepares the Interface Page.                                                   | prepares         |
| Controller          | ⬌   | Page Maker          | Controller passes requests to Page Maker and receives back pages prepared for displaying. | conveys requests |
| Controller          | ⬌   | Interface Page      | Controller posts pages to Interface Page for displaying.                                  | posts            |
| Controller          | ⬌   | Archiver            | Controller passes a list of returning records to Archiver which creates Return Request.   | conveys requests |
| Archiver            | ⬌   | Return Request      | Archiver generates Return Request.                                                        | generates        |
| Archiver            | ⬌   | Database Connection | Archiver requests Database Connection to update Return Request into the database.         | requests update  |


## Extracting the Attributes
| Concept        | Attributes   | Attribute Description                         |
| -------------- | ------------ | --------------------------------------------- |
| Return Request | records list | List of records selected for returning books. |