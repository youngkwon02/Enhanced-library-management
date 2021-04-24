# Use Case: Extend Issue Period

## **Related Requirements**

Req45, Req46

## **Initiating Actors**

Guest

## **Actor's Goal**

To extend a book's rental period.

## **Participating Actors**

Database

## **Preconditions**

- Guest logged in system.
- There should be at least one book in 'check Issue Information' menu.
- Guest is watching 'Check Issue Info' page.

## **Postconditions**

- The modified rental period data is stored into database.

## Flow of Events for Main Success Scenario
| Direction | n   | Actor Action                                                                                                                                               |
| --------- | --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           | 1   | Include UC-10 (Check Issue Info(guest))                                                                                                                    |
| →         | 2   | Guest clicks 'extend' buttons per each books.                                                                                                              |
| ←         | 3   | System prepares a database query that extends rental period of book and modifies the record from the Database.                                             |
| →         | 4   | Database returns a message that the record has been modified.                                                                                              |
| ←         | 5   | System alerts success message that  the rental period of the book has been extended by predetermined length of period and system disables 'extend' button. |