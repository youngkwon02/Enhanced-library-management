# Use Case: Issue E-book

## **Related Requirements**

REQ38

## **Initiating Actors**

Guest

## **Actor's Goal**

To issue E-book

## **Participating Actors**

none

## **Preconditions**

- System displays the menu of available function(View Books)

- System displays a list of books

- System displays detailed information about a particular book chosen by the guest

- Book chosen by the guest is available for reading as E-book

- System provides a issue button

## **Postconditions**

- Guest reads E-book which his or her issues

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Look Up Book Info (UC-8) |
| →         | 2 | Guest selects the menu "View Books". |
| ←         | 3 | System displays a list of books. |
| →         | 4 | Guest selects a particular book. |
| ←         | 5 | System displays detailed information about a book chosen by the guest. |
| →         | 6 | Guest clicks a issue button if a book is available for reading as E-book. |