# Use Case: Issue paper-book
## **Related Requirements**

Req06, Req07, Req08, Req09, Req10,Req11, Req12, Req13, Req14, Req15, Req21

## **Initiating Actors**

Manager

## **Actor's Goal**

Issuing books to guest

## **Participating Actors**

Guest

## **Preconditions**

- Manager has to know the basic information about the books.
- Manager clicks Book Issue menu.

## **Postconditions**

- The system should add the books in the guests' 'issued book information' list.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|          | 1 | Include Login |
| ←         | 2 | System shows input fields for searching Guest's information |
| →         | 3 | Manager (a) searches for a guest with a name or ID and (b) selects the guest who will issue. |
| ←         | 4 | System shows information of the selected guest such as profile photo, name, ID, phone number, current issue restriction state, and book issue information.|
| →         | 5 | Manager clicks a proceed button. |
| ←         | 6 | System shows input fields for searching books. |
| →         | 7 | Manager (a) searches for a book with a title or author, and (b) selects the book which will be issued. |
| ←         | 8 | System adds the selected books in issuing list. |
| →         | 9 | Manager clicks a 'Issue' button.|

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|          | 4a | the selected guest is restricted from issuing,  |
| ←         | 1 | System (a) alerts that this guest is restricted and (b)moves back to step 3 above. |
| →         | 2 | Manager selects the guest who isn't restricted. |
| ←         | 3 | Same as step 4 above.|
