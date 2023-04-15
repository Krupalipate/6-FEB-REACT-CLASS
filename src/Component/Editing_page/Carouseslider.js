function Carousel_slider() {
  let carouselImg =  {
    height: "50vw",
    objectFit:"cover"
  }
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://c.myholidays.com/blog/blog/content/images/2021/04/Bali--Indonesia-1.jpg"
            className="d-block w-100"
            alt="..." style={carouselImg}
          />
        </div>
        <div className="carousel-item">
          <img src="https://i0.wp.com/www.inbali.org/wp-content/uploads/2014/09/Jatiluwih-rice-terraces-bali.jpg?fit=912%2C435&ssl=1" className="d-block w-100" alt="..." style={carouselImg}/>
        </div>
        <div className="carousel-item">
          <img src="https://images.thrillophilia.com/image/upload/s--gfDAHxx0--/c_fill,g_center,h_642,q_auto,w_1280/f_auto,fl_strip_profile/v1/images/photos/000/112/908/original/1499761285_top10-voted-hotels-nusa-dua.jpg.jpg" className="d-block w-100" alt="..." style={carouselImg}/>
        </div>
      </div>
    </div>
  );
}
export default Carousel_slider;
