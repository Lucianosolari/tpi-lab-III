// import React, { useState } from 'react'
import Swimmer from './Swimmer';

export default function Table({swimmer}) {
    // const [swimmerList, setSwimmerList] = useState();

  return (
    <>
        <ul>
            <Swimmer swimmer={swimmer} />
        </ul>
    </>
  )
}
