# Use Case: Add Guest

## **Related Requirements**

REQ-32, REQ-33, and REQ-34

## **Initiating Actors**

Manager

## **Actor's Goal**

To add guest to the system so that the guest can use the library system

## **Participating Actors**

Guest, Database

## **Preconditions**

- Manager is logged in the system and is shown a 'add guest' menu.

## **Postconditions**

- The guest is added to the library system.
- The library system allows the guest to use the system.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager clicks the 'add guest' menu. |
| ←         | 3 | System shows 'add guest' page with input fields for entering guest information. |
| →         | 4 | Manager clicks the 'generate ID' button. |
| ←         | 5 | System (a) generates a new ID for the guest and (b) shows it to Manager. |
| →         | 6 | Manager inputs the information of guest, such as name, phone number, password, profile image, and e-mail. |
| →         | 7 | Manager clicks the 'add' button. |
| ←         | 8 | System prepares a database query that perfectly matches the entered information and retrieves the record from the Database. |
| →         | 9 | Database does not return any matching record. |
| ←         | 10 | System (a) verifies that the guest is new and (b) passes the information to the Database. |
| →         | 11 | Database (a) creates a new record using the guest information and (b) informs System of successful addition. |
| ←         | 12 | System shows Manager a message that the addition is successful. |


## Flow of Events for Extensions (Alternate Scenarios)
9a. Database returns a matching record.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detects error, and (b) shows a message that the guest already exists. |
| →         | 2 | Manager inputs other valid information of guest, such as name, phone number, password, profile image, and e-mail. |
|           | 3 | Same as in Step 7 above. |
