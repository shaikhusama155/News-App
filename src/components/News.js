import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  render() {
    return (
      <div className='container'>
        <h1>NewsMonkey - Headlines</h1>
        <div className='row'>
            <div className='col-md-4'>
             <NewsItems title="News" discription = "newsdisc" />
            </div>
            <div className='col-md-4'>
             <NewsItems title="News" discription = "newsdisc" />
            </div>
            <div className='col-md-4'>
             <NewsItems title="News" discription = "newsdisc" />
            </div>
        </div>
         
      </div>
    )
  }
}

export default News
