# Domain Model for UC-07: Check issue information (Manager)

## Extracting the Responsibilities
| Responsibility Description | Type  | Concept Name                                                                                                       |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts.| D | Controller |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions.    | K | Interface Page |
| Render the retrieved user list result into an HTML document for sending to actor's Web browser for display.   | D | Page Maker|
| Form specifying the input parameters for database archiving.  | K | Checking Request |
| Prepare a database query that get the actor's login information from the database.  | D | Database Connection |

## Extracting the Associations
| Concept 1 |  | Concept 2 | Association Description  | Association name                                                                                  |
| --------- | - | -        | - | - |
| CheckingRequest | ⬌ | Controller | Controller receives book add requests. | receives |
| Controller | ⬌ | DB Connect | Controller passes  click request generated from the interface page to Database Connection | convey requests |
| Controller | ⬌ | PageMaker | Controller passes requests to Page Maker and receives back pages prepared for displaying. | convey requests |
| Page Maker | ⬌ | DB Connect | Database Connection passes the retrieved data to Page Maker to render them for display | provides data |
| Page Maker | ⬌ | Interface Page | Page Maker prepares the Interface Page | prepares |

## Extracting the Attributes
| Concept | Attributes | Attribute Description                                                                                   |
| --------- | - |  - |
| Checking Request | Guest's id |  Request contains the id of the guest the manager wants to check |
