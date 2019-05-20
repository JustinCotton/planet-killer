import React, { Component } from 'react'
import weaponSystem from './weaponsystem.gif'

class WeaponSystem extends Component {

  render() {
    const imgStyle = {
        width: "1200px",
        margin: "20px",
        borderRadius: "300px"
      }
    return (
        <div><img src={weaponSystem} style={imgStyle}/></div>
    )
  }
}
    export default WeaponSystem