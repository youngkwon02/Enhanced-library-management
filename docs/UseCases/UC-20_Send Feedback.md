# Use Case: Send Feedback

## **Related Requirements**

REQ51, REQ52

## **Initiating Actors**

Guest

## **Actor's Goal**

To send feedback

## **Participating Actors**

none

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
| ←         | 3 | System displays a block for writing feedback. |
| →         | 4 | Guest writes feedback in the block. |
| →         | 5 | Guest clicks a submit button. |
| ←         | 6 | System displays the feedback log which his or her writes just before. |