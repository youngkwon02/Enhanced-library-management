# Use Case: Add Book

## **Related Requirements**

 REQ-3, REQ-4, and REQ-5

## **Initiating Actors**

 Manager

## **Actor's Goal**

 To add book in library system

## **Participating Actors**

X 

## **Preconditions**

 Manager click add book menu

## **Postconditions**

 The system should modify the quantity of book


## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|            | 1 | Include Login |
| ←         | 2 | System show add book page with input fields for enter book information |
| →         | 3 | Manager (a)input the information of book, such as a title, author, cover image, description, price, quantity, location in library, E-book file, and ID which is made automatically |
| →         | 4 | Manager click add button |
| ←         | 5 | System (b)show message that addition is success |


## Flow of Events for Extensions (Alternate Scenarios)
3a. The book is already exist
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detect error, (b) alert with message that already the book is exist. |
| →         | 2 | Manager input valid book information of book, such as a title, author, cover image, description, price, quantity, location in library, E-book file, and ID which is made automatically |
|             | 3 | Same as int Step 4 above |
