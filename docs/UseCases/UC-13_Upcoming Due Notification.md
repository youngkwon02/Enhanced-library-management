# Use Case: Upcoming Due Notification

## **Related Requirements**

REQ-49, 50

## **Initiating Actors**

Scheduler

## **Actor's Goal**

Notify a guest that he has upcoming due of book issue

## **Participating Actors**

SMS Svc, Email Svc, Guest

## **Preconditions**

- Guest has the issue of which due date is upcoming

## **Postconditions**

- Guest gets the notification of upcoming due book issue.

## Flow of Events for Main Success Scenario

| Direction | n   | Actor Action                                                 |
| --------- | --- | ------------------------------------------------------------ |
| →         | 1   | Scheduler alerts the system there's upcoming due book issue. |
| ←         | 2   | System sends notification to sms, email svc                  |
