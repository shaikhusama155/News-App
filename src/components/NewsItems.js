import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription, imgUrl,newsUrl} = this.props
    return (
      <div>
        <div className="card rounded my-2" style={{width: "18rem"}}>
         <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <a href="/" className="btn btn-sm btn-primary">Go More</a>
       </div>
    </div>
      </div>
    )
  }
}

export default NewsItems
