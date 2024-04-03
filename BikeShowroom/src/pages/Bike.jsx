import React from 'react'
import { useParams } from 'react-router-dom'

export default function Bike() {
    let param = useParams()
    return (
        <div>Bike : {param.bikeid}</div>
    )
}
