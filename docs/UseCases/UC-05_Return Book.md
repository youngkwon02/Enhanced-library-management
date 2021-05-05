# Use Case: Return Book

## **Related Requirements**

REQ-17, REQ-18, REQ-19, REQ-20, REQ-22

## **Initiating Actors**

Manager

## **Actor's Goal**

To return books issued by a guest to the library

## **Participating Actors**

Database, Guest

## **Preconditions**

- Manager is logged in to the system and is shown a "Book Return" tab at the "Calculate Fine" menu.
- Guest brings at least a book to return to the library.

## **Postconditions**

- The returned book is removed from the issued book list of the guest.
- The returned book becomes available for issue.
- If the guest is not restricted, the guest can issue more books as many as the number of returned books.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                             |
|-----------|---|----------------------------------------------------------------------------------------------------------|
|           | 1 | Include Login (UC-1)                                                                                     |
| →         | 2 | Manager clicks the ‘Book Return’ tab at the ‘Calculate Fine’ menu.                                       |
|           | 3 | Include Check Issue Info (UC-7)                                                                          |
| →         | 4 | Manager clicks the ‘add’ button to add books to the returning book list.                                 |
| →         | 5 | Manager checks the total late fee of the books from the returning book list and charges it to the guest. |
| →         | 6 | Manager clicks the ‘return’ button to complete the return process.                                       |
| ←         | 7 | System prepares a database query that changes the returning state of books.                              |
