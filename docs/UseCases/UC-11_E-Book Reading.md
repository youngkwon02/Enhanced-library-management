# Use Case: E Book Reading

## **Related Requirements**

REQ-37, 40, 44

## **Initiating Actors**

Guest

## **Actor's Goal**

Read e book.

## **Participating Actors**

E book viewer, Database

## **Preconditions**

- Guest logged in the system.
- Guest issued e book.
- E book period has not yet passed.
- Guest clicks the E-Book tab in Check Issue Info.

## **Postconditions**

- Guest can read e book as long as guest wants.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                       |
| --------- | --- | ---------------------------------------------------------------------------------- |
|           | 1   | Include issue information watching for guest                                       |
| →         | 2   | Guest clicks 'Read on Viewer' button on e book                                     |
| ←         | 3   | System prepares a database query that gets the content of e book from the Database |
| →         | 4   | Database returns the result                                                        |
| ←         | 5   | System provide e book's contents to E book viewer.                                 |
| ←         | 6   | E book viewer show e book's contents to guest.                                     |
