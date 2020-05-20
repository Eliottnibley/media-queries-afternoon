import React from 'react'

function Menu (props) {
  let items = props.menuOptions
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
      <li>{items[4]}</li>
    </ul>
  )
}

export default Menu