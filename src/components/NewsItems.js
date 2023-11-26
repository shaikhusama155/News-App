import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, discription, imgUrl,newsUrl, author, date, source} = this.props
    return (
      <div>
        <div className="card rounded my-2">
          <div style={{display: "flex",position: "absolute", justifyContent:"flex-end",right: "0"}}>
        <span className="badge rounded-pill bg-danger"style={{left: "90%",zIndex: "1"}}>
                {source}
              </span>
         </div>
         <img src={!imgUrl?"https://i-invdn-com.investing.com/news/indicatornews_3_800x533_L_1412601605.jpg":imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p class="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target='-blank' className="btn btn-sm btn-dark">Go More</a>
       </div>
    </div>
      </div>
    )
  }
}

export default NewsItems
