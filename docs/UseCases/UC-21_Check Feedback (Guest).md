# Use Case: Check Feedback (Guest)

## **Related Requirements**

REQ53

## **Initiating Actors**

Guest

## **Actor's Goal**

To view the feedback log

## **Participating Actors**

Database

## **Preconditions**

- System displays the menu of available function(Write Feedback)

## **Postconditions**

- Guest gets information of his or her feedback log

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Guest selects the menu "Write Feedback". |
| ←         | 3 | System prepares a database query to pick out the guest's own feedback from the Database. |
| ←         | 4 | Database returns feedbacks which is written by the guest. |
| ←         | 5 | System displays the guest's feedback log. |

## Flow of Events for Extensions (Alternate Scenarios)
4a. Database does not return any matched feedback. 
| Direction | n | Actor Action                                                                                                       |
| --------- | - | ------------------------------------------------------------------------------------------------------------------ |
| ←         | 1 | System shows Manager a message that there's no feedback which is written by the guest. |
|           | 2 | Same as in Step 2 above. |