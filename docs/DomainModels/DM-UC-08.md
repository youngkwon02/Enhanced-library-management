# Domain Model for UC-08: Check Book Info

## Extracting the Responsibilities

| Responsibility Description                                                                                          | Type | Concept Name        |
| ------------------------------------------------------------------------------------------------------------------- | ---- | ------------------- |
| Coordinate actions of concepts associated with this use case and delegate the work to other concepts.               | D    | Controller          |
| Form specifying the search parameters for database record retrieval.                                                | K    | Search Request      |
| Render the retrived records into an HTML document for sending to actor's Web browser for display.                   | D    | Page Maker          |
| HTML document that shows the actor the current context, what actions can be done, and outcomes of previous actions. | K    | Interface Page      |
| Prepare a database query that best matches the actor's search criteria and retrieve the records from the database.  | D    | Database Connection |
| Filter and sort the retrieved records to match the actor’s search criteria.                                         | D    | Postprocessor       |

## Extracting the Associations

| Concept 1     |     | Concept 2           | Association Description                                                                     | Association name |
| ------------- | --- | ------------------- | ------------------------------------------------------------------------------------------- | ---------------- |
| Controller    | ⬌   | Page Maker          | Controller passes requests to Page Maker and receives back pages prepared for displaying.   | conveys requests |
| Postprocessor | ⬌   | Database Connection | Database Connection passes the retrieved data to Postprocessor to postprocess.              | provide data     |
| Page Maker    | ⬌   | Interpace Page      | Page Maker prepares the Interface Page.                                                     | prepares         |
| Controller    | ⬌   | Database Connection | Controller passes search requests to Database Connection.                                   | conveys requests |
| Controller    | ⬌   | Postprocessor       | Controller passes search requests' information to Postprocessor for filtering and sorting.  | conveys requests |
| Page Maker    | ⬌   | Postprocessor       | Postprocessor passes the filtered and sorted data to Page Maker to render them for display. | provide data     |

## Extracting the Attributes

| Concept        | Attributes       | Attribute Description                                                                                                |
| -------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------- |
| Search Request | user's identity  | Used to determine the actor's credentials, which in turn specify what kind of data this actor is authorized to view. |
| Search Request | search parameter | book's title, book's author, sorting criteria, filtering criteria.                                                   |
| Postprocessor  | search parameter | Copied from search request; needed to Filter and sort the retrieved records to match the actor's search criteria.    |
| Page Maker     | records list     | List of searched records for further investigation.                                                                  |
