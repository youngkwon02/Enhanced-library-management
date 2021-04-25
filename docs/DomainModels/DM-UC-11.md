# Domain Model for UC-11: E book reading

## Extracting the Responsibilities
| Responsibility Description                                                                                          | Type | Concept Name        |
| ------------------------------------------------------------------------------------------------------------------- | ---- | ------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.               | D    | Controller          |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K    | Interface Page      |
| Render the retrived records into an HTML document for sending to actor's Web browser for display.                   | D    | Page Maker          |
| Prepare a database query that get the actor's login information from the database.                                  | D    | Database Connection |
| Show e book content on e book viewer.                                                                               | D    | Viewer Connection   |
| Used to determine which e book actor want to view.                                                                  | K    | Click Request       |

## Extracting the Associations
| Concept 1           | _   | Concept 2           | Association Description                                                                    | Association name |
| ------------------- | --- | ------------------- | ------------------------------------------------------------------------------------------ | ---------------- |
| Controller          | ⬌   | Page Maker          | Controller passes requests to Page Maker and receives back pages prepared for displaying.  | conveys requests |
| Controller          | ⬌   | Database Connection | Controller passes  click request generated from the interface page to Database Connection. | conveys requests |
| Page Maker          | ⬌   | Database Connection | Database Connection passes the retrieved data to Page Maker to render them for display.    | provide data     |
| Page Maker          | ⬌   | Interpace Page      | Page Maker prepares the Interface Page.                                                    | prepares         |
| Database Connection | ⬌   | Viewer Connection   | Viewer receives content from DB connection.                                                | provide data     |

## Extracting the Attributes
| Concept            | Attributes     | Attribute Description                                         |
| ------------------ | -------------- | ------------------------------------------------------------- |
| Viewer  Connection | E book content | E book content passed to guest.                               |
| Click Request      | userIdentity   | userIdentity to use to query issue information from database. |
| Click Request      | E book ID      | Used to determine which e book actor want to view.            |