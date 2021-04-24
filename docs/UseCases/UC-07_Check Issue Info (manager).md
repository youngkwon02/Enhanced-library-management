# Use Case: Check Issue Info (manager)

## **Related Requirements**

REQ-06, REQ-07, REQ-08, REQ-09, REQ-10, REQ-16

## **Initiating Actors**

Manager

## **Actor's Goal**

To check which book a guest has issued

## **Participating Actors**

Database

## **Preconditions**

- Manager has to be authenticated through Login
- Manager clicks menu of available function ('Search Guest's Issue')
- Manager clicks the 'Book Return' tab at the 'Calculate Fine' menu. (UC-05)

## **Postconditions**

- Manager gets the information about the book issue of a guest.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1). |
| ←         | 2 | System shows input fields for searching Guest's information. |
| →         | 3 | Manager searches for a guest with a name or ID. |
| ←         | 4 | System prepares a database query of guests that best matches with the Manager’s search criteria. |
| →          | 5 | Database returns the matched guests. |
| ←         | 6 | System displays the list of matched guests's simply summarized information consist of profile photo, name and ID to manager. |
| →          | 7 | Manager selects the guest that the manager wants to check. |
| ←          | 8 | System prepares a database query of books which the selected guest issue. |
| →          | 9 | Database returns the array of books. |
| ←         | 10 | System displays the information of the books which are issued by the selected guest. The information is consist of title, author, issue period, overdue state, and calculated fine. |
