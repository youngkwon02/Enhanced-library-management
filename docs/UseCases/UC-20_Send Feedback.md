# Use Case: Send Feedback

## **Related Requirements**

REQ51, REQ52

## **Initiating Actors**

Guest

## **Actor's Goal**

To send feedback

## **Participating Actors**

Database

## **Preconditions**

- System displays the menu of available function(Write Feedback)

- System provides a block for writing feedback

- System provides a submit button

## **Postconditions**

- Manager checks the feedback of the guest in charge

- Guest checks the feedback log which his or her writes just before

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Guest selects the menu "Write Feedback". |
| ←         | 3 | System displays a form to allow guest to write a feedback. |
| →         | 4 | Guest writes feedback in the given form. |
| →         | 5 | Guest also choose whether write feedback anonymously or not |
| →         | 5 | Guest clicks a submit button. |
| ←         | 6| System prepares a database query for saving the new written feedback to the Database. |
| →         | 7 | Database (a) creates a new record using the new feedback and (b) informs System of success operation. |
| ←         | 8 | System shows the new feedback which his or her writes just before. |