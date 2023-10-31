import React from 'react'

const newsItem =(props)=>{
 
    let {description, imageUrl, newsUrl, author, date,source} =props;
    return (

      <>
        <div className="card my-3">
          <div  style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:0}}>
          <span className=" badge rounded-pill bg-danger">
          {source}
          </span>
          </div>
         
          <img src={imageUrl} className="card-img-top" alt="img-1" width="100px" height="150px" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small>By:{author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>  
      </>

    )
  
}

export default newsItem;