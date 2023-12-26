import image from "../assets/new.jpg";


const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} style = {{height:"200px",width:"326px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Explore breaking news and stay in the know with this unfolding story. Get the latest updates, analysis, and insights as events progress. Your go-to source for comprehensive coverage and real-time information on this dynamic topic"}</p>
    <a href={url} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem