# Use Case: Check Book Info

## **Related Requirements**

REQ-11, 12, 35, 42, 43

## **Initiating Actors**

Guest

## **Actor's Goal**

To see the informations of book and to issue e-book if possible

## **Participating Actors**

X

## **Preconditions**

- User clicked Book Information button

## **Postconditions**

- User get the information about book

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                                          |
| --------- | --- | --------------------------------------------------------------------------------------------------------------------- |
|           | 1   | Include Login                                                                                                         |
| →         | 2   | User enter book's title or book's author on the search bar.                                                           |
| ←         | 3   | System shows the list of books as a result of searching.                                                              |
| →         | 4   | Guest change the order of listed books based on dictionary order of title, author, or publication date.               |
| →         | 5   | Guest may select search filters such as genre, range of price for which books to view.                                |
| →         | 6   | Guest selects the book on the list.                                                                                   |
| ←         | 7   | System shows detail information about the book such as title, author, location, price, quantity, e-book availability. |

## Flow of Events for Extensions (Alternate Scenarios)

3a. cannot find any book that fits search input

| Direction | n   | Actor Action                                             |
| --------- | --- | -------------------------------------------------------- |
| ←         | 1   | Alert guest that there's no result for that input value. |
| →         | 2   | Guest search for books again                             |
|           |     | same as step 2 above                                     |
