import React, {useEffect,useState } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [totalResults, setTotalResults] = useState(0);

// document.title = `${capitalize(props.category)} - Newsmonkey`
const  capitalize = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }
 

 const updateNews = async ()=> {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${page}&pageSize=${props.pageSize}`;
    setLoading({ loading: true });
    let data = await fetch(url);
    props.setProgress(30);
    let passedData = await data.json();
    props.setProgress(70);
    setArticles(passedData.articles);
    setTotalResults(passedData.totalResults);
    setLoading(false)
    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])
  
  const fetchMoreData = async () => {
    setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${page+1}&pageSize=${props.pageSize}`;
   let data = await fetch(url);
   let passedData = await data.json();
   setArticles( articles.concat(passedData.articles),)
   setTotalResults(passedData.totalResults)
  };

  // goToNext = async () => {
  //   if (page + 1 > Math.ceil(totalResults /pageSize)) {
  //     // Handle case when there are no more pages
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${page + 1}&pageSize=${pageSize}`;
  //     let data = await fetch(url);
  //     let passedData = await data.json();
  //     console.log("next");
  //       setPage(page + 1);
  //     setState({
  //       articles: passedData.articles,
  //     });
  //   }
  // };

  // goToPrev = async () => {
  //   if (page - 1 <= 0) {
  //     // Handle case when trying to go to a negative page
  //   } else {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=657c6c13f2c34066ae90d51a6dcb9f12&page=${page - 1}&pageSize=${pageSize}`;
  //     let data = await fetch(url);
  //     let passedData = await data.json();
  //     console.log("previous");
  //      setPage(page - 1);
  //     setState({
  //       articles: passedData.articles,
  //     });
  //   }
  // };
    return (
      <>
        <h1 style={{fontFamily:"cursive",marginTop:"90px",marginBottom:"50px", textAlign:"center", margin:"20px", borderTop: "3px solid black",borderBottom: "3px solid black"}}>NewsMonkey - <span style={{color: "orange"}}> {capitalize(props.category)} </span> Headlines</h1>
        {loading && <Spinner/>}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
        {articles.map((element)=>{
          return<div className='col-md-4'key={element.url}>
             <NewsItems title={element.title?element.title:""} discription = {element.description?element.description:""} imgUrl ={element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
        })}
        </div> 
        </div>
        </InfiniteScroll> 
        {/* <div className='container d-flex justify-content-between mt-10'>
        <button disabled={page <=1} type="button" onClick={goToPrev} className="btn btn-dark">&larr; Previous</button>
        <button type="button" onClick={goToNext} className="btn btn-dark">Next &rarr;</button>
          </div>  */}
      </>
    )
};
News.defaultProps = {
  country: 'in',
  pageSize: 18,
  category: "general"

}
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}

export default News
