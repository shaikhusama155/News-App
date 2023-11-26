import React, { Component } from 'react'
import spiner from "./loading.gif"

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img  width={100} src={spiner} alt={"loading"}/>
      </div>
    )
  }
}

export default Spinner
