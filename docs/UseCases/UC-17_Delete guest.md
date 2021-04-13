# Use Case: Delete guest

## **Related Requirements**

REQ-6, REQ-7, REQ-8, REQ-9, REQ-10, REQ-29, REQ-30

## **Initiating Actors**

Manager

## **Actor's Goal**

Delete the guest from the library system.

## **Participating Actors**

 
## **Preconditions**

- Manager click delete/restrict guest menu.

## **Postconditions**

- The guest should be deleted from the library system.  If the deleted guest did not return the book, subtract the quantity not returned to the total quantity of book.  And the guest can never use the library system.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|            | 1 | Include Login |
| ←         | 2 | System show delete/restrict guest page with input fields for search guest |
| →         | 3 | Manager input guest's ID or Name to search the guest. |
| ←         | 4 | System show list of guest's information to manager |
| →         | 4 | Manager clicks a guest to look detail information |
| ←         | 5 | System shows detail information about guest |
| →         | 6 | Manager (a)click delete button on the guest |
| ←         | 7 | System (b)show the message that the deletion is success |


## Flow of Events for Extensions (Alternate Scenarios)
7a. The guest has not returned book yet
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detect error (b) show the message that the guest has not returned book yet.|
| →         | 2 | Manager click the delete button despite the warning message, the guest will be deleted from the system. |
|             | 3 | Same as Step 8 above |
