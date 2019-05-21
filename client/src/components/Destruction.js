import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import explosion from './explosion.gif'

class Destruction extends Component {

  render() {
    const imgStyle = {
        width: "65%",
        margin: "20px 0px 0px",
        borderRadius: "300px"
      }
    return (
        <div>
            <div><img src={explosion} style={imgStyle}/></div>
            <div><Link to="/"><button className="redButton">Back to Command Console</button></Link></div>
        </div>
    )
  }
}
    export default Destruction