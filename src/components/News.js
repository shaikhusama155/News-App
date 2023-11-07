import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    this.state ={
      articles:[],
      loading : false,
      page :1
    }
  }
  
 async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=1";
    let data = await fetch(url);
    let passedData = await data.json()
    this.setState({articles: passedData.articles})
  }
   goToNext = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${{ page: this.page + 1}}`;
    let data = await fetch(url);
    let passedData = await data.json()
    this.setState({
    page: this.page + 1,
    articles: passedData.articles,

  })

  }
  goToPrev = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${{ page: this.page - 1}}`;
    let data = await fetch(url);
    let passedData = await data.json()
    this.setState({
    page: this.page - 1,
    articles: passedData.articles,

  })

  }
  render() {
    return (
      <div className='container' >
        <h1 style={{fontFamily:"cursive", textAlign:"center", margin:"20px", borderTop: "3px solid black",borderBottom: "3px solid black"}}>NewsMonkey - Headlines</h1>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return<div className='col-md-4'key={element.url}>
             <NewsItems title={element.title?element.title:""} discription = {element.description?element.description:""} imgUrl ={element.urlToImage} newsUrl ={element.url} />
            </div>
        })}
        </div>  
        <div className='container d-flex justify-content-between mt-10'>
        <button disabled={this.state.page <=1} type="button" onClick={this.goToPrev} class="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={this.goToNext} class="btn btn-dark">Next &rarr;</button>
          </div> 
      </div>
    )
  }
}

export default News
