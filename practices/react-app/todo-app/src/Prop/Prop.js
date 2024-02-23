import React from 'react'

export default function Prop(props) {
    console.log(props);
  return (
    <div>
      <h1>{props.name} - {props.year}</h1>
    </div>
  )
}
 

