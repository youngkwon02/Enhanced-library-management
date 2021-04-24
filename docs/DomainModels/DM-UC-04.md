
## Extracting the Responsibilities
| Responsibility Description | Type  | Concept Name                                                                                                       |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts.| D | Controller |
| Form specifying the search parameters for database record retrieval.  | 2 | Search Request |
| Form specifying the data of paper-book issue information for storing book id, guest's id, issue period to database.  | 3 | Issue Request |
| Render the retrieved user list result into an HTML document for sending to actor's Web browser for display.   | 4 | Page Maker|
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions.    | 5 | Interface Page |
| Prepare a database query to response the actor's request.   | 6 | Database Connection |
| Archive the e-book Issue Requests in the database and assign it a tracking number.  | 7 | Archiver |

## Extracting the Associations
| Concept 1 |  | Concept 2 | Association Description  | Association name                                                                                  |
| --------- | - | -        | - | - |
| Search Request | ⬌ | Controller | Controller receives Search Request. | receives |
| Controller | ⬌ | DB Connect | DB Connect receives search requests that matched with actor’s search criteria. | convey requests |
| Controller | ⬌ | Archiver | Controller passes issue requests to Archiver | convey requests |
| Controller | ⬌ | Page Maker | Controller passes request to Page Maker and receives back pages prepared for displaying. | provides data |
| DB Connect | ⬌ | Issue Request | DB Connect stores the information about who and what books are in 'Search Request' into Issuing request. | provides data |
| Archiver | ⬌ | DB Connect | Archiver stores information of the 'Issue request' into the database. If the guest is restricted, storing doesn't proceed. | provides data |
| Archiver | ⬌ | Issue Request | Archiver generates issue request. | generates |
| Page Maker | ⬌ | Interface Page | Page Maker prepares the Interface Page. | prepares |

## Extracting the Attributes
| Concept | Attributes | Attribute Description                                                                                   |
| --------- | - |  - |
| Search Request | user's authorization |  Authenticate user's identity and authorize only if user is manager. |
