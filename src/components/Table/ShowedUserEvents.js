import React from 'react'

const ShowedUserEvents = ({ loadedUserEvents }) => {
console.log(loadedUserEvents);
  return (
    <div>
      {loadedUserEvents.map((meet) => {
        
      })}
    </div>
  )
}

export default ShowedUserEvents