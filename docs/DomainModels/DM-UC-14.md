# Domain Model for UC-14: Add Guest
## Extracting the Responsibilities

| Responsibility Description | Type | Concept Name |
| -------------------------- | ---- | ------------ |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts. | D | Controller |
| Render the retrieved records into an HTML document for sending to actor’s Web browser for display. | D | Page Maker |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions. | K | Interface Page |
| Generate a new ID for a guest. | D | ID Generator |
| Form specifying the search parameters for database record retrieval. | K | Search Request |
| Verify whether the guest whose information are entered is new. | D | Newcomer Checker |
| Container for user's data, such as name, generated ID, phone number, password, profile image, and e-mail. | K | User Information |
| Form specifying the parameters for database record creation. | K | Add Request |
| Prepare a database query that perfectly matches the entered information, retrieve a record that matches the information from the database and pass the information to the database so that the database creates a new record using the user information. | D | Database Connection |

## Extracting the Associations

| Concept Pair | Association Description | Association Name |
| ------------ | ----------------------- | ---------------- |
| Controller ↔ Page Maker | Controller passes requests to Page Maker and receives back pages prepared for displaying. | conveys requests |
| Page Maker ↔ Interface Page | Page Maker prepares the Interface Page. | prepares |
| ID Generator ↔ Page Maker | ID generator passes a new ID to Page Maker to render it for display. | provides data |
| Controller ↔ User Information | Controller generates User Information. | generates |
| Controller ↔ Database Connection | Controller passes search request and add request to Database Connection. | conveys requests |
| Add Request ↔ User Information | Add Request includes User Information. | includes |
| Database Connection ↔ Newcomer Checker | Database Connection passes a record that corresponds to a search request to Newcomer Checker. | provides data |
| Newcomer Checker ↔ Page Maker | Newcomer Checker passes the information whether the guest is new or not to Page Maker to render it for display. | provides data |
| Database Connection ↔ Page Maker | Database Connection passes the information whether the new record is created successfully to Page Maker. to render it for display. | provides data |

## Extracting the Attributes

| Concept | Attributes | Attribute Description |
| ------- | ---------- | --------------------- |
| ID Generator | ID | automatically generated digits |
| User Information | user's data | name, generated ID, phone number, password, profile image, and e-mail |
| Add Request | user's data | copied from user information |
| Search Request | search parameters | name and phone number from user information |
