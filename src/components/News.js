import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    this.state ={
      articles:[],
      loading : false,
      page :1,
      pageSize:20
    }
  }
  
 async componentDidMount(){
  await this.fetchDate();
 }
  fetchData = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${this.state.page}&pageSize=20`;
    let data = await fetch(url);
    let passedData = await data.json()
    this.setState({articles: passedData.articles, totalResults: passedData.totalResults})
  }


   goToNext = async ()=>{
     await this.setState(
      {
        page: this.state.page + 1,
      },
      () => this.fetchData()
    );


  }
  goToPrev = async ()=>{
    await this.setState(
      {
        page: this.state.page - 1,
      },
      () => this.fetchData()
    );

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
        <button disabled={this.state.page <=1} type="button" onClick={this.goToPrev} className="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={this.goToNext} className="btn btn-dark">Next &rarr;</button>
          </div> 
      </div>
    )
  }
}

export default News
