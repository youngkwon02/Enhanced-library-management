# Use Case: Add Book

## **Related Requirements**

 REQ-03, REQ-04, and REQ-05

## **Initiating Actors**

 Manager

## **Actor's Goal**

 To add a book in library system

## **Participating Actors**

Database 

## **Preconditions**

- Manager is logged in to the system and is shown the "Add Books" menu.
- There is at least one book to add.

## **Postconditions**

- Manager modifies the quantity of a book.
- User looks up book information.


## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                                                           |
|-----------|---|--------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | 1 | Include Login (UC-1)                                                                                                                                   |
| →         | 2 | Manager clicks the "Add Books" menu.                                                                                                                   |
| ←         | 3 | System shows the page with input fields for adding a book.                                                                                             |
| →         | 4 | Manager inputs the information of a book such as a title, author, cover image, description, price, quantity, location in the library, and E-book file. |
| →         | 5 | Manager clicks "add" button.                                                                                                                           |
| ←         | 6 | System prepares a database query that inserts book information(include ID which is made automatically) into the database.                              |
| →         | 7 | Database returns about success.                                                                                                                        |
| ←         | 8 | System shows a message about success.                                                                                                                  |


## Flow of Events for Extensions (Alternate Scenarios)
7a. The book already exists.
| Direction | n | Actor Action                                               |
|-----------|---|------------------------------------------------------------|
| →         | 1 | Database returns a record that book already exists.        |
| ←         | 2 | System alerts with a message that the book already exists. |
|           | 3 | Same as in Step 4 above.                                   |
