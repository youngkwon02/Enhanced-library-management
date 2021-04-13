# Use Case: Check Issue Info (manager)

## **Related Requirements**

REQ-6, REQ-7, REQ-8, REQ-9, REQ-10, REQ-16

## **Initiating Actors**

Manager

## **Actor's Goal**

To check which book a guest has issued

## **Participating Actors**

X

## **Preconditions**

- 

## **Postconditions**

- Manager gets the information about the book issue of a guest.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | Manager searches for a guest with a name or ID. |
| →         | 3 | Manager clicks the guest. |
| ←         | 4 | System shows book issue information of the guest, such as book title, author, its location, issue period, overdue status, and calculated fine. |
