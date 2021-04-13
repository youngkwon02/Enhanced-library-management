# Use Case: E Book Reading

## **Related Requirements**

REQ-37, 40, 44

## **Initiating Actors**

Guest

## **Actor's Goal**

Read e book.

## **Participating Actors**

E book viewer

## **Preconditions**

- Guest issued e book.
- E book period has not yet passed.

## **Postconditions**

- Guest can read e book as long as guest wants.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                             |
| --------- | --- | ---------------------------------------------------------------------------------------- |
|           | 1   | Include issue information watching for guest                                             |
| →         | 2   | Guest clicks read on e book viewer                                                       |
| ←         | 3   | System shows e book viewer with e book's contents when e book period has not yet passed. |
