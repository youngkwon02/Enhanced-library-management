# Use Case: Check Feedback (manager)

## **Related Requirements**

REQ-27

## **Initiating Actors**

Manager

## **Actor's Goal**

To listen to guest’s opinion for improving library service

## **Participating Actors**

Database

## **Preconditions**

- 

## **Postconditions**

- Manager can answer for the feedback.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager enters the ‘View Feedback’ menu. |
| ←         | 3 | System shows a feedback list.  |
| ←         | 4 | System prepares a database query to get the feedbacks from the Database. |
| →         | 5 | Database returns feedbacks. |
| ←         | 6 | System shows the list of feedbacks written by the guests. |

## Flow of Events for Extensions (Alternate Scenarios)
5a. Database does not return any record. 
| Direction | n | Actor Action                                                                                                       |
| --------- | - | ------------------------------------------------------------------------------------------------------------------ |
| ←         | 1 | System shows Manager a message that there is no feedback yet. |
|           | 2 | Same as in Step 3 above. |
