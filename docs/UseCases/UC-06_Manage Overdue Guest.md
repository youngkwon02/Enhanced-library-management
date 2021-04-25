# Use Case: Manage Overdue Guest

## **Related Requirements**

REQ-23, REQ-24, REQ-25, REQ-26

## **Initiating Actors**

Manager

## **Actor's Goal**

To encourage overdue guest to return book

## **Participating Actors**

E-mail Svc, SMS Svc, Database

## **Preconditions**

- Manager is logged in to the system and is shown a "Check Overdue Guests" tab at the "Calculate Fine" menu.

## **Postconditions**

- Manager gets the information about the overdue guests.
- Guest receives message or E-mail for an urgent return.

## Flow of Events for Main Success Scenario
| Direction | n  | Actor Action                                                                                                                                                                                 |
|-----------|----|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|           | 1  | Include Login (UC-1)                                                                                                                                                                         |
| →         | 2  | Manager clicks the "Check Overdue Guests" tab at the "Calculate Fine" menu.                                                                                                                  |
| ←         | 3  | System prepares a database query that retrieves the sorted records based on overdue days from the Database.                                                                                  |
| →         | 4  | Database returns the matching records.                                                                                                                                                       |
| ←         | 5  | System shows the list of overdue guests sorted in descending order by overdue days.                                                                                                          |
| →         | 6  | Manager sets a criteria of long overdue days.                                                                                                                                                |
| ←         | 7  | System prepares a database query that retrieves the sorted records based on long-overdue criteria from the Database.                                                                         |
| →         | 8  | Database returns the matching records.                                                                                                                                                       |
| ←         | 9  | System shows the list of long-overdue guests sorted in descending order by overdue days based on long-overdue criteria.                                                                      |
| →         | 10 | Manager clicks the ‘SMS’ or ‘E-mail’ button to send a notification to the filtered guests.                                                                                                   |
| ←         | 11 | SMS svc sends an SMS notification to the guests if the manager clicks the ‘SMS’ button, and E-mail svc sends an E-mail notification to the guests if the manager clicks the ‘E-mail’ button. |

## Flow of Events for Extensions (Alternate Scenarios)
9a. System has no long-overdue guests who exceed the criteria.
| Direction | n | Actor Action                                        |
|-----------|---|-----------------------------------------------------|
| ←         | 1 | System shows the list of no one.                    |
| →         | 2 | Manager sets a lower criteria of long overdue days. |
|           | 3 | Same as in Step 7 above.                            |
