# Use Case: Reply Feedback

## **Related Requirements**

REQ28, REQ52

## **Initiating Actors**

Manager

## **Actor's Goal**

To reply feedback for guest

## **Participating Actors**

Database

## **Preconditions**

- System displays the menu of available function(View Feedback)

- System displays the manager the feedback of the responsible guests

- System provides a block for writing feedback reply

- System provides a reply button

## **Postconditions**

- Guest checks the feedback reply of the manager in charge

- Manager checks the feedback reply which his or her writes just before

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Check Feedback (Manager) (UC-18) |
| →         | 2 | Guest selects the menu "View Feedback". |
| ←         | 3 | System displays the feedback of the each guests. |
| →         | 4 | Manager selects specific feedback from the responsible guest to reply to. |
| ←         | 5 | System displays a block for writing feedback reply. |
| →         | 6 | Manager writes reply of feedback in the block. |
| →         | 7 | Manager clicks a reply button. |
| ←         | 8 | System prepares a database query for saving the new reply to the Database. |
| →         | 9 | Database (a) creates a new record using the new reply and (b) informs System of success operation. |
| ←         | 10 | System displays the reply of feedback which his or her writes just before. |