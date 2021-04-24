# Domain Model for UC-01: Log in

## Extracting the Responsibilities

| Responsibility Description | Type | Concept Name |
| -------------------------- | ---- | ------------ |
| Coordinate actions of all concepts associated with a use case, a logical grouping of use cases, or the entire system and delegate the work to other concepts. | D | Controller |
| Render the retrieved records into an HTML document for sending to actor’s Web browser for display. | D | Page Maker |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of the previous actions. | K | Interface Page |
| Container for authentication data which an user inputs, such as ID, Password, and user type. | K | Account Request |
| Prepare a database query that perfectly matches the input ID and user type and retrieve a record from the database. | D | Database Connection |
| Verify whether the ID and password entered by the user are valid. | D | Key Checker |
| Log all interactions with the system in persistent storage. | D | Logger |
| Compare the count of the unsuccessful attempt in log and the maximum allowed number. | D | Attempt Checker |
| Block the login attempt if 5 unsuccessful attempts. | D | Controller |


## Extracting the Associations

| Concept Pair | Association Description | Association Name |
| ------------ | ----------------------- | ---------------- |
| Controller ↔ Page Maker | Controller passes requests to Page Maker and receives back pages prepared for displaying. | conveys requests |
| Page Maker ↔ Interface Page | Page Maker prepares the Interface Page. | prepares |
| Controller ↔ Database Connection | Controller passes account request to Database Connection. | conveys requests |
| Controller ↔ Logger | Controller passes the login attempt record to Logger. | provides data |
| Logger ↔ Database Connection | Logger passes a new log to Database Connection. | writes log |
| Database Connection ↔ Key Checker | Database Connection passes the retrieved record to Key Checker. | provides data |
| Database Connection ↔ Attempt Checker | Database Connection passes the count of wrong attempts from log table to Attempt Checker. | provides data |
| Attempt Checker ↔ Controller | Attempt Checker passes the information whether the count of failed attempts exceeds the maximum allowed number. | provides data |
| Controller ↔ Logger | Controller passes the login attempt record to Logger. | provides data |


## Extracting the Attributes

| Concept | Attributes | Attribute Description |
| ------- | ---------- | --------------------- |
| Account Request | user's identity | user's id and password |
| Attempt Checker | attempt information | number of failed attempts and maximum allowed number |
| Logger | user's identity | user's id |
| Logger | timestamp | when the action is attempted |
