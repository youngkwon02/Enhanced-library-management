# Use Case: Check Guest Info

## **Related Requirements**

REQ-6, 7, 8, 9, 10

## **Initiating Actors**

Manager

## **Actor's Goal**

To view the information of a guest

## **Participating Actors**

Database

## **Preconditions**

- Manager is logged in the system and is shown a 'check guest info' menu.

## **Postconditions**

- Manager gets the information of a guest.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager clicks the 'check guest info' menu. |
| ←         | 3 | System shows 'check guest info' page with an input field for searching guest. |
| →         | 4 | Manager inputs (a) id or (b) name of a guest for searching. |
| ←         | 5 | System (a) prepares a database query that best matches the actor's search input and (b) retrieves the records from the Database. |
| →         | 6 | Database returns the matching records. |
| ←         | 7 | System shows the list of guests as a result of searching. |
| →         | 8 | Manager clicks one of the item in the guest list. |
| ←         | 9 | System (a) redirects Manager to the ‘detailed guest information’ page and (b) shows the guest's detail information such as profile photo, name, ID, phone number, current issue restriction state, and book issue information. |


## Flow of Events for Extensions (Alternate Scenarios)
6a. Database does not return any matching record. 
| Direction | n | Actor Action                                                                                                       |
| --------- | - | ------------------------------------------------------------------------------------------------------------------ |
| ←         | 1 | System shows Manager a message that there is no such guest. |
|           | 2 | Same as in Step 4 above. |
