# Use Case: Upcoming Due Notification

## **Related Requirements**

REQ-49, 50

## **Initiating Actors**

Scheduler

## **Actor's Goal**

Notify a guest that he has upcoming due of book issue

## **Participating Actors**

SMS Svc, Email Svc, Database, Guest

## **Preconditions**

- Guest has the issue of which due date is upcoming

## **Postconditions**

- Guest gets the notification of upcoming due book issue.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                             |
| --------- | --- | -------------------------------------------------------------------------------------------------------- |
| →         | 1   | Scheduler alerts the system that the system need to check about upcoming due.                            |
| ←         | 2   | System prepares a database query that gets upcoming due retrieves the records from the Database.         |
| →         | 3   | Database returns the matching records.                                                                   |
| ←         | 4   | System request that SMS Svc and Email SVC send the notifications to Guests returned as matching records. |
| →         | 5   | SMS Svc and Email Svc returns the result of sending notifications.                                       |
