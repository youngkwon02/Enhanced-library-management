# Use Case: Restrict Guest

## **Related Requirements**

REQ-6, REQ-7, REQ-8, REQ-9, REQ-10, REQ-31

## **Initiating Actors**

Manager

## **Actor's Goal**

To give disadvantage to a guest who has caused damage in the library

## **Participating Actors**

Database

## **Preconditions**

- Manager is logged in the system and is shown a 'delete/restrict guest' menu.

## **Postconditions**

- Guest who is restricted by manager cannot issue any books during the restricted period.

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
| →         | 8 | Manager clicks the 'restrict' button beside the information of a guest. |
| ←         | 9 | System displays a small window where Manager can set the restricted period. |
| →         | 10 | Manager (a) inputs the days as the restricted period and (b) clicks the 'restrict' button on the window. |
| ←         | 11 | System prepares a database query that perfectly matches the information of guest to be updated. |
| →         | 12 | Database (a) updates the restricted state and its period of matching record using the query and (b) informs System of successful update. |
| ←         | 13 | System shows Manager a message that the update is successful. |


## Flow of Events for Extensions (Alternate Scenarios)
6a. Database does not return any matching record. 
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System shows Manager a message that there is no such guest. |
|           | 2 | Same as in Step 4 above. |
