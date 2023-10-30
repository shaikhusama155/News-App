import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription} = this.props
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
         <img src="https://regmedia.co.uk/2023/06/19/shutterstock_asia_abstract_map.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
       </div>
    </div>
      </div>
    )
  }
}

export default NewsItems
