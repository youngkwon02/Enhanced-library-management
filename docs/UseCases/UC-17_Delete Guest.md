# Use Case: Delete Guest

## **Related Requirements**

REQ-6, REQ-7, REQ-8, REQ-9, REQ-10, REQ-29, REQ-30

## **Initiating Actors**

Manager

## **Actor's Goal**

To delete the guest from the system.

## **Participating Actors**

Database
 
## **Preconditions**

Manager is logged in the system and is shown a 'delete/restrict guest' menu.

## **Postconditions**

- The guest is deleted from the library system.
- The library system is no longer available to deleted guest.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager clicks the 'delete/restrict guest' menu. |
| ←         | 3 | System shows 'delete/restrict guest' page with an input field for searching guest. |
| →         | 4 | Manager inputs (a) id or (b) name of a guest for searching. |
| ←         | 5 | System (a) prepares a database query that best matches the actor's search input and (b) retrieves the records from the Database. |
| →         | 6 | Database returns the matching records. |
| ←         | 7 | System shows the list of guest information for each item with the 'delete' and 'restrict' buttons as a result of searching. |
| →         | 8 | Manager clicks the 'delete' button beside the information of a guest. |
| ←         | 9 | System verifies that the guest has no return issue. |
| ←         | 10 | System prepares a database query that perfectly matches the information of guest to be deleted. |
| →         | 11 | Database (a) removes the matching record using the query and (b) informs System of successful deletion. |
| ←         | 12 | System shows Manager a message that the deletion is successful. |


## Flow of Events for Extensions (Alternate Scenarios)
9a. The guest has not returned book yet.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detects error and (b) shows a message that the guest has not returned book yet. |
| →         | 2 | Manager clicks the 'delete' button despite of the warning message.
| ←         | 3 | System prepares database queries that perfectly match the information of guest to be deleted and the information of book the guest has not returned. |
| →         | 4 | Database (a) removes the matching guest record using the query, (b) subtracts the quantity of book that has not been returned from the total quantity of the book, and informs System of successful deletion and update. |
|           | 5 | System shows Manager a message that the deletion and update are successful. |
