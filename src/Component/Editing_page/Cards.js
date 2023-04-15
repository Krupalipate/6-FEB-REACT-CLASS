function Cards() {
    let cardImg = {
        height:'30vh'
    }
    return (
    <>
    <div className="container">
      <div className="row py-4 ">
        <div className="col-md-4 mb-3">
                  
          <div className="card" >
            <img src="https://assets.traveltriangle.com/blog/wp-content/uploads/2018/06/Mawsmai-Falls-cherrapunji-meghalaya.jpg" className="card-img-top" alt="..." style={cardImg }/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
                  
                  <div className="card" >
                    <img src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/05/Laitlum-Copy.jpg" className="card-img-top" alt="..." style={cardImg } />
                    <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up
                        the bulk of the card's content.
                      </p>
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
        </div>
        <div className="col-md-4 mb-3">
        <div className="card" >
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/b0/31/f4/the-beaut.jpg?w=500&h=400&s=1" className="card-img-top" alt="..." style={cardImg } />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    </>
  );
}
export default Cards;
