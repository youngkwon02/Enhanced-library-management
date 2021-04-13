# Use Case: Check Guest Info

## **Related Requirements**

REQ-6, 7, 8, 9, 10

## **Initiating Actors**

Manager

## **Actor's Goal**

Look up guest's info

## **Participating Actors**

X

## **Preconditions**

- Manager clicked guest info menu button

## **Postconditions**

- Manager gets the information of a guest

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                                                                     |
| --------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
|           | 1   | Include Login                                                                                                                                    |
| →         | 2   | Manager searches guest with (a) id or (b) name                                                                                                   |
| ←         | 3   | System shows the lists of guests as a result of searching.                                                                                       |
| →         | 4   | Manager clicks the item of the lists of guests.                                                                                                  |
| ←         | 5   | System shows the guest's information such as profile photo, name, ID, phone number, current issue restriction state, and book issue information. |

## Flow of Events for Extensions (Alternate Scenarios)

3a. There's no such user

| Direction | n   | Actor Action                                    |
| --------- | --- | ----------------------------------------------- |
| ←         | 1   | Show the manager message "There's no such user" |
|           | 2   | Same as step 2 above                            |
