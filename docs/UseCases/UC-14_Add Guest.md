# Use Case: Add Guest

## **Related Requirements**

REQ-32, REQ-33, and REQ-34

## **Initiating Actors**

Manager

## **Actor's Goal**

To add guest in library system

## **Participating Actors**

X

## **Preconditions**

- Manager click add guest menu.

## **Postconditions**

- The guest should be added to the library system. And the library system allows the guest to use the system.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|            | 1 | Include Login |
| ←         | 2 | System show add guest page with input fields for enter guest information |
| →         | 3 | Manager click the ID generate button |
| ←         | 4 | System generate new ID for the new guest and provide it to the manager |
| →         | 5 | Manager (a)input the information of guest, such as name, generated ID, phone number, password, profile image, e-mail. |
| →         | 6 | Manager click add button. |
| ←         | 7 | System (b)show the message that the addition is success |


## Flow of Events for Extensions (Alternate Scenarios)
5a. The guest is already exist
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
| ←         | 1 | System (a) detect error, (b)show the message that the guest is already exist, (c) disable add button.|
| →         | 2 | Manager input valid information of guest, such as name, generated ID, phone number, password, profile image, e-mail. |
|             | 3 | Same as int Step 6 above |
