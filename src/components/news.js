import React,{useEffect,useState} from 'react';
import NewsItem from './newsItem';
import Spinner from './spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props)=>{
  const[articles,setArticles]=useState([]);
  const[loading,setloading]=useState(true);
  const[page,setpage]=useState(1);
  const[totalResult,setTotalResult]=useState(0);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const updateNews=async()=>{
    props.setProgress(10)
    let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page}}`;
    setloading(true)
    let data = await fetch(url);
    props.setProgress(50)
    let parseData = await data.json();
    props.setProgress(70)
    setArticles(parseData.articles);
    setloading(false);
    setTotalResult(parseData.totalResults);
    props.setProgress(100)
 }

useEffect(() => {
  updateNews()
  document.title = `${capitalizeFirstLetter(props.category)}-ApnaNews`
  // enlint-disable-next-line
}, [])

 const fetchMoreData=async()=>{
      let url = `https:newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page+1}`;
      setpage(page+1) 
      let data = await fetch(url);
      let parseData = await data.json();
      setArticles(articles.concat(parseData.articles)); 
      setTotalResult(parseData.totalResults)
  };
 
    let { heading } =props
    return (<>
      <div className='container'>
        <h2 className='text-center heading' style={{ margin: '80px 0px 0px' }}>{heading}</h2>
        `{loading &&<Spinner />}
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !==totalResult}
            loader={<Spinner />}>
        <div className="row my-2">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 50) + "..." : ""} description={element.description ? element.description.slice(0, 88) + "..." : ""} imageUrl={element.urlToImage ? element.urlToImage : "data:image/jpeg;base64,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"}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })} 
            </div>
          </InfiniteScroll>
        
      </div>

    </>

    )
  }

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
  heading: 'ApnaNews-Top Headlines'
}
export default News 