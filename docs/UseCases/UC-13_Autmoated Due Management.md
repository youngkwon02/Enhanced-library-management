# Use Case: Automated Due Management

## **Related Requirements**

REQ-21, REQ-44, REQ-49, REQ-50

## **Initiating Actors**

Scheduler

## **Actor's Goal**

Automatically check overdue issue, upcoming due issue and send notification of upcoming due issue.

## **Participating Actors**

SMS Svc, Email Svc, Database, Guest

## **Preconditions**

- Guest has the overdue issues.
- Guest has issues of which due date is upcoming.

## **Postconditions**

- Guest is restricted depending on overdue days.
- Guest's overdue E-book is returned automatically.
- Guest gets the notification of upcoming due book issue.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                                                                       |
| --------- | --- | ------------------------------------------------------------------------------------------------------------------ |
| →         | 1   | Scheduler alerts the system that the system need to check about upcoming due.                                      |
| ←         | 2   | System prepares a database query that gets all book and E-book issues and retrieves the records from the Database. |
| →         | 3   | Database returns the matching records.                                                                             |
| ←         | 4   | System (a)restricts overdue guest depending on overdue days and (b)gets return of E-book which is overdue.         |
| ←         | 5   | System request that SMS Svc and Email SVC send the notifications to Guests who have upcoming due.                  |
| →         | 6   | SMS Svc and Email Svc returns the result of sending notifications.                                                 |
