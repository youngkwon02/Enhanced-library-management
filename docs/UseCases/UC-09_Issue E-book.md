# Use Case: Issue E-book

## **Related Requirements**

REQ38

## **Initiating Actors**

Guest

## **Actor's Goal**

To issue E-book

## **Participating Actors**

Database

## **Preconditions**

- Actor is logged in as guest.
- Actor is watching book information page and E-book is available.
- Issue E-book button is on the page.

## **Postconditions**

- Actor reads E-book which his or her issues.
- Actor can see the issued E-books at check issue info menu.
- Database has updated the data of E-book issue.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                           |
| --------- | --- | ------------------------------------------------------------------------------------------------------ |
|           | 1   | Include Check Book Info (UC-8)                                                                         |
| →         | 2   | Actor clicks a issue button if a book is available for reading as E-book.                              |
| ←         | 3   | System prepares a database query that add the E-book to actor's issue list on database and execute it. |
| →         | 4   | Database returns the result of saving.                                                                 |
