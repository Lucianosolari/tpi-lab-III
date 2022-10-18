import React from 'react'
import EventsCard from '../EventsCard/EventsCard'

const FutureEvents = () => {
  return (
    <EventsCard>
        <p>Fecha</p>
        <h2>Título</h2>
        <p>Organiza</p>
        <p>Ubicación</p>
        <button type="button">Inscribirme</button>
    </EventsCard>
  )
}

export default FutureEvents
