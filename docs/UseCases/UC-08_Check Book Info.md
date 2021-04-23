# Use Case: Check Book Info

## **Related Requirements**

REQ-11, 12, 35, 42, 43

## **Initiating Actors**

Guest

## **Actor's Goal**

To see the informations of a book and to issue e-book if possible

## **Participating Actors**

Database

## **Preconditions**

- Actor is logged in as guest.

## **Postconditions**

- Actor get the information of a book.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                                                                                                                      |
| --------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|           | 1   | Include Login                                                                                                                                                                                     |
| ←         | 2   | System shows the list of all books and search bar for searching books with criteria section which can be book title or author.                                                                    |
| →         | 3   | Actor enter book's title or book's author on the search bar.                                                                                                                                      |
| ←         | 4   | System Prepares a database query that best matches the actor's search criteria and retrieves the records from the Database.                                                                       |
| →         | 5   | Database returns the matching records.                                                                                                                                                            |
| ←         | 6   | System (a)renders result page by returned records and (b)shows the list of books as a result of searching.                                                                                        |
| →         | 7   | Actor may (a)change the order of listed books based on dictionary order of title, author, or publication date and (b)select search filters such as genre, range of price for which books to view. |
| ←         | 8   | System (a)re-renders result page by changed filter and (b)shows the list of books as a result of filtering.                                                                                       |
| →         | 9   | Actor clicks the book on the list.                                                                                                                                                                |
| ←         | 10  | System shows detail information about the book such as title, author, location, price, quantity, e-book availability.                                                                             |

## Flow of Events for Extensions (Alternate Scenarios)

3a. Actor just selects a book without searching.

| Direction | n   | Actor Action         |
| --------- | --- | -------------------- |
|           |     | same as step 9 above |

5a. Cannot find any book that matches search input so empty result of records returned.

| Direction | n   | Actor Action                                             |
| --------- | --- | -------------------------------------------------------- |
| ←         | 1   | Alert actor that there's no result for that input value. |
| →         | 2   | Actor searches for books again                           |
|           |     | same as step 3 above                                     |
