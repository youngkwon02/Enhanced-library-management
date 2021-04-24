# Use Case: Issue Paper-Book
## **Related Requirements**

Req-06, Req-07, Req-08, Req-09, Req-10,Req-11, Req-12, Req-13, Req-14, Req-15, Req-21

## **Initiating Actors**

Manager

## **Actor's Goal**

Issuing books to guest

## **Participating Actors**

Guest, Database

## **Preconditions**

- Manager has to know the basic information about the books and guest.
- Manager has to be authenticated through Login.
- System displays menu of available function(Book Issue).

## **Postconditions**

- The system should add the books in the guests' issued book information' list.
- The information about the issue is stored at database.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login. |
| →         | 2 | Manager clicks Book Issue button. |
| ←         | 3 | System shows input fields for searching Guest's information. |
| →         | 4 | Manager searches for a guest with a name or ID.|
| ←         | 5 | System prepares a database query of guests that best matches with the Manager’s search criteria. |
| →         | 6 | Database returns the matched guests. |
| ←         | 7 | System displays the list of matched guests to manager. |
| →         | 8 | Manager selects the guest who will issue from the matched guest list. |
| ←         | 9 | System shows information of the selected guest such as profile photo, name, ID, phone number, current issue restriction state, and book issue information.|
| →          | 10 | Manager clicks a proceed button. |
| ←         | 11 | System shows input fields for searching books. |
| →         | 12 | Manager searches for a book with a title or author. |
| ←         | 13 | System prepares a database query of books that best matches with manager's search criteria.|
| →         | 14 | Database returns the matched books. |
| ←         | 15 | System displays the list of matched books to manager. |
| →         | 16 | Manager selects the books which guest wants to issue from the matched books list. |
| ←         | 17 | System adds the selected books to issuing list and provides it as separate window to manager. |
| →         | 18 | Manager clicks a 'Issue' button.|
| ←         | 19 | System (a)confirms the paperbook issue request and (b) stores in the Database.|

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|          | 10a | the selected guest is restricted from issuing,  |
| ←         | 1 | System (a) alerts that this guest is restricted and (b)moves back to step 3 above. |
| →         | 2 | Manager selects the guest who isn't restricted. |
| ←         | 3 | Same as step 4 above.|
