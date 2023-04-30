import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{Display: 'flex', position: 'absolute', justifyContent: 'flex-end', right: '0'}}>
            <span className=" badge rounded-pill bg-success">
              {source}
            </span>
          </div>
          <img src={!imageUrl ? "https://media.istockphoto.com/id/1226232663/photo/cement-floor-and-black-wall-backgrounds-empty-room-interior-use-for-display-products.jpg?s=612x612&w=0&k=20&c=2Zxccq1bcoBfKFcfoqiBRpgd9Pbwzv219Yx3kYSOZ7c=" : imageUrl} 
          className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toTimeString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-info">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
