# Domain Model for UC-16: Restrict Guest
## Extracting the Responsibilities

| Responsibility Description | Type | Concept Name |
| -------------------------- | ---- | ------------ |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts. | D | Controller |
| Render the retrieved records into an HTML document for sending to actor’s Web browser for display. | D | Page Maker |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions. | K | Interface Page |
| Prepare a database query that matches the actor's search criteria, retrieve the records from the database, and pass the information to the database so that the database updates the matching record. | D | Database Connection |
| Form specifying the search parameters for database record retrieval. | K | Search Request |
| Form specifying the restrict parameters for database record update. | K | Restrict Request |


## Extracting the Associations

| Concept Pair | Association Description | Association Name |
| ------------ | ----------------------- | ---------------- |
| Controller ↔ Page Maker | Controller passes requests to Page Maker and receives back pages prepared for displaying | conveys requests |
| Page Maker ↔ Database Connection | Database Connection passes the retrieved data to Page Maker to render them for display | provides data |
| Page Maker ↔ Interface Page | Page Maker prepares the Interface Page | prepares |
| Controller ↔ Database Connection | Controller passes search request and restrict request to Database Connection | conveys requests |


## Extracting the Attributes

| Concept | Attributes | Attribute Description |
| ------- | ---------- | --------------------- |
| Search Request | user's identity | Used to determine the actor's credentials, which is in turn specify what kind of data this actor is authorized to view and update. |
| Search Request | search parameters | guest's id or name |
| Restrict Request | update parameters | guest's id, restriction state, and restricted period |
| Page Maker | search parameters | Copied from search request; needed to filter the retrieved records to match the actor's search criteria. |
| Page Maker | result of search | List of matching records |
| Page Maker | result of update | needed to show whether the update succeeds. |
