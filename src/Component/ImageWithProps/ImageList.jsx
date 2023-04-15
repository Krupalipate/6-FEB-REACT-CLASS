import React, { useState } from "react";
import Image from "./Image";
import img1 from "./Images/Img1.jpg";
import img2 from "./Images/Img5.jpg";
import img3 from "./Images/Img3.jpg";
import img4 from "./Images/Img4.jpg";

function ImageList() {
  //  images ne loop ma gumavu che to
  //  const [images,setImages]= useState([ img1, Img5, img3 ,img4])
  const [productDetails, setProductDetails] = useState([
    // aama multipale object lakhi sakay

    {
      id: 1,
      img: img1,
      title: "IMAGE 1", //aa component ma data pass karva hoi to props no used karvo
    },
    {
      id: 1,
      img: img1,
      title: "IMAGE 1",
    },
    {
      id: 2,
      img: img2,
      title: "IMAGE 2",
    },
    {
      id: 3,
      img: img3,
      title: "IMAGE 3",
    },
    {
      id: 4,
      img: img4,
      title: "IMAGE 4",
    },
  ]);

  // Remove product button
  function deletproduct() {
    // aa function thi badha j product jata rese ne totle 0 thai jase te mate ([ ]) khali array lidho.
    setProductDetails([]);
  }

  // show product button
  function Showproduct() {
    setProductDetails([
      // aama multipale object lakhi sakay

      {
        id: 1,
        img: img1,
        title: "IMAGE 1", //aa component ma data pass karva hoi to props no used karvo
      },
      {
        id: 1,
        img: img1,
        title: "IMAGE 1",
      },
      {
        id: 2,
        img: img2,
        title: "IMAGE 2",
      },
      {
        id: 3,
        img: img3,
        title: "IMAGE 3",
      },
      {
        id: 4,
        img: img4,
        title: "IMAGE 4",
      },
    ]);
  }

  return (
    <div className="container mb-5 ">
      <div className="d-flex justify-content-between align-item-center mt-5">
        {/* totle ketli img che te batave che   {productsDetails.lenght} */}
        <h1>Total Image :{productDetails.length}</h1>

        <button className="btn btn-primary" onClick={deletproduct}>
          clear all products
        </button>
        <button className="btn btn-primary" onClick={Showproduct}>
          show all products
        </button>
      </div>

      <div className="row " style={{ marginTop: "5%" }}>
        {/* 
              <img src={img1} alt="" />
              <img src={Img5} alt="" />
              <img src={img3} alt="" />
              <img src={img4} alt="" />
         */}
        
        {/* {

          images.map((item) => {
          return <img  width="400px" height="300px" src={item} alt="" />
        })          
          
        } */}

        {productDetails.map((item) => {
          const { id, img, title } = item; // aa distrucharing ni kare to <Imge key={item.id} deti
          return <Image key={id} img={img} title={title} />; //key kem aape =listing che etle

          // aahiya thi hatavi ne aalag component  lai ne props na thru pass kari sakay
          // <img
          //   width="400px"
          //   height="300px"
          //   src={item}
          //   alt="" />;
        })}
      </div>
    </div>
  );
}

export default ImageList;
