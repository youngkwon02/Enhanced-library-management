# Use Case: Restrict Guest

## **Related Requirements**

REQ-6, REQ-7, REQ-8, REQ-9, REQ-10, REQ-31

## **Initiating Actors**

Manager

## **Actor's Goal**

To give disadvantage to a guest who has caused damage in the library

## **Participating Actors**

Guest

## **Preconditions**

- 

## **Postconditions**

- Guest who is restricted by manager cannot issue any books.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager enters the ‘Delete/Restrict Guest’ menu. |
| →         | 3 | Manager searches for a guest with a name or ID to restrict. |
| ←         | 4 | System shows a guest who has a name or ID searched. |
| →         | 5 | Manager clicks the ‘Restrict’ button beside the guest information. |

## Flow of Events for Extensions (Alternate Scenarios)
3a. Manager searches for a guest with wrong name or wrong ID.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System shows a wrong guest. |
|           | 2 | Same as in Step 3 above. |
