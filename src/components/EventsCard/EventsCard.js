import React from 'react'
import "./EventsCard.css"

const EventsCard = ({children}) => {
  return (
    <div className='future-events-container'>{children}</div>
  )
}

export default EventsCard