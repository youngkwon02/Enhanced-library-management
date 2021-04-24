# Use Case: Check Issue Info(Guest)

## **Related Requirements**

Req36, Req37, Req44

## **Initiating Actors**

Guest

## **Actor's Goal**

To check which book a guest has issued.

## **Participating Actors**

Database

## **Preconditions**
- Guest logged in the system.
- Guest can see 'check my issue' button on menu.
## **Postconditions**

- Guest gets the information about the book issue of ownself.


## Flow of Events for Main Success Scenario
| Direction | n   | Actor Action                                                                                                                                                                                                                                                                                                                                   |
| --------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           | 1   | Include Login(UC-1)                                                                                                                                                                                                                                                                                                                            |
| →         | 2   | Guest clicks 'check my issue' button.                                                                                                                                                                                                                                                                                                          |
| ←         | 3   | System shows 'paper-book tab' and 'e-book tab' to guest.                                                                                                                                                                                                                                                                                       |
| →         | 4   | Guest clicks 'paper-book tab' or 'e-book tab'.                                                                                                                                                                                                                                                                                                 |
| ←         | 5   | System prepares a database query that matches the guest's paper book issue information or guest's e book issue information and retrieves the records from the Database.                                                                                                                                                                        |
| →         | 6   | Database returns the matching records.                                                                                                                                                                                                                                                                                                         |
| ←         | 7   | System (b)renders the records for display and shows paper-book issue information of the guest, such as title, issue start date, due date, overdue state, late fee, and 'extend' button to a guest. For e-books, show the same issue information as paper book issue information, and additionally show the 'Read on Viewer' button to a guest. |

## Flow of Events for Extensions (Alternate Scenarios)
7b. Guest has overdue book.
| Direction | n   | Actor Action                                                                                                                               |
| --------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ←         | 1   | System (b) detect  that guest had restricted by overdue books, System shows paper-book issue information of guest without 'extend' button. |