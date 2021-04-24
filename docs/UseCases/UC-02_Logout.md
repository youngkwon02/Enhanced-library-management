# Use Case: Logout

## **Related Requirements**

REQ-2

## **Initiating Actors**

Any of: Manager, Guest

## **Actor's Goal**

To safely finish the use of the system.

## **Participating Actors**



## **Preconditions**

- The system displays the 'logout' button.

## **Postconditions**

- User has no more authority.

## Flow of Events for Main Success Scenario
| Direction | n | Actor Action                                                                                                         |
| --------- | - | -------------------------------------------------------------------------------------------------------------------- |
|           | 1 | Include Login (UC-1) |
| →         | 2 | User clicks the ‘Logout’ button. |
| ←         | 3 | System expires the user’s authentication for the system. |
| ←         | 4 | System redirects the user to the ‘Login’ page. |
