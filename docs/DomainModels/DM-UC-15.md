# Domain Model for UC-15: Check Guest Info

## Extracting the Responsibilities

| Responsibility Description | Type | Concept Name |
| -------------------------- | ---- | ------------ |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts. | D | Controller |
| Render the retrieved user list result into an HTML document for sending to actor's Web browser for display. | D | Page Maker |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions. | K | Interface Page |
| Prepare a database query to response the actor's request and retrieve records from the database. | D | Database Connection |
| Form specifying the search parameters for database record retrieval. | K | Search Request |


## Extracting the Associations

| Concept 1           |    | Concept 2           | Association Description | Association Name |
| ------------------- | -- | ------------------- | ----------------------- | ---------------- |
| Controller          | ⬌ | Page Maker          | Controller passes requests to Page Maker and receives back pages prepared for displaying. | conveys requests |
| Page Maker          | ⬌ | Interface Page      | Page Maker prepares the Interface Page. | prepares |
| Controller          | ⬌ | Interface Page      | Controller posts Interface Page to actor's Web browser. | posts |
| Controller          | ⬌ | Search Request      | Controller receives Search Request. | receives |
| Controller          | ⬌ | Database Connection | Controller passes search requests to Database Connection. | conveys requests |
| Database Connection | ⬌ | Page Maker          | Database Connection passes the retrieved guest data to Page Maker to render them for display. | provides data |


## Extracting the Attributes

| Concept | Attributes | Attribute Description |
| ------- | ---------- | --------------------- |
| Search Request | search parameters | user's id or name |
| Page Maker | search parameters | Copied from search request; needed to filter the retrieved records to match the actor's search criteria. |
| Page Maker | user information | name, generated ID, phone number, password, profile image, and e-mail |
