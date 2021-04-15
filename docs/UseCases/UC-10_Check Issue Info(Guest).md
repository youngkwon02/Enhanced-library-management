# Use Case: Check Issue Info(Guest)

## **Related Requirements**

Req36, Req37, Req44

## **Initiating Actors**

Guest

## **Actor's Goal**

To check which book a guest has issued.

## **Participating Actors**

X

## **Preconditions**

## **Postconditions**

- Guest gets the information about the book issue of ownself.


## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login(UC-1)|
| →         | 2 | Guest clicks 'check my issue' button. |
| ←         | 3 | System shows 'paper-book tab' and 'e-book tab' to guest. |
| →         | 4 | If Guest clicks 'paper-book tab', |
| ←         |   | System shows paper-book issue information of the guest, such as title, issue start date, due date, overdue state, and late fee to a guest. |
| →         | 4-1 | If Guest clicks 'e-book tab', |
| ←         |   | System shows e-book issue information of the guest, such as title, issue start date, and due date to a guest. |

## Flow of Events for Extensions (Alternate Scenarios)
2a. User inputs invalid ID and password in the blank.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 4-1a | If book issue date exceeds returning period, |
| ←         | 1 | System (a)return the exceeded period book and (b)delete that e-book's information at 'e-book tab'  |
