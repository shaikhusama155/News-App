import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 18,
    category: "general"

  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 9,
      totalResults: 0, 
    };
    document.title = `${this.capitalize(this.props.category)} - Newsmonkey`
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let passedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: passedData.articles,
      totalResults: passedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);

  }
  fetchMoreData = async () => {
   this.setState({page: this.state.page + 1})
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${this.state.page}&pageSize=${this.state.pageSize}`;
   let data = await fetch(url);
   let passedData = await data.json();
   this.setState({
     articles: this.state.articles.concat(passedData.articles),
     totalResults: passedData.totalResults,
   });
  };

  // goToNext = async () => {
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
  //     // Handle case when there are no more pages
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
  //     let data = await fetch(url);
  //     let passedData = await data.json();
  //     console.log("next");
  //     this.setState({
  //       page: this.state.page + 1,
  //       articles: passedData.articles,
  //     });
  //   }
  // };

  // goToPrev = async () => {
  //   if (this.state.page - 1 <= 0) {
  //     // Handle case when trying to go to a negative page
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
  //     let data = await fetch(url);
  //     let passedData = await data.json();
  //     console.log("previous");
  //     this.setState({
  //       page: this.state.page - 1,
  //       articles: passedData.articles,
  //     });
  //   }
  // };
  render() {
    return (
      <>
        <h1 style={{fontFamily:"cursive", textAlign:"center", margin:"20px", borderTop: "3px solid black",borderBottom: "3px solid black"}}>NewsMonkey - <span style={{color: "orange"}}> {this.capitalize(this.props.category)} </span> Headlines</h1>
       {this.state.loading && <Spinner/>}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
        {this.state.articles.map((element)=>{
          return<div className='col-md-4'key={element.url}>
             <NewsItems title={element.title?element.title:""} discription = {element.description?element.description:""} imgUrl ={element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
        })}
        </div> 
        </div>
        </InfiniteScroll> 
        {/* <div className='container d-flex justify-content-between mt-10'>
        <button disabled={this.state.page <=1} type="button" onClick={this.goToPrev} className="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={this.goToNext} className="btn btn-dark">Next &rarr;</button>
          </div>  */}
      </>
    )
  }
}

export default News
