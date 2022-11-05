import React from 'react'
import UserFutureEvents from './UserFutureEvents'

const UserEventsList = ({ loadedUserEvents }) => {
  console.log(loadedUserEvents);
  return (
    <>
      <section className="row d-flex justify-content-center align-items-center h-100">
        <ul>
          {/* {loadedUserEvents.map((meet) => (
            <UserFutureEvents
              key={meet.id.NG4FgpnFj3oiRrrHHSc}
              id={meet.id}
              date={meet.userEventDate}
              title={meet.userEventTitle}
              organizer={meet.userEventOrganizer}
              location={meet.userEventLocation}
            />
          ))} */}
        </ul>
      </section>
    </>
  )
}

export default UserEventsList