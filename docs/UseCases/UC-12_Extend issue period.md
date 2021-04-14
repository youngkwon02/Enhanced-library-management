# Use Case: Extend Rental Period

## **Related Requirements**

Req45, Req46

## **Initiating Actors**

Guest

## **Actor's Goal**

To extend a book's rental period.

## **Participating Actors**

X

## **Preconditions**

There should be at least one book in 'check Issue Information' menu.

## **Postconditions**

The modified rental period data is stored into database.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include UC-10 (Check Issue Info(guest)) |
| ←         | 2 | The system shows 'extend' buttons at each books. |
| →         | 3 | Guest clicks 'extend' buttons per each books. |
| ←         | 4 | System (a)alerts success message and (b)extend to predetermined length of period. |

## Flow of Events for Extensions (Alternate Scenarios)
2a. User inputs invalid ID and password in the blank.
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 2a | There is overdue book at 'paper-books tab' |
| ←         | 1 | The system delete 'extend' buttons at overdue books. |
