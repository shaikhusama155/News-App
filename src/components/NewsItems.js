import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription, imgUrl,newsUrl} = this.props
    return (
      <div>
        <div className="card rounded my-2" style={{width: "18rem"}}>
         <img src={!imgUrl?"https://i-invdn-com.investing.com/news/indicatornews_3_800x533_L_1412601605.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <a href={newsUrl} target='-blank' className="btn btn-sm btn-dark">Go More</a>
       </div>
    </div>
      </div>
    )
  }
}

export default NewsItems
