# Use Case: Manage Overdue Guest

## **Related Requirements**

REQ-23, REQ-24, REQ-25, REQ-26

## **Initiating Actors**

Manager

## **Actor's Goal**

To encourage overdue guest to return book

## **Participating Actors**

E-mail Svc, SMS Svc

## **Preconditions**

- 

## **Postconditions**

- Manager gets the information about the overdue guest.
- Guest receives message or Email for an urgent return.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager enters the ‘Check overdue guests’ tab at the ‘Calculate Fine’ menu. |
| ←         | 3 | System shows the list of overdue guests sorted in descending order by overdue days. |
| →         | 4 | Manager sets a criteria of long overdue days. |
| ←         | 5 | System filters long-overdue guests who exceed the criteria. |
| →         | 6 | Manager clicks the ‘SMS’ or ‘E-mail’ button to send a notification to the filtered guests. |
| ←         | 7 | SMS Svc sends a SMS notification to the chosen guests if the manager clicks the ‘SMS’ button, and E-mail Svc sends an E-mail notification to the chosen guests if the manager clicks the ‘E-mail’ button. |

## Flow of Events for Extensions (Alternate Scenarios)
5a. System has no long-overdue guests who exceed the criteria.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System shows the list of no one. |
| →         | 2 | Manager sets a lower criteria of long overdue days. |
|           | 3 | Same as in Step 5 above. |
