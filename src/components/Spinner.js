import spiner from "./loading.gif"
import React from 'react'


const Spinner =()=> {
    return (
      <div className="text-center">
        <img  width={100} src={spiner} alt={"loading"}/>
      </div>
    )
}

export default Spinner
