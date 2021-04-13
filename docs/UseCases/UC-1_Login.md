# Use Case: Login

## **Related Requirements**

REQ-1

## **Initiating Actors**

Any of: Manager, Guest

## **Actor's Goal**

To get the authority to access the system

## **Participating Actors**

X

## **Preconditions**

- The account information is stored in the system database.

## **Postconditions**

- User is authorized.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| →         | 1 | User selects whether he/she is a manager or a guest. |
| →         | 2 | User inputs valid ID and password in the blank. |
| →         | 3 | User clicks the 'Login’ button. |
| ←         | 4 | System verifies the ID and password are valid. |
| ←         | 5 | System redirects an user to the ‘Add Book’ page if he/she is a manager and to the ‘Search Book’ page if he/she is a guest. |

## Flow of Events for Extensions (Alternate Scenarios)
2a. User inputs invalid ID and password in the blank.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detects error, (b) increases the login fail count, and (c) shows a login fail message. |
| ←         | 2 | System (a) detects that the count of failed attempts exceeds the maximum allowed number, (b) signals to the actor, and (c) blocks the login action for 10 minutes. |
| →         | 3 | User inputs valid ID and password in the blank. |
|           | 4 | Same as in Step 5 above. |
