# Domain Model for UC-09: Issue E-book

## Extracting the Responsibilities

| Responsibility Description                                                                                          | Type | Concept Name             |
| ------------------------------------------------------------------------------------------------------------------- | ---- | ------------------------ |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.               | D    | Controller               |
| Form specifying the e book issue request parameters for database record archiving.                                  | K    | Issue Request            |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K    | Interface Page           |
| Render the archiving result into an HTML document for sending to actor's Web browser for display.                   | D    | Page Maker               |
| Prepare a database query that store e-book issue data.                                                              | D    | Database Connection      |
| Archive the e-book Issue Requests in the database and assign it a tracking number.                                  | D    | Archiver                 |
| Data of e-book issue information for storing book id, guest's id, issue period to database.                         | K    | E-book issue Information |

## Extracting the Associations

| Concept 1  |     | Concept 2                | Association Description                                                                                         | Association name |
| ---------- | --- | ------------------------ | --------------------------------------------------------------------------------------------------------------- | ---------------- |
| Controller | ⬌   | Page Maker               | Controller passes requests to Page Maker and receives back pages prepared for displaying.                       | conveys requests |
| Page Maker | ⬌   | Database Connection      | Database Connection passes the result of storing e-book info to Page Maker to render them for display.          | provide data     |
| Page Maker | ⬌   | Interpace Page           | Page Maker prepares the Interface Page.                                                                         | prepares         |
| Controller | ⬌   | Archiver                 | Controller passes issue requests to Archiver to process issue requests and store issue information to database. | conveys requests |
| Archiver   | ⬌   | E-book issue Information | Archiver generates E-book issue Information.                                                                    | generates        |
| Archiver   | ⬌   | Database Connection      | Archiver requests Database Connection to store E-book issue Information into the database.                      | provide data     |

## Extracting the Attributes

| Concept                  | Attributes              | Attribute Description                                                                                                         |
| ------------------------ | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Issue Request            | user's identity         | Used to determine the actor’s credentials, which in turn specify what kind of data this actor is authorized to view and send. |
| Issue Request            | issue parameters        | Book's id, guest's id.                                                                                                        |
| Page Maker               | archiving result        | Result of archiving.                                                                                                          |
| E-book issue Information | tracking number         | Allows tracking of the E-book issue Information.                                                                              |
| E-book issue Information | book's id               | book's id which is issued as e-book.                                                                                          |
| E-book issue Information | guest's id              | guest's id which is id of the guest who issued e-book.                                                                        |
| E-book issue Information | period                  | period of e-book issue which is calculated by the system.                                                                     |
| Archiver                 | current tracking number | Needed to assign a tracking number to e-book issue information.                                                               |
