import React, { Component } from 'react'
import weaponSystem from './weaponsystem.gif'

class WeaponSystem extends Component {

  render() {
    const imgStyle = {
        width: "70%",
        margin: "20px",
        borderRadius: "300px"
      }
      const missionStyle = {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "0px"
      }
    return (
        <div>
          <img src={weaponSystem} style={imgStyle}/>
          <p style={missionStyle}>Create, Transform, and Destroy Planets and Celestial Bodies!</p>
        </div>
    )
  }
}
    export default WeaponSystem