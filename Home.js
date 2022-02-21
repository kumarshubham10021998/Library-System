import React from 'react'

function Home() {
  return (
    <div>
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100 h-75 " src="https://storage.googleapis.com/du-prd/books/images/9781250278210.jpg" alt="First slide"/>
        <div className="carousel-caption d-none d-md-block">
          <h2> Welcome to My page </h2>
          <p>This is my Technology,Web-Development page</p>
          <button className="btn btn-danger">web-development</button>
          <button className="btn btn-primary">Technology</button>
          <button className="btn btn-success"> Tech fun</button>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://storage.googleapis.com/du-prd/books/images/9780525559474.jpg" alt="Second slide"/>
        <div className="carousel-caption d-none d-md-block">
          <h2>Welcome to Technology</h2>
          <p>This page Components,tools, Parts</p>
          <button className="btn btn-danger">Components</button>
          <button className="btn btn-primary">Tools</button>
          <button className="btn btn-success"> Parts</button>
        </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src="https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg" alt="Third slide"/>
        <div className="carousel-caption d-none d-md-block">
          <h2>Welcome to Mobile Technology </h2>
          <p> mobile Apps,Development,Android</p>
          <button className="btn btn-danger">Mobile Apps</button>
          <button className="btn btn-primary">Development</button>
          <button className="btn btn-success"> Android</button>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

    </div>
  )
}

export default Home
