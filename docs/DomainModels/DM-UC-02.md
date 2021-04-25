# Domain Model for UC-02: Logout

## Extracting the Responsibility
| Responsibility Description  |  Type | Concept Name |
|---|---|---|
|Coordinate actions of concepts associated with this use case and delegate the work to other concepts. | D   | Controller |
|Form specifying the logout request parameter. | K   | Logout Request |
|HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K   | Interface Page |
|Render the archiving result into an HTML document for sending to actor's Web browser for display. | D   | Page Maker |           


## Extracting the Associations
|  Concept1  | _ | Concept2 | Association Description | Association name |
|-----|-----|-----|-----|-----|
| Controller  | ⬌ | Page Maker  | Controller passes requests to Page Maker and receives back pages prepared for displaying. | conveys requests|
| Controller  | ⬌ | Logout Reqeust | Controller receives a logout request. | receives |
| Page Maker  | ⬌ | Interface Page | Page Maker prepares the Interface Page. | prepares |
