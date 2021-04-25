## Extracting the Responsibilities
| Responsibility Description | Type  | Concept Name                                                                                                       |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.| D | Controller |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions.    | K | Interface Page |
| Render the retrieved user list result into an HTML document for sending to actor's Web browser for display.   | D | Page Maker|
| Prepare a database query to response the actor's request.  | D | Database Connection |
| Archive the book add Requests (include, information such as id, title, author, cover image, description, price, quantity, location in the library, E-book file) in the database.  | D | Archiver |
| Form specifying the input parameters for database archiving.   | K | Book Add Request |
| Check whether the inforamtion of 'book add request' already exists in the database.  | D | Request Checker |
| Provide a window screen for adding input which is a book cover image and E-book file in local storage.  | D | Local Connection |

## Extracting the Associations
| Concept 1 |  | Concept 2 | Association Description  | Association name                                                                                  |
| --------- | - | -        | - | - |
| Controller | ⬌ | Page Maker | Controller requests Page Maker to be prepared for displaying. | prepares |
| Controller | ⬌ | Archiver | Controller passes requests to Archiver.  | conveys requests |
| Controller | ⬌ | Request Checker | Controller conveys request to Request Checker | conveys requests |
| Book Add Request | ⬌ | Controller | Controller receives book add requests. | receives |
| Request Checker | ⬌ | Database Connection | Request Checker checks the database for whether the new id of the request already exists. | conveys requests |
| Archiver | ⬌ | Database Connection | Archiver generates id and stores information of the 'book add request' into the database. | saves data |
| Page Maker | ⬌ | Interface Page | Page Maker prepares the Interface Page. | prepares |
| Book Add Request | ⬌ | Local Connection | Local Connection provides a book cover image and E-book file to Book Add Request. | conveys requests |

## Extracting the Attributes
| Concept | Attributes | Attribute Description                                                                                   |
| --------- | - |  - |
| Book Add Request | user's authorization |  Authenticate user's identity and authorize only if user is manager. |
| Book Add Request | input parameter |  title, author, cover image, description, price, quantity, location in the library, E-book file |
| PageMaker | input parameter |  Copied from search request. |
| Local Connection | user's authorization |  Image of book cover and E-book file. |
| Archiver | user's authorization |  Automatically generated id of the book. |
